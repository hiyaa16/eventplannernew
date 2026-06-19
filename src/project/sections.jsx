import { useState, useEffect } from 'react'
import { Counter } from './components.jsx'
import { ParticleField, FogOverlay, CinematicText } from './cinematic.jsx'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-rays"></div>
      </div>
      <ParticleField count={42} />
      <FogOverlay />

      <div className="container">
        <div className="hero-eyebrow-row">
          <span className="eyebrow">Wedding &amp; Event Planning</span>
        </div>

        {/* VIDEO PLACEHOLDER — add your video file path below and uncomment */}
        {/*
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
        </div>
        */}

      </div>

      <div className="hero-side">
        <span className="dot"></span>
        Scroll to begin
      </div>
    </section>
  )
}

export function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview-grid">
          <a href="#about" className="about-preview-image reveal">
            <div className="img-placeholder">
              Rajasthani Wedding · Jodhpur
            </div>
          </a>
          <div className="about-preview-content">
            <span className="eyebrow reveal">Our Approach</span>
            <h2 className="about-preview-headline display reveal stagger-1">
              Tradition meets <span className="italic" style={{ color: 'var(--bronze)' }}>excellence.</span>
            </h2>
            <p className="about-preview-body reveal stagger-2">
              We don't just plan events. We orchestrate them with meticulous attention to every detail.
              From the grandeur of your reception to the intimacy of your mehandi, every element is
              curated to reflect your vision and honor your traditions.
            </p>
            <p className="about-preview-body reveal stagger-3">
              With two decades of experience across Rajasthan's most stunning venues, we deliver
              celebrations that are not just executed perfectly — they're remembered forever.
            </p>
            <div className="about-preview-signature reveal stagger-4">
              Event Planner Jodhpur
              <small>Professional Event Management</small>
            </div>

            <div className="about-preview-history reveal stagger-5">
              <h3>Founded in 2012</h3>
              <p>
                Event Planner was established in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani, leveraging their networking talent over the years to become one of Jodhpur's top event companies. We've expanded our services to neighboring cities and beyond, serving individual clients, corporate partners, and families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-head">
          <span className="eyebrow reveal">About Us</span>
          <h2 className="reveal stagger-1">Our <span className="ital">Story.</span></h2>
        </div>
        <div className="about-content">
          <div className="about-text reveal stagger-2">
            <h3>Founded in 2012</h3>
            <p>
              Event Planner was established in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani, leveraging their networking talent over the years to become one of Jodhpur's top event companies. We've expanded our services to neighboring cities and beyond, serving individual clients, corporate partners, and families.
            </p>
          </div>

          <div className="about-text reveal stagger-3">
            <h3>Our Mission</h3>
            <p>
              We are a driven team of wedding enthusiasts working to build a new way of wedding planning through luxurious wedding destinations and amazing customer service. We provide professional, elite services designed to create flawless and memorable occasions for our clients.
            </p>
          </div>

          <div className="about-text reveal stagger-4">
            <h3>Our Philosophy</h3>
            <p>
              We weave dreams, emotions, relations, and responsibilities into every event. With two decades of experience across Rajasthan's most stunning venues, we maintain an exclusive vendors list to enhance event execution. We specialize in weddings, seminars, and corporate events across multiple destinations including Jaipur, Udaipur, Pushkar, Jaisalmer, Kumbhalgarh, and Ranakpur.
            </p>
          </div>

          <div className="about-text reveal stagger-5">
            <h3>Our Promise</h3>
            <p>
              We don't just plan events. We orchestrate them with meticulous attention to every detail. From the grandeur of your reception to the intimacy of your mehandi, every element is curated to reflect your vision and honor your traditions. Our celebrations are not just executed perfectly — they're remembered forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const rows = [
    {
      n: '01', name: 'Venue', ital: 'Booking', desc: "Discover the perfect venue for your special event within your budget. From heritage palaces to garden estates, we have access to Rajasthan's most stunning venues.",
      preview: 'Venues', grad: 'linear-gradient(180deg, #4A5A48 0%, #2E3A2D 100%)'
    },
    {
      n: '02', name: 'Event', ital: 'Management', desc: "Complete coordination from concept through execution. Our team manages every aspect — haldi, mehandi, sangeet, mandap, reception, and corporate events with precision and elegance.",
      preview: 'Management', grad: 'linear-gradient(180deg, #B89968 0%, #5C4525 100%)'
    },
    {
      n: '03', name: 'Decor &amp;', ital: 'Design', desc: "Customizable aesthetics from traditional to contemporary. Our design team transforms your vision into breathtaking arrangements using premium materials and innovative concepts.",
      preview: 'Design', grad: 'linear-gradient(180deg, #8A7A6B 0%, #2E2820 100%)'
    },
    {
      n: '04', name: 'Catering &amp;', ital: 'Entertainment', desc: "Indian traditional and international fusion cuisine, paired with professional DJ services, live music, and dance performances that elevate your celebration.",
      preview: 'Catering', grad: 'linear-gradient(180deg, #ABB8A2 0%, #4A5A48 100%)'
    },
    {
      n: '05', name: 'Celebrity &amp;', ital: 'Additional Services', desc: "High-profile talent booking, sound systems, transportation, invitations, gift hampers, and specialized logistics. We handle everything so you can enjoy your day.",
      preview: 'Services', grad: 'linear-gradient(180deg, #E5D9C4 0%, #C8B89A 100%)'
    },
  ]
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head">
          <h2 className="reveal">Complete <span className="italic" style={{ color: 'var(--sage-deep)' }}>event solutions</span> for every celebration.</h2>
          <p className="body-m right reveal stagger-1">
            From intimate gatherings to grand celebrations, we deliver comprehensive services
            tailored to your event. Below are the core services we specialize in.
          </p>
        </div>

        <div className="service-list">
          {rows.map((r, i) => (
            <div
              className="service-row reveal"
              key={r.n}
              data-preview={r.preview}
              data-grad={r.grad}
              style={{ transitionDelay: (i * 0.06) + 's' }}
            >
              <div className="num">{r.n}</div>
              <div className="name">{r.name} <span className="ital">{r.ital}</span></div>
              <div className="desc">{r.desc}</div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export function Portfolio() {
  const cards = [
    { cls: 'p1', title: ['Rajasthani', 'Weddings'], place: 'Jodhpur Heritage Venues', year: '2025', tag: '300+ guest palace weddings' },
    { cls: 'p2', title: ['Corporate', 'Events'], place: 'Jaipur Convention Centers', year: '2024', tag: 'Large scale corporate galas' },
    { cls: 'p3', title: ['Destination', 'Celebrations'], place: "Udaipur Palaces", year: '2025', tag: 'Lakeside destination weddings' },
    { cls: 'p4', title: ['Haldi &', 'Mehandi'], place: 'Pushkar Resorts', year: '2024', tag: 'Traditional multi-day events' },
    { cls: 'p5', title: ['Reception &', 'Sangeet'], place: 'Jaisalmer Desert Venues', year: '2025', tag: 'Grand celebratory events' },
    { cls: 'p6', title: ['Intimate', 'Gatherings'], place: 'Kumbhalgarh & Ranakpur', year: '2023', tag: 'Personalized experiences' },
  ]
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-head">
          <h2 className="reveal">Memorable <span className="ital">celebrations</span></h2>
          <p className="body-m reveal stagger-1" style={{ maxWidth: '34ch' }}>
            A curated collection of beautiful events. Portfolio &amp; detailed case studies available on request.
          </p>
        </div>

        <div className="portfolio-grid">
          {cards.map((c, i) => (
            <div className={'p-card reveal ' + c.cls} key={i} style={{ transitionDelay: (i % 3) * 0.08 + 's' }}>
              <div className="img-placeholder">{c.tag}</div>
              <div className="overlay">
                <div className="title">
                  {c.title[0]}<br/>
                  <span className="ital">{c.title[1]}</span>
                </div>
                <div className="meta">{c.place} · {c.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-stats">
          <div className="stat reveal">
            <div className="num"><Counter to={500} /></div>
            <div className="label">+ Events Executed</div>
          </div>
          <div className="stat reveal stagger-1">
            <div className="num"><Counter to={7} /></div>
            <div className="label">Rajasthan Cities</div>
          </div>
          <div className="stat reveal stagger-2">
            <div className="num"><Counter to={16} suffix="" /><span className="ital"> yrs</span></div>
            <div className="label">Industry Experience</div>
          </div>
          <div className="stat reveal stagger-3">
            <div className="num"><Counter to={100} suffix="%" /></div>
            <div className="label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { n: 'I', title: ['Initial', 'Consultation'], body: 'We meet with you to understand your vision, budget, guest count, and event type. We listen to your story, your preferences, and your expectations for the perfect celebration.' },
    { n: 'II', title: ['Planning &', 'Design'], body: 'Our team develops comprehensive plans covering venue, catering, decor, entertainment, and logistics. We present detailed proposals and timelines to bring your vision to life.' },
    { n: 'III', title: ['Coordination &', 'Execution'], body: 'We manage all vendor relationships, contracts, and logistics. Our team coordinates every detail across multiple events in the wedding sequence or corporate function.' },
    { n: 'IV', title: ['Event', 'Management'], body: "We oversee the complete execution on your event day. From setup through final moments, our team ensures everything runs flawlessly so you can focus on celebrating." },
  ]
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-head">
          <div>
            <span className="eyebrow">Our Process</span>
            <h2 className="reveal">Four stages of <span className="ital">seamless coordination.</span></h2>
          </div>
          <p className="intro reveal stagger-1">
            We work methodically and thoughtfully. Each decision is deliberate, every detail matters,
            and the result is an event that exceeds your expectations.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={s.n} style={{ transitionDelay: (i * 0.08) + 's' }}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title[0]} {s.title[1] && <span className="ital">{s.title[1]}</span>}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    {
      text: ["Thank you for all your help to make my sister wedding day beautiful. We really appreciate being there that day because your ", { ital: 'positive attitude and happiness' }, " was highly contagious!"],
      author: 'Anushka Mahar',
      place: 'Sister\'s Wedding',
    },
    {
      text: ['The experience of working with the event planner team was great! ', { ital: 'Painstaking, ready to work flexibly' }, ' — they managed our open-air event perfectly even during the rainy season.'],
      author: 'Shailesh Purohit',
      place: 'Open-Air Event',
    },
    {
      text: ['For my daughter\'s marriage event they did ', { ital: 'excellent arrangements' }, ' as per our expectations with proper coordination. Three-day celebration handled perfectly.'],
      author: 'Gajendra Lodha',
      place: 'Mehandi, Haldi & Reception',
    },
    {
      text: ['We personally recommend them. We have worked with them for our ', { ital: 'Family Functions and Weddings.' }, ' Professional team, friendly approach, and flawless execution.'],
      author: 'Vijay Daga',
      place: 'Multiple Events',
    },
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % quotes.length), 6000)
    return () => clearInterval(id)
  }, [quotes.length])
  return (
    <section className="testimonials">
      <div className="container">
        <div className="t-mark">"</div>
        <span className="eyebrow reveal" style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>In their words</span>

        <div className="t-stage">
          {quotes.map((q, i) => (
            <div className={'t-slide ' + (i === idx ? 'active' : '')} key={i}>
              <blockquote>
                {q.text.map((part, pi) =>
                  typeof part === 'string'
                    ? <span key={pi}>{part}</span>
                    : <span key={pi} className="accent" style={{ fontStyle: 'italic' }}>{part.ital}</span>
                )}
              </blockquote>
              <div className="author">{q.author} <span className="sep">·</span> {q.place}</div>
            </div>
          ))}
        </div>

        <div className="t-nav">
          {quotes.map((_, i) => (
            <button key={i} className={'t-dot ' + (i === idx ? 'active' : '')} onClick={() => setIdx(i)} aria-label={'Quote ' + (i + 1)}></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Inquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ first: '', last: '', email: '', date: '', count: '', where: '', vision: '' })
  const [services, setServices] = useState(new Set(['Event Management']))
  const allServices = ['Venue Booking', 'Event Management', 'Catering & Entertainment', 'Decor & Design', 'Corporate Events', 'Need Consultation']
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggle = (s) => setServices(prev => {
    const next = new Set(prev)
    if (next.has(s)) next.delete(s); else next.add(s)
    return next
  })
  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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
              <div className="value">Opp. Airforce, Main Gate <span className="ital">— Jodhpur</span></div>
            </div>
            <div className="contact-block reveal stagger-4">
              <div className="label">Email</div>
              <div className="value">eventplannerjdr@gmail.com</div>
            </div>
            <div className="contact-block reveal stagger-5">
              <div className="label">Phone</div>
              <div className="value">9602197777 · 9602198888 <span className="small">0291-2941968</span></div>
            </div>
          </div>

          <div className="inquiry-right">
            {!submitted ? (
              <form className="form-grid reveal" onSubmit={submit}>
                <div className="field">
                  <label>Your name</label>
                  <input type="text" placeholder="Rahul" value={form.first} onChange={e => set('first', e.target.value)} required />
                </div>
                <div className="field">
                  <label>Partner's name</label>
                  <input type="text" placeholder="Ananya" value={form.last} onChange={e => set('last', e.target.value)} required />
                </div>
                <div className="field full">
                  <label>Email</label>
                  <input type="email" placeholder="rahul@example.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                </div>
                <div className="field">
                  <label>Event date</label>
                  <input type="text" placeholder="December 2026" value={form.date} onChange={e => set('date', e.target.value)} />
                </div>
                <div className="field">
                  <label>Guest count</label>
                  <input type="text" placeholder="200 — 500" value={form.count} onChange={e => set('count', e.target.value)} />
                </div>
                <div className="field full">
                  <label>Preferred location</label>
                  <input type="text" placeholder="Jodhpur · Udaipur · Jaipur · Pushkar" value={form.where} onChange={e => set('where', e.target.value)} />
                </div>

                <div className="field full">
                  <label>What are you planning?</label>
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
                </div>

                <div className="field full">
                  <label>Tell us about your vision</label>
                  <textarea
                    placeholder="Share your ideas, preferences, and any special requirements..."
                    value={form.vision}
                    onChange={e => set('vision', e.target.value)}
                  />
                </div>

                <div className="submit-row full">
                  <button type="submit" className="submit-btn">
                    Send inquiry
                    <span className="arrow">
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-card">
                <h3>Thank you, {form.first || 'truly'}.</h3>
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

export function InstagramSection() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <span className="eyebrow reveal">Meanwhile on Instagram</span>
        <h2 className="reveal stagger-1">Latest from <span className="ital">@event_planner_jdr</span></h2>
        <div className="instagram-embed reveal stagger-2">
          <iframe
            src="https://www.instagram.com/event_planner_jdr/embed"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          ></iframe>
        </div>
        <div className="instagram-cta reveal stagger-3">
          <a href="https://www.instagram.com/event_planner_jdr/" target="_blank" rel="noopener noreferrer" className="cta-link">
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}

export function YouTubeSection() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Wedding Highlights' },
    { id: 'dQw4w9WgXcQ', title: 'Event Coverage' },
    { id: 'dQw4w9WgXcQ', title: 'Client Testimonials' },
  ]
  return (
    <section className="youtube-section">
      <div className="container">
        <span className="eyebrow reveal">Video Gallery</span>
        <h2 className="reveal stagger-1">See our work on <span className="ital">YouTube</span></h2>
        <div className="youtube-grid reveal stagger-2">
          {videos.map((video, i) => (
            <div key={i} className="youtube-card">
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
        <div className="youtube-cta reveal stagger-3">
          <a href="https://www.youtube.com/channel/UCrlwRg5RVAmQagb21KpNa_A/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="cta-link">
            Watch on YouTube →
          </a>
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

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-mark">
            Event Planner<span className="amp">&amp;</span>Jodhpur
            <span className="sub">Wedding & Corporate Events Specialist</span>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="http://www.eventplannerjodhpur.com">Website</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Venue Booking</a></li>
              <li><a href="#services">Event Management</a></li>
              <li><a href="#services">Catering & Entertainment</a></li>
              <li><a href="#services">Corporate Events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.facebook.com/eventplannerwedding/?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/event_planner_jdr/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/eventplan33" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.youtube.com/channel/UCrlwRg5RVAmQagb21KpNa_A/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Event Planner Jodhpur · eventplannerjdr@gmail.com</span>
          <span><a href="https://g.co/kgs/iMgWBQ" target="_blank" rel="noopener noreferrer">Google</a> · <a href="https://www.linkedin.com/in/event-planner-72296910b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="http://www.eventplannerjodhpur.com">Website</a></span>
        </div>
      </div>
    </footer>
  )
}

const FAQ_DATA = [
  {
    q: 'What services does Event Planner Jodhpur offer?',
    a: 'We offer nine comprehensive services: Venue Booking across Rajasthan\'s heritage palaces and luxury resorts; complete Event Management for haldi, mehandi, sangeet, mandap, and reception; Decoration & Design including floral, lighting, and furniture; Catering & Entertainment with world-class chefs; Artist & Celebrity Management; Sound System & Stage services; Transportation & Logistics for all guests; Invitations & Custom Gifting; and Corporate Event Management.',
  },
  {
    q: 'Which cities in Rajasthan does Event Planner Jodhpur cover?',
    a: 'We cover destination weddings and events across seven Rajasthani cities: Jodhpur (Umaid Bhawan Palace, Mehrangarh Fort), Udaipur (Lake Palace, Jagmandir Island Palace), Jaipur (Rambagh Palace, Amer Fort), Jaisalmer (Suryagarh, desert camps), Pushkar, Kumbhalgarh, and Ranakpur.',
  },
  {
    q: 'How many years of experience does Event Planner Jodhpur have?',
    a: 'Founded in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani, we have over 13 years of professional experience and have successfully executed 500+ weddings, corporate events, and multi-day celebrations across Rajasthan.',
  },
  {
    q: 'What are the best wedding venues in Jodhpur?',
    a: 'Top Jodhpur wedding venues include Umaid Bhawan Palace (one of the world\'s largest private residences), Mehrangarh Fort (a majestic hilltop fort), Raas Jodhpur (a boutique luxury hotel), and Ajit Bhawan (India\'s first heritage hotel). We have direct partnerships with all these venues and can arrange bookings for any budget.',
  },
  {
    q: 'Can you plan a destination wedding from abroad?',
    a: 'Absolutely. We specialise in destination weddings for NRI and international clients. Our logistics team handles visa arrangements, international flight coordination, airport transfers, accommodation for overseas guests, and complete on-ground management — so you can plan from anywhere in the world with full confidence.',
  },
  {
    q: 'Does Event Planner Jodhpur handle corporate events?',
    a: 'Yes. We manage all types of corporate events — award ceremonies, gala dinners, product launches, team-building events, and conferences. We handle brand-aligned décor, curated entertainment, professional catering, and end-to-end coordination across Rajasthan\'s top venues.',
  },
  {
    q: 'How do I get in touch with Event Planner Jodhpur?',
    a: 'Call us at +91-9602197777 or +91-9602198888, WhatsApp at +91-9602198888, email eventplannerjdr@gmail.com, or visit us at Opp. Airforce Main Gate, Jodhpur, Rajasthan. We respond to every inquiry personally, usually within 24 hours.',
  },
  {
    q: 'What makes Event Planner Jodhpur different from other wedding planners?',
    a: '13+ years of experience, 500+ events, deep local knowledge across 7 Rajasthani cities, exclusive vendor relationships, end-to-end service from venue to gifting, dedicated NRI logistics, and a personal approach — founders Mr. Jitender Tyagi and Mr. Gulsher Sherani are directly involved in every event.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(o => o === i ? null : i)
  return (
    <section className="faq-section" id="faq" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="faq-head">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Quick Answers</span>
          <h2 className="reveal stagger-1">Frequently Asked <span className="ital">Questions.</span></h2>
          <p className="reveal stagger-2">Everything you need to know about planning your event with us.</p>
        </div>
        <div className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className={'faq-item reveal' + (open === i ? ' open' : '')}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button className="faq-q" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span itemProp="name">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AudioPlayer() {
  const audioRef = React.useRef(null)
  const [muted, setMuted] = React.useState(false)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    const p = audio.play()
    if (p !== undefined) {
      p.catch(() => {
        /* Browser blocked autoplay — start muted and unmute on first interaction */
        audio.muted = true
        setMuted(true)
        audio.play().catch(() => {})
      })
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !audio.muted
    if (!audio.muted && audio.paused) audio.play()
    setMuted(audio.muted)
  }

  if (!visible) return null

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/bg.mp3" loop preload="auto" />
      <button className="audio-btn" onClick={toggle} aria-label={muted ? 'Unmute music' : 'Mute music'}>
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>
      <button className="audio-close" onClick={() => setVisible(false)} aria-label="Close music player">×</button>
    </div>
  )
}

Object.assign(window, {
  Hero, AboutPreview, About, Services, Portfolio, Testimonials, FAQ, Inquiry, InstagramSection, YouTubeSection, WhatsAppButton, Footer, AudioPlayer
})
