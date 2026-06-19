import { useEffect, useRef } from 'react'

function bezierQ(t, p0, p1, p2) {
  const u = 1 - t
  return u * u * p0 + 2 * u * t * p1 + t * t * p2
}

function Groom() {
  return (
    <g className="figure groom-figure">
      <path d="M 105 78 Q 108 110, 102 145 Q 98 160, 100 180" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.85"/>
      <circle cx="100" cy="183" r="2" fill="var(--gold)"/>
      <path d="M 52 70 Q 50 35, 100 30 Q 150 35, 148 70 Q 130 60, 100 60 Q 70 60, 52 70 Z" fill="currentColor"/>
      <path d="M 148 70 Q 168 68, 178 92 Q 172 75, 148 75 Z" fill="currentColor"/>
      <path d="M 100 30 Q 100 18, 95 10 M 100 30 Q 100 18, 105 10 M 100 30 Q 100 18, 100 8" stroke="var(--gold)" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <circle cx="100" cy="32" r="3.5" fill="var(--gold)"/>
      <ellipse cx="100" cy="92" rx="20" ry="22" fill="currentColor"/>
      <ellipse cx="112" cy="94" rx="9" ry="11" fill="var(--bronze-2)" opacity="0.22"/>
      <circle cx="114" cy="92" r="1.4" fill="var(--ink)" opacity="0.7"/>
      <path d="M 96 108 Q 100 116, 116 110" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.55"/>
      <path d="M 102 102 Q 110 100, 118 102" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.55"/>
      <circle cx="82" cy="98" r="2" fill="var(--ink)" opacity="0.35"/>
      <rect x="92" y="112" width="16" height="12" fill="currentColor"/>
      <path d="M 70 124
               Q 55 180, 48 280
               Q 44 360, 46 400
               L 154 400
               Q 156 360, 152 280
               Q 145 180, 130 124
               Q 115 130, 100 130
               Q 85 130, 70 124 Z" fill="currentColor"/>
      <path d="M 100 130 L 100 280" stroke="var(--gold)" strokeWidth="1.2" opacity="0.7"/>
      <circle cx="100" cy="150" r="2" fill="var(--gold)"/>
      <circle cx="100" cy="180" r="2" fill="var(--gold)"/>
      <circle cx="100" cy="210" r="2" fill="var(--gold)"/>
      <circle cx="100" cy="240" r="2" fill="var(--gold)"/>
      <path d="M 72 124 Q 60 180, 58 270" stroke="var(--gold)" strokeWidth="2" fill="none" opacity="0.75"/>
      <ellipse cx="78" cy="403" rx="14" ry="4" fill="var(--ink)" opacity="0.4"/>
      <ellipse cx="122" cy="403" rx="14" ry="4" fill="var(--ink)" opacity="0.4"/>
      <path d="M 128 138 Q 162 150, 192 168" stroke="currentColor" strokeWidth="20" fill="none" strokeLinecap="round" className="arm"/>
      <circle cx="196" cy="170" r="9" fill="currentColor"/>
      <circle cx="192" cy="168" r="11" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity="0.8"/>
    </g>
  )
}

function Bride() {
  return (
    <g className="figure bride-figure">
      <ellipse cx="100" cy="72" rx="24" ry="14" fill="currentColor"/>
      <path d="M 78 60
               Q 70 80, 60 130
               Q 45 200, 35 250
               L 50 240
               L 70 220
               L 70 130
               Q 75 90, 90 70 Z"
            fill="currentColor"/>
      <path d="M 122 60
               Q 130 80, 140 130
               Q 155 200, 165 250
               L 150 240
               L 130 220
               L 130 130
               Q 125 90, 110 70 Z"
            fill="currentColor"/>
      <path d="M 78 60 Q 100 50, 122 60 Q 116 56, 100 54 Q 84 56, 78 60 Z" fill="currentColor"/>
      <path d="M 100 56 L 100 80" stroke="var(--gold)" strokeWidth="1.2"/>
      <circle cx="100" cy="82" r="3.5" fill="var(--gold)"/>
      <ellipse cx="100" cy="98" rx="20" ry="22" fill="currentColor"/>
      <ellipse cx="88" cy="100" rx="9" ry="11" fill="var(--bronze-2)" opacity="0.22"/>
      <circle cx="100" cy="88" r="2.2" fill="var(--gold)"/>
      <circle cx="86" cy="98" r="1.4" fill="var(--ink)" opacity="0.65"/>
      <path d="M 80 98 Q 78 104, 82 108" stroke="var(--ink)" strokeWidth="0.7" fill="none" opacity="0.5"/>
      <path d="M 82 112 Q 86 114, 90 113" stroke="var(--ink)" strokeWidth="0.7" fill="none" opacity="0.55"/>
      <circle cx="116" cy="106" r="2" fill="var(--gold)"/>
      <circle cx="116" cy="112" r="1.4" fill="var(--gold)"/>
      <rect x="92" y="118" width="16" height="12" fill="currentColor"/>
      <path d="M 80 130 Q 100 142, 120 130" stroke="var(--gold)" strokeWidth="1.6" fill="none"/>
      <circle cx="100" cy="140" r="2.5" fill="var(--gold)"/>
      <path d="M 70 130
               Q 50 200, 25 360
               Q 18 390, 35 400
               L 165 400
               Q 182 390, 175 360
               Q 150 200, 130 130
               Q 115 136, 100 136
               Q 85 136, 70 130 Z" fill="currentColor"/>
      <path d="M 25 360 Q 100 380, 175 360" stroke="var(--gold)" strokeWidth="2.2" fill="none" opacity="0.85"/>
      <circle cx="60" cy="300" r="2" fill="var(--gold)" opacity="0.7"/>
      <circle cx="140" cy="300" r="2" fill="var(--gold)" opacity="0.7"/>
      <circle cx="80" cy="330" r="1.8" fill="var(--gold)" opacity="0.6"/>
      <circle cx="120" cy="330" r="1.8" fill="var(--gold)" opacity="0.6"/>
      <circle cx="100" cy="320" r="2" fill="var(--gold)" opacity="0.7"/>
      <path d="M 145 140 Q 175 200, 170 280" stroke="var(--gold)" strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M 72 142 Q 38 152, 8 168" stroke="currentColor" strokeWidth="20" fill="none" strokeLinecap="round" className="arm"/>
      <circle cx="4" cy="170" r="9" fill="currentColor"/>
      <ellipse cx="22" cy="160" rx="3" ry="11" transform="rotate(-30 22 160)" fill="var(--gold)" opacity="0.8"/>
      <circle cx="8" cy="168" r="11" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity="0.85"/>
      <circle cx="2" cy="172" r="1.5" fill="var(--gold)" opacity="0.6"/>
    </g>
  )
}

