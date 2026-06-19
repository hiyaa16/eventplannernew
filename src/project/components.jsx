import { useState, useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .clip-reveal, .process-step')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in-view'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return
    const dot = cursor.querySelector('.cursor-dot')
    const ring = cursor.querySelector('.cursor-ring')
    let x = window.innerWidth / 2, y = window.innerHeight / 2
    let rx = x, ry = y
    let dotX = x, dotY = y
    let raf
    const onMove = (e) => { x = e.clientX; y = e.clientY }
    const loop = () => {
      dotX += (x - dotX) * 0.45
      dotY += (y - dotY) * 0.45
      dot.style.top = dotY + 'px'
      dot.style.left = dotX + 'px'
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      ring.style.top = ry + 'px'
      ring.style.left = rx + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()

    const hoverables = 'a, button, .service-row, .p-card, .chip, .nav-link, .nav-cta, input, textarea, select, .submit-btn, .t-dot'
    const onOver = (e) => {
      if (e.target.closest(hoverables)) cursor.classList.add('hovering')
    }
    const onOut = (e) => {
      if (e.target.closest(hoverables)) cursor.classList.remove('hovering')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Destination', href: '#destination' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]
  const services = [
    { label: 'Venue Booking', href: '#venue-booking' },
    { label: 'Decoration & Design', href: '#decoration' },
    { label: 'Catering Services', href: '#catering' },
    { label: 'Event Management', href: '#event-management' },
    { label: 'Artist & Celebrity', href: '#artist' },
    { label: 'Sound System', href: '#sound-system' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'Invitations & Gifts', href: '#invitations' },
    { label: 'Corporate Events', href: '#corporate' },
  ]
  return (
    <>
    <div className="mob-float">
      <a href="tel:+919602198888" className="mob-float-btn" aria-label="Call us"
         style={{ WebkitTapHighlightColor: 'transparent' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
      </a>
      <a href="https://wa.me/919602198888" target="_blank" rel="noopener noreferrer"
         className="mob-float-btn mob-float-wa" aria-label="WhatsApp"
         style={{ WebkitTapHighlightColor: 'transparent' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.884-.788-1.481-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
        </svg>
      </a>
    </div>
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <a href="#home" className="nav-logo">
        <img src="/Logo event planners Red.png" alt="Event Planner" className="nav-logo-img" />
      </a>
      <div className={'nav-links' + (menuOpen ? ' open' : '')}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <div className="nav-dropdown-container" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <button className="nav-link nav-dropdown-toggle" onClick={() => setDropdownOpen(o => !o)}>Services</button>
          {dropdownOpen && (
            <div className="nav-dropdown">
              {services.map(s => (
                <a key={s.label} href={s.href} className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>{s.label}</a>
              ))}
            </div>
          )}
        </div>
      </div>
      <a href="https://wa.me/919602198888" className="nav-cta" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
      <button className="nav-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
        <span style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}></span>
        <span style={menuOpen ? { opacity: 0 } : {}}></span>
        <span style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}></span>
      </button>
    </nav>
    </>
  )
}

export function RevealWord({ text, delay = 0, italic = false, className = '' }) {
  return (
    <span className={'word ' + className}>
      <span style={{ '--d': delay + 's' }} className={italic ? 'it' : ''}>{text}</span>
    </span>
  )
}

export function Marquee({ items }) {
  const list = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {list.map((it, i) => <span key={i}>{it}</span>)}
      </div>
    </div>
  )
}


export function Counter({ to, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setVal(Math.floor(eased * to))
            if (t < 1) requestAnimationFrame(tick)
            else setVal(to)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

Object.assign(window, { Nav, Marquee })
