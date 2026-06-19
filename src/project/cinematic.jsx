import { useEffect, useRef, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let cinematicBooted = false

export function bootCinematic() {
  if (cinematicBooted) return
  cinematicBooted = true

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  })
  window.__lenis = lenis

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  // ScrollTrigger was set up before Lenis (children effects run first).
  // Refresh now so all triggers recalculate with Lenis in control of scroll.
  ScrollTrigger.refresh()
}

export function CinematicText({ children, delay = 0, className = '', stagger = 0.035 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || el.dataset.split) return
    el.dataset.split = '1'
    const raw = (el.textContent || '').trim()
    el.innerHTML = ''
    const words = raw.split(/\s+/)
    let order = 0
    words.forEach((word, wi) => {
      const wEl = document.createElement('span')
      wEl.className = 'ci-word';
      [...word].forEach((letter) => {
        const lEl = document.createElement('span')
        lEl.className = 'ci-letter'
        lEl.style.animationDelay = (delay + order * stagger) + 's'
        lEl.textContent = letter
        wEl.appendChild(lEl)
        order++
      })
      el.appendChild(wEl)
      if (wi < words.length - 1) {
        const sp = document.createElement('span')
        sp.className = 'ci-space'
        sp.innerHTML = '&nbsp;'
        el.appendChild(sp)
      }
    })
  }, [children])
  return <span ref={ref} className={'cinematic-text ' + className}>{children}</span>
}

export function ParticleField({ count = 36 }) {
  const particles = useMemo(() => (
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 22,
      duration: 16 + Math.random() * 16,
      size: 1.6 + Math.random() * 4,
      drift: -50 + Math.random() * 100,
      opacity: 0.35 + Math.random() * 0.5,
    }))
  ), [count])
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left + '%',
            animationDelay: -p.delay + 's',
            animationDuration: p.duration + 's',
            width: p.size + 'px',
            height: p.size + 'px',
            '--drift': p.drift + 'px',
            '--peak-opacity': p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export function SparkleShower({ count = 22, targetSelector = null }) {
  const ref = useRef(null)

  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 110 - 5,
      delay: Math.random() * 24,
      duration: 12 + Math.random() * 16,
      size: 5 + Math.random() * 7,
      drift: -90 + Math.random() * 180,
      rotStart: Math.random() * 360,
      rotEnd: -240 + Math.random() * 480,
      opacity: 0.12 + Math.random() * 0.18,
    }))
  }, [count])

  useEffect(() => {
    if (!targetSelector) return
    const shower = ref.current
    if (!shower) return
    shower.style.opacity = '0'

    const target = document.querySelector(targetSelector)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => { shower.style.opacity = entry.isIntersecting ? '1' : '0' },
      { threshold: 0.15 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [targetSelector])

  return (
    <div ref={ref} className="sparkle-shower" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle-particle"
          style={{
            left: s.left + '%',
            animationDelay: -s.delay + 's',
            animationDuration: s.duration + 's',
            width: s.size + 'px',
            height: s.size + 'px',
            '--drift': s.drift + 'px',
            '--rot-start': s.rotStart + 'deg',
            '--rot-end': s.rotEnd + 'deg',
            '--peak-opacity': s.opacity,
          }}
        />
      ))}
    </div>
  )
}

export function FogOverlay() {
  return (
    <div className="fog-overlay" aria-hidden="true">
      <div className="fog-layer fog-1"></div>
      <div className="fog-layer fog-2"></div>
    </div>
  )
}

export function useScrollTriggerReveals() {
  useEffect(() => {
    const items = gsap.utils.toArray('.reveal, .clip-reveal, .process-step')
    const triggers = []
    items.forEach((el) => {
      const t = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('in-view'),
      })
      triggers.push(t)
    })

    const heroBg = document.querySelector('.hero-bg')
    if (heroBg) {
      const t = gsap.to(heroBg, {
        scale: 1.18,
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      triggers.push(t.scrollTrigger)
    }

    const heroContent = document.querySelector('.hero .container')
    if (heroContent) {
      const t = gsap.to(heroContent, {
        y: -80,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      triggers.push(t.scrollTrigger)
    }

    const philoImg = document.querySelector('.philosophy-image')
    if (philoImg) {
      const t = gsap.fromTo(philoImg,
        { y: 80 },
        {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: '.philosophy',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      triggers.push(t.scrollTrigger)
    }

    return () => {
      triggers.forEach((t) => t && t.kill())
    }
  }, [])
}

Object.assign(window, { bootCinematic, CinematicText, ParticleField, FogOverlay, SparkleShower })
