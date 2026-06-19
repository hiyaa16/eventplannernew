import jitendraImg from '../assets/jitendra.jpeg'
import gulsherImg   from '../assets/gulsher5.jpg'
import togetherImg  from '../assets/together.jpeg'

export function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview-grid">
          <a href="#about" className="about-preview-image reveal">
            <img src={togetherImg} alt="Event Planner Jodhpur" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </a>
          <div className="about-preview-content">
            <span className="eyebrow reveal">Our Approach</span>
            <h2 className="about-preview-headline display reveal stagger-1">
              Tradition meets <span className="italic" style={{ color: 'var(--bronze)' }}>excellence.</span>
            </h2>
            <p className="about-preview-body reveal stagger-2">
              We don't just plan events. We orchestrate them with meticulous attention to every detail.
              From the grandeur of your reception to the intimacy of your mehandi, every element is
              curated to reflect your vision and honor your traditions.
            </p>
            <div className="about-preview-signature reveal stagger-3">
              Event Planner Jodhpur
              <small>Professional Event Management</small>
            </div>
            <div className="about-preview-history reveal stagger-5">
              <h3>Founded in 2012</h3>
              <p>
                Event Planner was established in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani,
                leveraging their networking talent over the years to become one of Jodhpur's top event
                companies. We've expanded our services to neighboring cities and beyond, serving
                individual clients, corporate partners, and families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-head">
          <span className="eyebrow reveal">About Us</span>
          <h2 className="reveal stagger-1">Our <span className="ital">Story.</span></h2>
        </div>
        <div className="about-founders reveal stagger-2">
          <div className="about-founder">
            <div className="about-founder-img">
              <img src={jitendraImg} alt="Mr. Jitender Tyagi" />
            </div>
            <div className="about-founder-name">Mr. Jitender Tyagi</div>
          </div>
          <div className="about-founder">
            <div className="about-founder-img">
              <img src={gulsherImg} alt="Mr. Gulsher Sherani" />
            </div>
            <div className="about-founder-name">Mr. Gulsher Sherani</div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text reveal stagger-2">
            <h3>Founded in 2012</h3>
            <p>
              Event Planner was established in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani,
              leveraging their networking talent over the years to become one of Jodhpur's top event
              companies. We've expanded our services to neighboring cities and beyond, serving
              individual clients, corporate partners, and families.
            </p>
          </div>
          <div className="about-text reveal stagger-3">
            <h3>Our Mission</h3>
            <p>
              We are a driven team of wedding enthusiasts working to build a new way of wedding
              planning through luxurious wedding destinations and amazing customer service. We provide
              professional, elite services designed to create flawless and memorable occasions for
              our clients.
            </p>
          </div>
          <div className="about-text reveal stagger-4">
            <h3>Our Philosophy</h3>
            <p>
              We weave dreams, emotions, relations, and responsibilities into every event. With two
              decades of experience across Rajasthan's most stunning venues, we maintain an exclusive
              vendors list to enhance event execution. We specialize in weddings, seminars, and
              corporate events across multiple destinations including Jaipur, Udaipur, Pushkar,
              Jaisalmer, Kumbhalgarh, and Ranakpur.
            </p>
          </div>
          <div className="about-text reveal stagger-5">
            <h3>Our Promise</h3>
            <p>
              We don't just plan events. We orchestrate them with meticulous attention to every
              detail. From the grandeur of your reception to the intimacy of your mehandi, every
              element is curated to reflect your vision and honor your traditions. Our celebrations
              are not just executed perfectly — they're remembered forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
