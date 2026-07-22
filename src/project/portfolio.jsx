import { Counter } from './components.jsx'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

export function Portfolio() {
  const cards = [
    { cls: 'p1', img: img1 },
    { cls: 'p2', img: img2 },
    { cls: 'p3', img: img3 },
    { cls: 'p4', img: img4 },
    { cls: 'p5', img: img5 },
    { cls: 'p6', img: img6 },
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
              <img className="p-card-img" src={c.img} alt="Portfolio event" loading="lazy" />
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
