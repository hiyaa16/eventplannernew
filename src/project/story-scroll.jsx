import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StoryScroll() {
  const wrapRef = useRef(null)

  const scenes = [
    {
      num: 'I',
      kicker: 'The Mehndi',
      title: ['Henna', 'and laughter.'],
      body: 'Two days before the wedding. A courtyard of cousins, marigold canopies, the slow joy of belonging to a moment that has no clock.',
      tone: 'tone-1',
      tag: 'Day · Courtyard',
    },
    {
      num: 'II',
      kicker: 'The Sangeet',
      title: ['Music', 'until dawn.'],
      body: 'Choreographed for weeks, performed in a single night. Tabla, dhol, a string quartet under bistro lights — and every aunt has a song.',
      tone: 'tone-2',
      tag: 'Night · Garden stage',
    },
    {
      num: 'III',
      kicker: 'The Pheras',
      title: ['Smoke,', 'mantras, ', 'forever.'],
      body: 'Beneath the mandap. The fire is small and the words are old. Seven steps, seven promises — the only choreography that matters.',
      tone: 'tone-3',
      tag: 'Sunset · Mandap',
    },
    {
      num: 'IV',
      kicker: 'The Vidaai',
      title: ['A door,', 'a doorway,', 'a beginning.'],
      body: 'Rose petals. Embraces too long for any photograph. The gentle weight of leaving — and the brighter weight of what comes after.',
      tone: 'tone-4',
      tag: 'Dawn · Threshold',
    },
  ]

  useEffect(() => {
    const root = wrapRef.current
    if (!root) return

    const sceneEls = gsap.utils.toArray(root.querySelectorAll('.story-scene'))
    const totalSteps = sceneEls.length
    const pinDuration = totalSteps * 600

    gsap.set(sceneEls, { opacity: 0, y: 60, pointerEvents: 'none' })
    gsap.set(sceneEls[0], { opacity: 1, y: 0, pointerEvents: 'auto' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: '+=' + pinDuration,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
      },
    })

    for (let i = 1; i < totalSteps; i++) {
      tl.to(sceneEls[i - 1], { opacity: 0, y: -60, duration: 1 }, i - 1)
      tl.to(sceneEls[i],     { opacity: 1, y: 0,   duration: 1 }, i - 1)
    }

    const dots = root.querySelectorAll('.story-dot')
    let dotTrigger
    if (dots.length) {
      dotTrigger = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: '+=' + pinDuration,
        onUpdate: (self) => {
          const idx = Math.min(totalSteps - 1, Math.floor(self.progress * totalSteps))
          dots.forEach((d, i) => d.classList.toggle('active', i === idx))
        },
      })
    }

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill()
      tl.kill()
      dotTrigger && dotTrigger.kill()
    }
  }, [])

  return (
    <section className="story-scroll" ref={wrapRef}>
      <div className="story-stage">
        <div className="story-side-label">
          <span className="eyebrow">Chapters</span>
          <span className="story-side-title">A wedding<br/><span className="ital">in four acts.</span></span>
          <div className="story-dots">
            {scenes.map((s, i) => (
              <div key={i} className={'story-dot' + (i === 0 ? ' active' : '')}>
                <span className="story-dot-num">{s.num}</span>
                <span className="story-dot-label">{s.kicker}</span>
              </div>
            ))}
          </div>
        </div>

        {scenes.map((s, i) => (
          <div key={i} className={'story-scene ' + s.tone}>
            <div className="story-visual">
              <div className="story-img"><div className="img-placeholder">{s.kicker} · {s.tag}</div></div>
              <span className="story-tag">{s.tag}</span>
            </div>
            <div className="story-text">
              <span className="story-num">{s.num}</span>
              <span className="story-kicker">{s.kicker}</span>
              <h2 className="story-title">
                {s.title.map((line, li) => (
                  <span key={li} className={'sl ' + (li % 2 === 1 ? 'ital' : '')}>{line}{' '}</span>
                ))}
              </h2>
              <p className="story-body">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function HorizontalCategories() {
  const ref = useRef(null)

  const cats = [
    { name: 'Decoration & Design',      href: '#decoration',        subtitle: 'Floral & lighting',   tag: 'Mandap to marquee',                  hue: 'hue-rose' },
    { name: 'Catering Services',        href: '#catering',          subtitle: 'Menus & sourcing',    tag: 'Heirloom to haute',                  hue: 'hue-mustard' },
    { name: 'Event Management',         href: '#event-management',  subtitle: 'Planning & coordination', tag: 'End-to-end execution',            hue: 'hue-olive' },
    { name: 'Artist & Celebrity',       href: '#artist',            subtitle: 'Music & dance',       tag: 'World-class performances',            hue: 'hue-plum' },
    { name: 'Sound System',             href: '#sound-system',      subtitle: 'Audio & visuals',     tag: 'Crystal-clear excellence',            hue: 'hue-bronze' },
    { name: 'Logistics',                href: '#logistics',         subtitle: 'Transportation',      tag: 'Seamless travel coordination',        hue: 'hue-charcoal' },
    { name: 'Invitations & Gifts',      href: '#invitations',       subtitle: 'Thoughtful details',  tag: 'Custom experiences',                 hue: 'hue-bronze' },
    { name: 'Corporate Events',         href: '#corporate',         subtitle: 'Business solutions',  tag: 'Professional excellence',             hue: 'hue-rose' },
  ]

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const track = root.querySelector('.hcat-track')
    if (!track) return

    const compute = () => Math.max(0, track.scrollWidth - window.innerWidth + 80)

    const tween = gsap.to(track, {
      x: () => -compute(),
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: () => '+=' + (compute() + 200),
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })

    const cards = gsap.utils.toArray(root.querySelectorAll('.hcat-card'))
    const update = () => {
      const center = window.innerWidth / 2
      cards.forEach((card) => {
        const r = card.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const dist = Math.abs(cx - center)
        const k = Math.max(0, 1 - dist / (window.innerWidth * 0.7))
        card.style.transform = `scale(${0.86 + k * 0.14})`
        card.style.opacity = 0.55 + k * 0.45
      })
    }
    gsap.ticker.add(update)
    update()

    return () => {
      gsap.ticker.remove(update)
      tween.scrollTrigger && tween.scrollTrigger.kill()
      tween.kill()
    }
  }, [])

  return (
    <section className="hcat" ref={ref}>
      <div className="hcat-track">
        <div className="hcat-intro">
          <span className="eyebrow">Every kind of celebration</span>
          <h2 className="hcat-title">
            Six worlds,<br/><span className="ital">one studio.</span>
          </h2>
          <p>Scroll across — each is a complete craft within the larger one.</p>
        </div>

        {cats.map((c, i) => (
          <a href={c.href} key={c.name} className={'hcat-card ' + c.hue}>
            <div className="hcat-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="hcat-img">
              <div className="img-placeholder">{c.name}</div>
            </div>
            <div className="hcat-body">
              <span className="hcat-sub">{c.subtitle}</span>
              <h3>{c.name}</h3>
              <p>{c.tag}</p>
            </div>
          </a>
        ))}

        <div className="hcat-tail">
          <span className="eyebrow">Onward</span>
          <p className="hcat-tail-text">All weddings, none of them alike.</p>
        </div>
      </div>
    </section>
  )
}

Object.assign(window, { StoryScroll, HorizontalCategories })
