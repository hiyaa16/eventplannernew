import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_URL = 'https://g.co/kgs/iMgWBQ'

export function Testimonials() {
  const outerRef     = useRef(null)   // tall scroll container
  const sectionRef   = useRef(null)   // sticky inner section
  const framesRef    = useRef(null)
  const activeIdx    = useRef(0)
  const activeFrame  = useRef(0)
  const [idx, setIdx] = useState(0)

  const quotes = [
    {
      text: ["Thank you for all your help to make my sister wedding day beautiful. We really appreciate being there that day because your ", { ital: 'positive attitude and happiness' }, " was highly contagious!"],
      author: 'Anushka Mahar',
      place: "Sister's Wedding",
      stars: 5,
    },
    {
      text: ['The experience of working with the event planner team was great! ', { ital: 'Painstaking, ready to work flexibly' }, ' — they managed our open-air event perfectly even during the rainy season.'],
      author: 'Shailesh Purohit',
      place: 'Open-Air Event',
      stars: 5,
    },
    {
      text: ["For my daughter's marriage event they did ", { ital: 'excellent arrangements' }, ' as per our expectations with proper coordination. Three-day celebration handled perfectly.'],
      author: 'Gajendra Lodha',
      place: 'Mehandi, Haldi & Reception',
      stars: 5,
    },
    {
      text: ['We personally recommend them. We have worked with them for our ', { ital: 'Family Functions and Weddings.' }, ' Professional team, friendly approach, and flawless execution.'],
      author: 'Vijay Daga',
      place: 'Multiple Events',
      stars: 5,
    },
  ]

  // ── Desktop: CSS sticky outer + GSAP scrub (no pin, no spacer) ───────────
  useEffect(() => {
    const outer = outerRef.current
    if (!outer || window.innerWidth <= 900) return

    const ANIM_DIST = 2000
    outer.style.height = (ANIM_DIST + window.innerHeight) + 'px'

    let ctx
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: outer,
          start: 'top top',
          end: `+=${ANIM_DIST}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const frames = framesRef.current
              ? Array.from(framesRef.current.querySelectorAll('.t-frame'))
              : []

            const quoteNext = Math.min(quotes.length - 1, Math.floor(self.progress * quotes.length))
            const frameNext = frames.length > 0
              ? Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
              : -1

            if (quoteNext !== activeIdx.current) {
              activeIdx.current = quoteNext
              setIdx(quoteNext)
            }
            if (frameNext >= 0 && frameNext !== activeFrame.current) {
              activeFrame.current = frameNext
              frames.forEach((f, i) =>
                gsap.to(f, { opacity: i === frameNext ? 1 : 0, duration: 0.6, ease: 'power2.inOut', overwrite: true })
              )
            }
          },
        })
      }, outer)
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
      outer.style.height = ''
    }
  }, [quotes.length])

  // ── Mobile: auto-rotate ────────────────────────────────────────────────
  useEffect(() => {
    if (window.innerWidth > 900) return
    const id = setInterval(() => setIdx(i => (i + 1) % quotes.length), 6000)
    return () => clearInterval(id)
  }, [quotes.length])

  return (
    // Tall outer provides scroll space — no GSAP pin needed
    <div ref={outerRef} className="t-outer">
      <section className="testimonials" ref={sectionRef}>
        <div className="t-mark">"</div>
        <div className="container">
          <div className="t-layout">
            <div className="t-content">
              <span className="eyebrow reveal" style={{ display: 'block' }}>In their words</span>
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
                    <div className="t-stars">{'★'.repeat(q.stars)}</div>
                  </div>
                ))}
              </div>
              <div className="t-nav">
                {quotes.map((_, i) => (
                  <button key={i} className={'t-dot ' + (i === idx ? 'active' : '')} onClick={() => setIdx(i)} aria-label={'Quote ' + (i + 1)} />
                ))}
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="t-google-link">
                Read all reviews on Google
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div ref={framesRef} className="t-wedding-frames">
              {[1, 2, 3, 4, 5].map((n, i) => (
                <img key={n} className={'t-frame' + (i === 0 ? ' t-frame-active' : '')} src={`/${n}.png`} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
