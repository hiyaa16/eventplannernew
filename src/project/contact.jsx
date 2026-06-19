import { useState, useEffect } from 'react'
import trendImg from '../assets/trend.png'
import blogImg from '../assets/image.png'
import rajImg from '../assets/raj.png'

// ── Web3Forms — sends inquiry to your email ───────────────────────
// 1. Go to https://web3forms.com → enter info@eventplannerjodhpur.com
// 2. Copy access key from the email → paste below
const W3F_ACCESS_KEY = '13ec8e85-feb0-4d73-889d-4920b7fd65fe'

// ── CallMeBot — sends WhatsApp message to +91 9602198888 ──────────
// ONE-TIME activation on your phone (takes 1 minute):
// 1. Save this number in contacts: +34 644 50 85 20  (name it "CallMeBot")
// 2. Open WhatsApp → send this exact message to that number:
//    I allow callmebot to send me messages
// 3. You will receive your API key on WhatsApp → paste it below
const CALLMEBOT_APIKEY = 'YOUR_CALLMEBOT_APIKEY'
// ─────────────────────────────────────────────────────────────────

const RAJASTHAN_LOCATIONS = [
  'Jodhpur',
  'Udaipur',
  'Ranakpur',
  'Jaipur',
  'Pushkar',
  'Kumbhalgarh',
  'Other (please specify)',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const COUNTRY_CODES = [
  // India first
  { code: '+91',  label: '+91 🇮🇳 India' },
  // Middle East
  { code: '+971', label: '+971 🇦🇪 UAE' },
  { code: '+966', label: '+966 🇸🇦 Saudi Arabia' },
  { code: '+974', label: '+974 🇶🇦 Qatar' },
  { code: '+965', label: '+965 🇰🇼 Kuwait' },
  { code: '+973', label: '+973 🇧🇭 Bahrain' },
  { code: '+968', label: '+968 🇴🇲 Oman' },
  { code: '+962', label: '+962 🇯🇴 Jordan' },
  { code: '+961', label: '+961 🇱🇧 Lebanon' },
  // North America
  { code: '+1',   label: '+1 🇺🇸 USA / Canada' },
  { code: '+52',  label: '+52 🇲🇽 Mexico' },
  // Europe
  { code: '+44',  label: '+44 🇬🇧 UK' },
  { code: '+49',  label: '+49 🇩🇪 Germany' },
  { code: '+33',  label: '+33 🇫🇷 France' },
  { code: '+39',  label: '+39 🇮🇹 Italy' },
  { code: '+34',  label: '+34 🇪🇸 Spain' },
  { code: '+31',  label: '+31 🇳🇱 Netherlands' },
  { code: '+41',  label: '+41 🇨🇭 Switzerland' },
  { code: '+43',  label: '+43 🇦🇹 Austria' },
  { code: '+32',  label: '+32 🇧🇪 Belgium' },
  { code: '+46',  label: '+46 🇸🇪 Sweden' },
  { code: '+47',  label: '+47 🇳🇴 Norway' },
  { code: '+45',  label: '+45 🇩🇰 Denmark' },
  { code: '+358', label: '+358 🇫🇮 Finland' },
  { code: '+48',  label: '+48 🇵🇱 Poland' },
  { code: '+7',   label: '+7 🇷🇺 Russia' },
  // South Asia
  { code: '+92',  label: '+92 🇵🇰 Pakistan' },
  { code: '+880', label: '+880 🇧🇩 Bangladesh' },
  { code: '+94',  label: '+94 🇱🇰 Sri Lanka' },
  { code: '+977', label: '+977 🇳🇵 Nepal' },
  // South-East Asia
  { code: '+65',  label: '+65 🇸🇬 Singapore' },
  { code: '+60',  label: '+60 🇲🇾 Malaysia' },
  { code: '+66',  label: '+66 🇹🇭 Thailand' },
  { code: '+62',  label: '+62 🇮🇩 Indonesia' },
  { code: '+63',  label: '+63 🇵🇭 Philippines' },
  { code: '+84',  label: '+84 🇻🇳 Vietnam' },
  // East Asia
  { code: '+86',  label: '+86 🇨🇳 China' },
  { code: '+81',  label: '+81 🇯🇵 Japan' },
  { code: '+82',  label: '+82 🇰🇷 South Korea' },
  { code: '+852', label: '+852 🇭🇰 Hong Kong' },
  { code: '+886', label: '+886 🇹🇼 Taiwan' },
  // Oceania
  { code: '+61',  label: '+61 🇦🇺 Australia' },
  { code: '+64',  label: '+64 🇳🇿 New Zealand' },
  // South America
  { code: '+55',  label: '+55 🇧🇷 Brazil' },
  { code: '+54',  label: '+54 🇦🇷 Argentina' },
  // Africa
  { code: '+27',  label: '+27 🇿🇦 South Africa' },
  { code: '+20',  label: '+20 🇪🇬 Egypt' },
  { code: '+234', label: '+234 🇳🇬 Nigeria' },
  { code: '+254', label: '+254 🇰🇪 Kenya' },
  // Other
  { code: 'other', label: 'Other (specify)' },
]

export function Inquiry() {
  const [submitted, setSubmitted]   = useState(false)
  const [loading, setLoading]       = useState(false)
  const [sendError, setSendError]   = useState('')
  const [errs, setErrs]             = useState({})
  const [form, setForm] = useState({
    first: '', last: '', email: '', phoneCode: '+91', phoneCodeCustom: '', phone: '', date: '',
    count: '', where: '', otherLocation: '', vision: '',
  })
  const [services, setServices] = useState(new Set(['Wedding']))
  const allServices = ['Wedding', 'Venue Booking', 'Event Management', 'Catering & Entertainment', 'Decor & Design', 'Corporate Events', 'Need Consultation']

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrs(e => ({ ...e, [k]: '' }))
  }
  const toggle = (s) => {
    setServices(prev => {
      const next = new Set(prev)
      if (next.has(s)) next.delete(s); else next.add(s)
      return next
    })
    setErrs(e => ({ ...e, services: '' }))
  }

  const validate = () => {
    const e = {}
    if (form.first.trim().length < 2)  e.first  = 'Enter your name (min 2 characters)'
    if (form.last.trim().length < 2)   e.last   = "Enter your partner's name (min 2 characters)"
    if (!EMAIL_RE.test(form.email))    e.email  = 'Enter a valid email address'
    if (form.phoneCode === 'other' && !form.phoneCodeCustom.trim()) e.phoneCodeCustom = 'Enter your country code (e.g. +123)'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number'
    if (!form.date)                    e.date   = 'Select your event date'
    if (!form.count.trim())            e.count  = 'Enter approximate guest count'
    if (!form.where)                   e.where  = 'Select a preferred location'
    if (form.where === 'Other (please specify)' && !form.otherLocation.trim())
                                       e.otherLocation = 'Please specify the location'
    if (services.size === 0)           e.services = 'Select at least one service'
    // vision is optional
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrs(validation)
      const firstKey = Object.keys(validation)[0]
      document.querySelector(`[data-field="${firstKey}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setLoading(true)
    setSendError('')

    const selectedServices = [...services].join(', ')
    const location = form.where === 'Other (please specify)' && form.otherLocation
      ? `Other — ${form.otherLocation}`
      : form.where
    const effectiveCode = form.phoneCode === 'other' ? form.phoneCodeCustom : form.phoneCode
    const msgBody = `New Inquiry!\nName: ${form.first} & ${form.last}\nPhone: ${effectiveCode} ${form.phone}\nEmail: ${form.email}\nDate: ${form.date}\nGuests: ${form.count}\nLocation: ${location}\nServices: ${selectedServices}\nVision: ${form.vision}`

    try {
      // 1. Email via Web3Forms
      const w3res  = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({
          access_key: W3F_ACCESS_KEY,
          subject:    `New Event Inquiry — ${form.first} & ${form.last}`,
          from_name:  `${form.first} & ${form.last}`,
          email:      form.email,
          message:    msgBody,
        }),
      })
      const w3data = await w3res.json()
      if (!w3data.success) throw new Error(w3data.message)

      // 2. WhatsApp via CallMeBot (fire-and-forget — don't block on failure)
      fetch(
        `https://api.callmebot.com/whatsapp.php?phone=+919602198888&text=${encodeURIComponent(msgBody)}&apikey=${CALLMEBOT_APIKEY}`
      ).catch(() => {})

      setSubmitted(true)
    } catch {
      setSendError('Could not send — please call us directly at +91 96021 98888.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="inquiry" id="inquiry">
      <div className="container">
        <div className="inquiry-grid">
          <div className="inquiry-left">
            <span className="eyebrow reveal">Get in touch</span>
            <h2 className="reveal stagger-1">
              Let's discuss <span className="ital">your event.</span>
            </h2>
            <p className="body-l reveal stagger-2">
              We respond to every inquiry personally, usually within 24 hours. Let's have a
              conversation about your vision and how we can make it unforgettable.
            </p>
            <div className="contact-block reveal stagger-3">
              <div className="label">Office</div>
              <div className="value">
                <a
                  href="https://maps.google.com/maps?daddr=main+gate,+opp.+vyas+colony,+near+Air+Force+Road,+Jodhpur,+Rajasthan+342011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Opp. Airforce, Main Gate <span className="ital">— Jodhpur</span>
                </a>
              </div>
            </div>
            <div className="contact-block reveal stagger-4">
              <div className="label">Email</div>
              <div className="value">
                <a href="mailto:info@eventplannerjodhpur.com" className="contact-link">
                  info@eventplannerjodhpur.com
                </a>
              </div>
            </div>
            <div className="contact-block reveal stagger-5">
              <div className="label">Phone</div>
              <div className="value">
                <a href="tel:+919602197777" className="contact-link">+91 9602197777</a>
                {' · '}
                <a href="tel:+919602198888" className="contact-link">+91 9602198888</a>
              </div>
            </div>
          </div>
          <div className="inquiry-right">
            {!submitted ? (
              <form className="form-grid reveal" onSubmit={submit} noValidate>

                <div className={'field' + (errs.first ? ' field-error' : '')} data-field="first">
                  <label>Your name <span className="req">*</span></label>
                  <input type="text" placeholder="Rahul" value={form.first} onChange={e => set('first', e.target.value)} />
                  {errs.first && <span className="field-err-msg">{errs.first}</span>}
                </div>

                <div className={'field' + (errs.last ? ' field-error' : '')} data-field="last">
                  <label>Partner's name <span className="req">*</span></label>
                  <input type="text" placeholder="Ananya" value={form.last} onChange={e => set('last', e.target.value)} />
                  {errs.last && <span className="field-err-msg">{errs.last}</span>}
                </div>

                <div className={'field' + (errs.email ? ' field-error' : '')} data-field="email">
                  <label>Email <span className="req">*</span></label>
                  <input type="email" placeholder="rahul@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                  {errs.email && <span className="field-err-msg">{errs.email}</span>}
                </div>

                <div className={'field' + (errs.phone ? ' field-error' : '')} data-field="phone">
                  <label>Phone number <span className="req">*</span></label>
                  <div className="phone-row">
                    <select
                      value={form.phoneCode}
                      onChange={e => { set('phoneCode', e.target.value); set('phoneCodeCustom', '') }}
                      className="phone-code-select"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    {form.phoneCode === 'other' && (
                      <input
                        type="text"
                        placeholder="+123"
                        value={form.phoneCodeCustom}
                        onChange={e => set('phoneCodeCustom', e.target.value)}
                        className="phone-code-custom-input"
                      />
                    )}
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      className="phone-input"
                    />
                  </div>
                  {errs.phoneCodeCustom && <span className="field-err-msg">{errs.phoneCodeCustom}</span>}
                  {errs.phone && <span className="field-err-msg">{errs.phone}</span>}
                </div>

                <div className={'field' + (errs.date ? ' field-error' : '')} data-field="date">
                  <label>Event date <span className="req">*</span></label>
                  <input type="date" value={form.date} onChange={e => set('date', e.target.value)} />
                  {errs.date && <span className="field-err-msg">{errs.date}</span>}
                </div>

                <div className={'field' + (errs.count ? ' field-error' : '')} data-field="count">
                  <label>Guest count <span className="req">*</span></label>
                  <input type="text" placeholder="200 — 500" value={form.count} onChange={e => set('count', e.target.value)} />
                  {errs.count && <span className="field-err-msg">{errs.count}</span>}
                </div>

                <div className={'field full' + (errs.where || errs.otherLocation ? ' field-error' : '')} data-field="where">
                  <label>Preferred location <span className="req">*</span></label>
                  <select value={form.where} onChange={e => set('where', e.target.value)}>
                    <option value="" disabled>Select a location</option>
                    {RAJASTHAN_LOCATIONS.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  {errs.where && <span className="field-err-msg">{errs.where}</span>}
                  {form.where === 'Other (please specify)' && (
                    <input
                      type="text"
                      placeholder="Please specify your location"
                      value={form.otherLocation}
                      onChange={e => set('otherLocation', e.target.value)}
                      style={{ marginTop: 12 }}
                    />
                  )}
                  {errs.otherLocation && <span className="field-err-msg">{errs.otherLocation}</span>}
                </div>

                <div className={'field full' + (errs.services ? ' field-error' : '')} data-field="services">
                  <label>What are you planning? <span className="req">*</span></label>
                  <div className="chip-row" style={{ marginTop: 6 }}>
                    {allServices.map(s => (
                      <button
                        type="button"
                        key={s}
                        className={'chip ' + (services.has(s) ? 'selected' : '')}
                        onClick={() => toggle(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errs.services && <span className="field-err-msg">{errs.services}</span>}
                </div>

                <div className="field full" data-field="vision">
                  <label>Tell us about your vision <span style={{ fontSize: 10, opacity: 0.5, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                  <textarea
                    placeholder="Share your ideas, preferences, and any special requirements..."
                    value={form.vision}
                    onChange={e => set('vision', e.target.value)}
                  />
                </div>

                {sendError && <p className="full" style={{ color: '#b94040', fontSize: 13, margin: 0 }}>{sendError}</p>}
                <div className="submit-row full">
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Sending…' : 'Send inquiry'}
                    {!loading && (
                      <span className="arrow">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-card">
                <h3>Thank you, {form.first}.</h3>
                <p>
                  Your inquiry has been received. Our team will get back to you within 24 hours
                  to discuss your event and answer any questions. We're excited to help bring
                  your celebration to life!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const BLOGGER_FEED = 'https://api.rss2json.com/v1/api.json?rss_url=https://weddingorganiserjodhpur.blogspot.com/feeds/posts/default&count=3'
const BLOGGER_HOME = 'https://weddingorganiserjodhpur.blogspot.com'

const STATIC_POSTS = [
  {
    tag: 'Destination Wedding',
    title: 'Why Jodhpur is the Perfect Destination Wedding Location in Rajasthan',
    url: 'https://weddingorganiserjodhpur.blogspot.com/2026/06/httpswww.eventplannerjodhpur.com.html',
    img: rajImg,
    summary: 'Every couple dreams of a wedding that feels magical, timeless, and unforgettable. Jodhpur has established itself as one of the premier wedding destinations in India — a regal celebration steeped in luxury, culture, and architectural elegance.',
    date: '5 June 2026',
  },
  {
    tag: 'Trends',
    title: 'Wedding Trends In 2026',
    url: 'https://weddingorganiserjodhpur.blogspot.com/2026/05/wedding-trends-in-2026.html',
    img: trendImg,
    summary: '2026 weddings emphasize cinematic storytelling, luxury aesthetics, and immersive guest experiences. Couples seek destination weddings with editorial, personal aesthetics — and Rajasthan is the global hotspot for that dream wedding energy.',
    date: '15 May 2026',
  },
  {
    tag: 'Planning Tips',
    title: 'How to Plan the Perfect Rajasthani Wedding from Abroad',
    url: BLOGGER_HOME,
    img: blogImg,
    summary: 'Planning a Rajasthani wedding from another city or country can feel overwhelming. Our team at Event Planner Jodhpur has crafted a seamless process — from virtual consultations to on-ground execution — so distance is never a barrier to your dream celebration.',
    date: '',
  },
]

function extractThumb(entry) {
  const raw = entry['media$thumbnail']?.url
  if (raw) return raw.replace(/\/s\d+-c\//, '/s800-c/').replace(/\/s\d+\//, '/s800/')
  const content = entry.content?.$t || entry.summary?.$t || ''
  const m = content.match(/<img[^>]+src="([^"]+)"/)
  return m ? m[1] : null
}

export function BlogPreview() {
  const [posts, setPosts] = useState(STATIC_POSTS)

  useEffect(() => {
    fetch(BLOGGER_FEED)
      .then(r => r.json())
      .then(data => {
        const items = data?.items || []
        if (data?.status !== 'ok' || items.length === 0) return
        setPosts(items.map(item => ({
          tag: item.categories?.[0] || 'Blog',
          title: item.title || '',
          url: item.link || BLOGGER_HOME,
          img: item.thumbnail && item.thumbnail !== '' ? item.thumbnail : null,
          summary: (item.description || item.content || '').replace(/<[^>]+>/g, '').trim().slice(0, 160),
          date: item.pubDate
            ? new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
        })))
      })
      .catch(() => {})
  }, [])

  const displayPosts = posts

  return (
    <section className="blog-preview">
      <div className="container">
        <span className="eyebrow reveal">From the blog</span>
        <h2 className="reveal stagger-1">Stories &amp; <span className="ital">Insights.</span></h2>
        <div className="blog-grid">
          {displayPosts.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={'blog-card reveal stagger-' + (i + 1)}
            >
              <div className="blog-card-img">
                {p.img
                  ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <div className="bp-placeholder">Blog image</div>
                }
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">{p.tag}</span>
                <div className="blog-card-title">{p.title}</div>
                {p.summary && <p className="body-s" style={{ marginBottom: 10, lineHeight: 1.5, opacity: 0.75 }}>{p.summary}</p>}
                {p.date && <div className="blog-card-date">{p.date}</div>}
                <span className="blog-card-read">Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919602198888?text=Hello%20Event%20Planner%20Jodhpur"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      title="Chat on WhatsApp"
      aria-label="WhatsApp Chat"
    >
      <svg viewBox="0 0 448 512" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
    </a>
  )
}
