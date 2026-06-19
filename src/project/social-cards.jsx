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
        {s.embedSrc ? (
          <iframe
            src={s.embedSrc}
            title={s.platform}
            loading="lazy"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        ) : s.img ? (
          <img
            src={s.img}
            alt={s.platform}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div className="img-placeholder">{s.platform}</div>
        )}
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
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const track = root.querySelector('.social-track')
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

    const cards = gsap.utils.toArray(root.querySelectorAll('.social-hcard'))
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
    <section className="social-hcat" ref={ref}>
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
  )
}
