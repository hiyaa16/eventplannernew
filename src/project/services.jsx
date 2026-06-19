export function Services() {
  const rows = [
    {
      n: '01', name: 'Venue', ital: 'Booking',
      desc: "Discover the perfect venue for your special event within your budget. From heritage palaces to garden estates, we have access to Rajasthan's most stunning venues.",
      preview: 'Venues', grad: 'linear-gradient(180deg, #4A5A48 0%, #2E3A2D 100%)',
      href: '#venue-booking',
    },
    {
      n: '02', name: 'Event', ital: 'Management',
      desc: "Complete coordination from concept through execution. Our team manages every aspect — haldi, mehandi, sangeet, mandap, reception, and corporate events with precision and elegance.",
      preview: 'Management', grad: 'linear-gradient(180deg, #B89968 0%, #5C4525 100%)',
      href: '#event-management',
    },
    {
      n: '03', name: 'Decor &', ital: 'Design',
      desc: "Customizable aesthetics from traditional to contemporary. Our design team transforms your vision into breathtaking arrangements using premium materials and innovative concepts.",
      preview: 'Design', grad: 'linear-gradient(180deg, #8A7A6B 0%, #2E2820 100%)',
      href: '#decoration',
    },
    {
      n: '04', name: 'Catering &', ital: 'Entertainment',
      desc: "Indian traditional and international fusion cuisine, paired with professional DJ services, live music, and dance performances that elevate your celebration.",
      preview: 'Catering', grad: 'linear-gradient(180deg, #ABB8A2 0%, #4A5A48 100%)',
      href: '#catering',
    },
    {
      n: '05', name: 'Celebrity &', ital: 'Additional Services',
      desc: "High-profile talent booking, sound systems, transportation, invitations, gift hampers, and specialized logistics. We handle everything so you can enjoy your day.",
      preview: 'Services', grad: 'linear-gradient(180deg, #E5D9C4 0%, #C8B89A 100%)',
      href: '#artist',
    },
  ]
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head">
          <h2 className="reveal">
            Complete <span className="italic" style={{ color: 'var(--sage-deep)' }}>event solutions</span> for every celebration.
          </h2>
          <p className="body-m right reveal stagger-1">
            From intimate gatherings to grand celebrations, we deliver comprehensive services
            tailored to your event. Below are the core services we specialize in.
          </p>
        </div>
        <div className="service-list">
          {rows.map((r, i) => (
            <a
              className="service-row reveal"
              key={r.n}
              href={r.href}
              data-preview={r.preview}
              data-grad={r.grad}
              style={{ transitionDelay: (i * 0.06) + 's', textDecoration: 'none', color: 'inherit', display: 'grid' }}
            >
              <div className="num">{r.n}</div>
              <div className="name">{r.name} <span className="ital">{r.ital}</span></div>
              <div className="desc">{r.desc}</div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
