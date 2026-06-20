import { useState, useRef } from 'react'
import { ParticleField, FogOverlay, CinematicText } from './cinematic.jsx'

export function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-rays"></div>
      </div>
      <ParticleField count={42} />
      <FogOverlay />

      <div className="hero-video-wrap">
        <video ref={videoRef} autoPlay muted loop playsInline className="hero-video">
          <source src="https://eventplannerjodhpur.com/photos/video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="hero-eyebrow-row">
          <span className="eyebrow no-line">Wedding &amp; Event Planning</span>
        </div>

      </div>

      <div className="hero-mobile-tagline" aria-hidden="false">
        Your Wedding Adventure Starts Here
      </div>

      <div className="hero-side">
        <span className="dot"></span>
        Scroll to begin
      </div>

      <button
        className="hero-sound-btn"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>
    </section>
  )
}
