import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import igimg from '../assets/insta.png'
import fbimg from '../assets/fb.png'
import ytimg from '../assets/yt.png'
import inimg from '../assets/linkedin.png'
import googleimg from '../assets/google.png'
import pinimg from '../assets/pin.png'

gsap.registerPlugin(ScrollTrigger)

const SOCIAL = [
  { id: 'instagram', platform: 'Instagram', hue: 'hue-instagram', img: igimg },
  { id: 'google', platform: 'Google', hue: 'hue-google', img: googleimg },
  { id: 'youtube', platform: 'YouTube', hue: 'hue-youtube', img: ytimg },
  { id: 'facebook', platform: 'Facebook', hue: 'hue-facebook', img: fbimg },
  { id: 'pinterest', platform: 'Pinterest', hue: 'hue-pinterest', img: pinimg },
  { id: 'linkedin', platform: 'LinkedIn', hue: 'hue-linkedin', img: inimg },
]

function SocialCard({ s }) {
  return (
    <div className={'social-hcard ' + s.hue}>
      <div className="hcat-img">
        <img src={s.img} alt={s.platform} loading="lazy" />
      </div>
      <div className="hcat-body">
        <h3>{s.platform}</h3>
      </div>
    </div>
  )
}

export function SocialSection() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const track = inner.querySelector('.social-track')
    if (!track) return

    const compute = () => Math.max(0, track.scrollWidth - window.innerWidth + 40)

    const setHeight = () => {
      outer.style.height = (compute() + 200 + window.innerHeight) + 'px'
    }
    setHeight()

    const raf = requestAnimationFrame(() => {
      const tween = gsap.to(track, {
        x: () => -compute(),
        ease: 'none',
        scrollTrigger: {
          trigger: outer,
          start: 'top top',
          end: () => '+=' + (compute() + 200),
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      ScrollTrigger.refresh()

      outer._cleanup = () => {
        tween.scrollTrigger && tween.scrollTrigger.kill()
        tween.kill()
        outer.style.height = ''
      }
    })

    return () => {
      cancelAnimationFrame(raf)
      outer._cleanup?.()
    }
  }, [])

  return (
    <div ref={outerRef} className="social-hcat-outer">
      <section ref={innerRef} className="social-hcat">
        <div className="social-track">
          <div className="hcat-intro">
            <span className="eyebrow">Connect with us</span>
            <h2 className="hcat-title">
              Follow our<br/><span className="ital">journey.</span>
            </h2>
            <p>Find us across every platform — scroll to explore.</p>
          </div>

          {SOCIAL.map((s) => (
            <SocialCard key={s.id} s={s} />
          ))}

          <div className="hcat-tail">
            <span className="eyebrow">Stay connected</span>
          </div>
        </div>
      </section>
    </div>
  )
}