function Marigold({ r = 6 }) {
  return (
    <g>
      <circle r={r} fill="var(--garland-flower)"/>
      <circle r={r * 0.55} fill="var(--garland-flower-2)"/>
      <circle r={r * 0.2} fill="var(--garland-center)"/>
    </g>
  )
}

export function CoupleScene() {
  const wrapRef = useRef(null)
  const garlandPathRef = useRef(null)
  const groomGroupRef = useRef(null)
  const brideGroupRef = useRef(null)
  const marigoldsRef = useRef([])

  const G_HAND = { x: 396, y: 230 }
  const B_HAND = { x: 604, y: 230 }

  useEffect(() => {
    let time = 0
    let raf
    let scroll = 0

    const onScroll = () => {
      const vh = window.innerHeight || 800
      scroll = Math.max(0, Math.min(1, window.scrollY / (vh * 0.85)))
    }
    onScroll()

    const marigoldCount = 21

    const tick = () => {
      time += 0.014
      const sway = Math.sin(time) * 3
      const breathe = Math.sin(time * 0.7) * 1.5

      const peakY = 70 + scroll * 145 + sway
      const startX = G_HAND.x
      const endX   = B_HAND.x
      const startY = G_HAND.y + sway * 0.25
      const endY   = B_HAND.y - sway * 0.25

      const liftG = breathe
      const liftB = -breathe

      if (garlandPathRef.current) {
        garlandPathRef.current.setAttribute(
          'd',
          `M ${startX} ${startY} Q 500 ${peakY} ${endX} ${endY}`
        )
      }

      const ms = marigoldsRef.current
      for (let i = 0; i < ms.length; i++) {
        const t = i / (marigoldCount - 1)
        const x = bezierQ(t, startX, 500, endX)
        const y = bezierQ(t, startY, peakY, endY)
        const wobble = Math.sin(time * 1.3 + i * 0.6) * 1.2
        if (ms[i]) ms[i].setAttribute('transform', `translate(${x} ${y + wobble})`)
      }

      if (groomGroupRef.current) {
        const tx = 200 + scroll * 14
        const ty = 60 + liftG + scroll * 6
        const rot = scroll * 1.8
        groomGroupRef.current.setAttribute('transform', `translate(${tx} ${ty}) rotate(${rot} 100 220)`)
      }
      if (brideGroupRef.current) {
        const tx = 600 - scroll * 14
        const ty = 60 + liftB + scroll * 6
        const rot = -scroll * 1.8
        brideGroupRef.current.setAttribute('transform', `translate(${tx} ${ty}) rotate(${rot} 100 220)`)
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const marigoldNodes = []
  const total = 21
  for (let i = 0; i < total; i++) {
    const big = i === 0 || i === total - 1 || i === Math.floor(total / 2)
    const r = big ? 8 : (i % 3 === 0 ? 6.5 : 5.2)
    marigoldNodes.push(
      <g key={i} ref={(el) => { marigoldsRef.current[i] = el }}>
        <Marigold r={r} />
      </g>
    )
  }

  return (
    <div className="couple-scene" ref={wrapRef} aria-hidden="true">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="haloGrad" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="var(--halo)" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="var(--halo)" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="500" cy="260" r="320" fill="url(#haloGrad)"/>
        <ellipse cx="300" cy="460" rx="120" ry="6" fill="var(--ink)" opacity="0.08"/>
        <ellipse cx="700" cy="460" rx="120" ry="6" fill="var(--ink)" opacity="0.08"/>
        <g className="garland">
          <path
            ref={garlandPathRef}
            d={`M ${G_HAND.x} ${G_HAND.y} Q 500 70 ${B_HAND.x} ${B_HAND.y}`}
            stroke="var(--garland-stem)"
            strokeWidth="2"
            fill="none"
            opacity="0.85"
          />
          {marigoldNodes}
        </g>
        <g ref={groomGroupRef} transform="translate(200 60)">
          <g><Groom /></g>
        </g>
        <g ref={brideGroupRef} transform="translate(600 60)">
          <g><Bride /></g>
        </g>
      </svg>
    </div>
  )
}
