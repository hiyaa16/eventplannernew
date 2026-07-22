import { Counter } from './components.jsx'

export function Portfolio() {
  const cards = [
    { cls: 'p1', title: ['Rajasthani', 'Weddings'], place: 'Jodhpur Heritage Venues', year: '2025', tag: '300+ guest palace weddings', img: '0E0A6726.jpg' },
    { cls: 'p2', title: ['Corporate', 'Events'], place: 'Jaipur Convention Centers', year: '2024', tag: 'Large scale corporate galas', img: 'VIV_5444.jpg' },
    { cls: 'p3', title: ['Destination', 'Celebrations'], place: "Udaipur Palaces", year: '2025', tag: 'Lakeside destination weddings', img: '_DSC9684.JPG' },
    { cls: 'p4', title: ['Haldi &', 'Mehandi'], place: 'Pushkar Resorts', year: '2024', tag: 'Traditional multi-day events', img: 'REX_4465.jpg' },
    { cls: 'p5', title: ['Reception &', 'Sangeet'], place: 'Jaisalmer Desert Venues', year: '2025', tag: 'Grand celebratory events', img: '_DSC9461.JPG' },
    { cls: 'p6', title: ['Intimate', 'Gatherings'], place: 'Kumbhalgarh & Ranakpur', year: '2023', tag: 'Personalized experiences', img: 'DSC01049.JPG' },
  ]
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-head">
          <h2 className="reveal">Memorable <span className="ital">celebrations</span></h2>
          <p className="body-m reveal stagger-1" style={{ maxWidth: '34ch' }}>
            A curated collection of beautiful events. Portfolio &amp; detailed case studies available on request.
          </p>
        </div>
        <div className="portfolio-grid">
          {cards.map((c, i) => (
            <a href="#gallery" className={'p-card reveal ' + c.cls} key={i} style={{ transitionDelay: (i % 3) * 0.08 + 's' }}>
              <img className="p-card-img" src={encodeURI(`/gallery/${c.img}`)} alt={c.title.join(' ')} loading="lazy" />
              <div className="overlay">
                <div className="title">
                  {c.title[0]}<br/>
                  <span className="ital">{c.title[1]}</span>
                </div>
                <div className="meta">{c.place} · {c.year}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="portfolio-stats">
          <div className="stat reveal">
            <div className="num"><Counter to={500} /></div>
            <div className="label">+ Events Executed</div>
          </div>
          <div className="stat reveal stagger-1">
            <div className="num"><Counter to={10} /></div>
            <div className="label">+ Destination Venues</div>
          </div>
          <div className="stat reveal stagger-2">
            <div className="num"><Counter to={14} suffix="" /><span className="ital"> yrs</span></div>
            <div className="label">Industry Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
