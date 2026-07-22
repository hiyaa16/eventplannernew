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
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@event_planner_jdr',
    href: 'https://www.instagram.com/event_planner_jdr/',
    subtitle: 'Latest Reels & Posts',
    tag: 'Follow for daily inspiration',
    hue: 'hue-instagram',
    img: igimg,
  },
  {
    id: 'pinterest',
    platform: 'Pinterest',
    handle: 'Event Planner Wedding',
    href: 'https://in.pinterest.com/Event_Planner_Jodhpur/',
    subtitle: 'Ideas & Inspirations',
    tag: 'Explore our Pinterest',
    hue: 'hue-pinterest',
    img: pinimg,
  },
  {
    id: 'google',
    platform: 'Google',
    handle: 'Event Planner Jodhpur',
    href: 'https://www.google.com/search?client=ms-android-vivo-rev1&cds=2&cs=0&hl=en-US&v=11.26.7.21.arm64&output=search&q=Event+Planner+(+Destination+wedding+planner)&ludocid=14085464485539381043&lsig=AB86z5VA8CkBGzmtSRZ_9yo93Sfk&kgs=614dd1414433bfff&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local',
    subtitle: 'Reviews & Business Profile',
    tag: 'View us on Google',
    hue: 'hue-google',
    img: googleimg,
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: 'Event Planner Jodhpur',
    href: 'https://youtube.com/shorts/j5FBqfKy5gM?si=YZhgHPelm0bMidIz',
    subtitle: 'Wedding Films & Highlights',
    tag: 'Watch our event reels',
    hue: 'hue-youtube',
    img: ytimg,
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'Event Planner Wedding',
    href: 'https://www.facebook.com/reel/2848472995507899/',
    subtitle: 'Community & Updates',
    tag: 'Watch on Facebook',
    hue: 'hue-facebook',
    img: fbimg,
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Event Planner',
    href: 'https://www.linkedin.com/posts/event-plannerjdr123_eventplanner-eventmanagement-wedding-ugcPost-7345434916865699840-eTC6/',
    subtitle: 'Corporate & Professional',
    tag: 'Connect with us',
    hue: 'hue-linkedin',
    img: inimg,
  },
]

function SocialCard({ s, index }) {
  return (
    <a
      href={s.href}
      className={'social-hcard ' + s.hue}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="hcat-num">{String(index + 1).padStart(2, '0')}</div>
      <div className="hcat-img">
        <img src={s.img} alt={s.platform} loading="lazy" />
      </div>
      <div className="hcat-body">
        <span className="hcat-sub">{s.subtitle}</span>
        <h3>{s.platform}</h3>
        <p>{s.tag}</p>
      </div>
    </a>
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

          {SOCIAL.map((s, i) => (
            <SocialCard key={s.id} s={s} index={i} />
          ))}

          <div className="hcat-tail">
            <span className="eyebrow">Stay connected</span>
          </div>
        </div>
      </section>
    </div>
  )
}
