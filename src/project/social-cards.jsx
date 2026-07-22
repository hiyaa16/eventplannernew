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
  { id: 'instagram', platform: 'Instagram', hue: 'hue-instagram', img: igimg, href: 'https://www.instagram.com/event_planner_jdr/' },
  { id: 'google', platform: 'Google', hue: 'hue-google', img: googleimg, href: 'https://www.google.com/search?client=ms-android-vivo-rev1&cds=2&cs=0&hl=en-US&v=11.26.7.21.arm64&output=search&q=Event+Planner+(+Destination+wedding+planner)&ludocid=14085464485539381043&lsig=AB86z5VA8CkBGzmtSRZ_9yo93Sfk&kgs=614dd1414433bfff&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local' },
  { id: 'youtube', platform: 'YouTube', hue: 'hue-youtube', img: ytimg, href: 'https://youtube.com/shorts/j5FBqfKy5gM?si=YZhgHPelm0bMidIz' },
  { id: 'facebook', platform: 'Facebook', hue: 'hue-facebook', img: fbimg, href: 'https://www.facebook.com/reel/2848472995507899/' },
  { id: 'pinterest', platform: 'Pinterest', hue: 'hue-pinterest', img: pinimg, href: 'https://in.pinterest.com/Event_Planner_Jodhpur/' },
  { id: 'linkedin', platform: 'LinkedIn', hue: 'hue-linkedin', img: inimg, href: 'https://www.linkedin.com/posts/event-plannerjdr123_eventplanner-eventmanagement-wedding-ugcPost-7345434916865699840-eTC6/' },
]

function SocialCard({ s }) {
  return (
    <a className={'social-hcard ' + s.hue} href={s.href} target="_blank" rel="noopener noreferrer">
      <div className="hcat-img">
        <img src={s.img} alt={s.platform} loading="lazy" />
      </div>
      <div className="hcat-body">
        <h3>{s.platform}</h3>
      </div>
    </a>
  )
}

export function SocialSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const track = section.querySelector('.social-track')
    if (!track) return

    const compute = () => Math.max(0, track.scrollWidth - window.innerWidth + 40)

    let ctx
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -compute(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + (compute() + 200),
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }, section)

      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="social-hcat">
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
  )
}
