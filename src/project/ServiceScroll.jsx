import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './serviceScroll.css'
import haldiImg     from '../assets/haldi.jpg'
import mehndiImg    from '../assets/mehndi.jpg'
import sangeetImg   from '../assets/sangeet.jpg'
import mandapImg    from '../assets/mandap.jpg'
import receptionImg from '../assets/reception.jpg'
import corporateImg from '../assets/corporate.jpg'

gsap.registerPlugin(ScrollTrigger)

const ALL_SERVICES = [
  { img: haldiImg,     name: 'Haldi' },
  { img: mehndiImg,    name: 'Mehandi' },
  { img: sangeetImg,   name: 'Sangeet' },
  { img: mandapImg,    name: 'Mandap' },
  { img: receptionImg, name: 'Reception' },
  { img: corporateImg, name: 'Corporate Events' },
]

const N = ALL_SERVICES.length

export default function ServiceScroll() {
  const desktopRef = useRef(null)
  const mobOuterRef = useRef(null)

  /* ── DESKTOP: original spread animation ── */
  useEffect(() => {
    if (window.innerWidth < 768) return
    const vh = window.innerHeight
    const vw = window.innerWidth / 100

    let ctx
    // Defer one rAF so App's bootCinematic useEffect (which initialises Lenis
    // and wires it to ScrollTrigger) runs first. Without this, ScrollTrigger
    // calculates scroll positions before Lenis is in control, breaking the pin.
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const spread = Math.min(vw * 19, 300)

        gsap.set('.ss-pair',                   { xPercent: -50, yPercent: -50 })
        gsap.set(['.ss-pair-2', '.ss-pair-3'], { y: vh * 1.2 })
        gsap.set('.ss-logo-center',            { opacity: 0, scale: 0.75 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger   : desktopRef.current,
            start     : 'top top',
            end       : '+=4000',
            scrub     : 1,
            pin       : true,
            pinSpacing: true,
          },
        })

        tl.to('.ss-p1-l',        { x: -spread, duration: 0.5 }, 0.2)
        tl.to('.ss-p1-r',        { x:  spread, duration: 0.5 }, 0.2)
        tl.to('.ss-logo-center', { opacity: 1, scale: 1, duration: 0.3 }, 0.38)
        tl.to('.ss-pair-1',      { opacity: 0.4, y: -vh * 0.35, duration: 0.5 }, 0.82)
        tl.to('.ss-logo-center', { opacity: 0, scale: 0.75, duration: 0.2 }, 0.82)
        tl.to('.ss-pair-2',      { y: 0, duration: 0.5 }, 0.82)
        tl.to('.ss-p2-l',        { x: -spread, duration: 0.5 }, 1.44)
        tl.to('.ss-p2-r',        { x:  spread, duration: 0.5 }, 1.44)
        tl.to('.ss-logo-center', { opacity: 1, scale: 1, duration: 0.3 }, 1.62)
        tl.to('.ss-pair-2',      { opacity: 0.3, y: -vh * 0.3, duration: 0.5 }, 2.0)
        tl.to('.ss-logo-center', { opacity: 0, scale: 0.75, duration: 0.2 }, 2.0)
        tl.to('.ss-pair-3',      { y: 0, duration: 0.5 }, 2.0)
        tl.to('.ss-p3-l',        { x: -spread, duration: 0.5 }, 2.65)
        tl.to('.ss-p3-r',        { x:  spread, duration: 0.5 }, 2.65)
        tl.to('.ss-logo-center', { opacity: 1, scale: 1, duration: 0.35 }, 2.8)
      }, desktopRef)

      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  /* ── MOBILE: Lenis-aware manual sticky + slide animation ── */
  useEffect(() => {
    if (window.innerWidth >= 768) return
    const outer = mobOuterRef.current
    if (!outer) return

    const wrap   = outer.querySelector('.ss-wrap')
    const slides = Array.from(outer.querySelectorAll('.ss-slide'))
    const bglbls = Array.from(outer.querySelectorAll('.ss-bg-label'))

    // Pixel-perfect sizing: outer ends exactly at image bottom → no cream gap
    const vh         = window.innerHeight
    const IMG_TOP    = 108                        // matches CSS top: 108px
    const IMG_H      = Math.round(vh * 0.65)      // matches CSS height: 65vh
    const WRAP_H     = IMG_TOP + IMG_H + 20       // heading + image + 20px bottom gap
    const ANIM_SCROLL = vh * 3                    // 3 viewports of scroll for 5 transitions
    outer.style.height = (ANIM_SCROLL + WRAP_H) + 'px'

    // Initial state
    slides.forEach((s, i) => {
      s.style.opacity      = i === 0 ? '1' : '0'
      s.style.transform    = 'scale(1)'
      s.style.borderRadius = '18px'
    })
    bglbls.forEach((b, i) => { b.style.opacity = i === 0 ? '1' : '0' })

    const update = (scrollY) => {
      // Absolute top of outer in document (stable across calls)
      const outerTop = outer.getBoundingClientRect().top + scrollY
      const scrolled = scrollY - outerTop

      // Always content-height wrap — outer div cream bg fills below during animation
      if (scrolled >= 0 && scrolled <= ANIM_SCROLL) {
        wrap.style.position = 'fixed'
        wrap.style.top      = '0'
        wrap.style.left     = '0'
        wrap.style.width    = '100%'
        wrap.style.height   = WRAP_H + 'px'
      } else if (scrolled < 0) {
        wrap.style.position = 'absolute'
        wrap.style.top      = '0'
        wrap.style.width    = ''
        wrap.style.height   = WRAP_H + 'px'
      } else {
        wrap.style.position = 'absolute'
        wrap.style.top      = `${ANIM_SCROLL}px`
        wrap.style.width    = ''
        wrap.style.height   = WRAP_H + 'px'
      }

      const progress = Math.max(0, Math.min(0.9999, scrolled / ANIM_SCROLL))
      const rawIdx   = progress * (N - 1)
      const idx      = Math.min(N - 2, Math.floor(rawIdx))
      const frac     = rawIdx - idx

      slides.forEach((slide, i) => {
        if (i < idx) {
          slide.style.opacity      = '0'
          slide.style.transform    = 'scale(0.76)'
          slide.style.borderRadius = '22px'
        } else if (i === idx) {
          slide.style.opacity      = String(1 - frac)
          slide.style.transform    = `scale(${1 - 0.24 * frac})`
          slide.style.borderRadius = `${frac * 22}px`
        } else if (i === idx + 1) {
          slide.style.opacity      = String(Math.min(1, frac * 1.5))
          slide.style.transform    = 'scale(1)'
          slide.style.borderRadius = '18px'
        } else {
          slide.style.opacity      = '0'
          slide.style.transform    = 'scale(1)'
          slide.style.borderRadius = '18px'
        }
      })

      bglbls.forEach((lbl, i) => {
        if (i === idx)          lbl.style.opacity = String(1 - frac)
        else if (i === idx + 1) lbl.style.opacity = String(frac)
        else                    lbl.style.opacity  = '0'
      })
    }

    // Native scroll — always fires on mobile touch (smoothTouch: false)
    const onNative = () => update(window.scrollY)
    window.addEventListener('scroll', onNative, { passive: true })

    // Lenis scroll — fires on desktop smooth wheel; may also fire on mobile
    const lenis = window.__lenis
    let offLenis = null
    if (lenis) {
      const onLenis = ({ scroll }) => update(scroll)
      lenis.on('scroll', onLenis)
      offLenis = () => lenis.off('scroll', onLenis)
    }

    update(window.scrollY)

    return () => {
      window.removeEventListener('scroll', onNative)
      offLenis?.()
      outer.style.height = ''
    }
  }, [])

  return (
    <>
      {/* ══ DESKTOP: original pair-spread (hidden on mobile) ══ */}
      <div ref={desktopRef} className="ss-stage ss-desk-only">
        <div className="ss-service-area">
          <div className="ss-logo-center">
            <img src="/Logo event planners Red.png" alt="Event Planner" />
          </div>
          <div className="ss-pair ss-pair-1">
            <div className="ss-card ss-p1-l">
              <div className="ss-img-box"><img src={haldiImg} alt="Haldi" /></div>
              <div className="ss-card-name">Haldi</div>
            </div>
            <div className="ss-card ss-p1-r">
              <div className="ss-img-box"><img src={mehndiImg} alt="Mehandi" /></div>
              <div className="ss-card-name">Mehandi</div>
            </div>
          </div>
          <div className="ss-pair ss-pair-2">
            <div className="ss-card ss-p2-l">
              <div className="ss-img-box"><img src={sangeetImg} alt="Sangeet" /></div>
              <div className="ss-card-name">Sangeet</div>
            </div>
            <div className="ss-card ss-p2-r">
              <div className="ss-img-box"><img src={mandapImg} alt="Mandap" /></div>
              <div className="ss-card-name">Mandap</div>
            </div>
          </div>
          <div className="ss-pair ss-pair-3">
            <div className="ss-card ss-p3-l">
              <div className="ss-img-box"><img src={receptionImg} alt="Reception" /></div>
              <div className="ss-card-name">Reception</div>
            </div>
            <div className="ss-card ss-p3-r">
              <div className="ss-img-box"><img src={corporateImg} alt="Corporate Events" /></div>
              <div className="ss-card-name">Corporate Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE: tall outer → sticky inner (hidden on desktop) ══ */}
      <div ref={mobOuterRef} className="ss-mob-only ss-mob-outer">
        <div className="ss-wrap">
          <div className="ss-mob-heading">Our Services</div>

          {ALL_SERVICES.map((s, i) => (
            <div key={`bg-${i}`} className="ss-bg-label">{s.name}</div>
          ))}

          {ALL_SERVICES.map((s, i) => (
            <div key={i} className="ss-slide" style={{ zIndex: N - i }}>
              <img className="ss-slide-img" src={s.img} alt={s.name} />
              <div className="ss-slide-overlay">
                <span className="ss-name">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
