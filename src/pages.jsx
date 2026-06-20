import { useState, useEffect } from 'react'
import { useReveal } from './project/navbar.jsx'
import { Inquiry } from './project/contact.jsx'
import helpdeskImg from './assets/helpdesk.png'
import guestImg from './assets/guest.png'
import jitendraImg from './assets/jitendra.jpeg'
import gulsherImg  from './assets/gulsher5.jpg'
import trendImg from './assets/trend.png'
import blogImg from './assets/image.png'
import rajImg from './assets/raj.png'
import jodhpurImg from './assets/jodhpur.jpg'
import udaipurImg from './assets/udaipur.jpg'
import jaipurImg from './assets/jaipur.jpg'
import jaisalmerImg from './assets/jaisalmer.jpg'
import pushkarImg from './assets/pushkar.jpg'
import c1Img from './assets/c1.jpg'
import c2Img from './assets/c2.jpg'
import c3Img from './assets/c3.jpg'
import sangeetImg from './assets/sangeet.jpg'
import haldiImg from './assets/haldi.jpg'
import receptionImg from './assets/reception.jpg'
import floralImg from './assets/floral.jpg'
import furnitureImg from './assets/furniture.jpg'
import propsImg from './assets/props.jpg'
import funcImg from './assets/func.jpg'
import lightingImg from './assets/lighting.jpg'
import artist1Img from './assets/artist.3jpg.jpg'
import artist2Img from './assets/artist2.jpg'
import artist3Img from './assets/artist.jpg'
import corp1Img from './assets/corporate3.png'
import corp2Img from './assets/corporate2.png'
import corp3Img from './assets/sound1.png'
import corp4Img from './assets/corporate.png'
import sound1Img from './assets/sound1.png'
import sound2Img from './assets/sound2.jpg'
import g1Img from './assets/g1.jpg'
import g2Img from './assets/g2.jpg'
import g3Img from './assets/g3.jpg'
import logiImg from './assets/logi.jpg'
import logi2Img from './assets/logi2.jpg'
import logi3Img from './assets/logi3.jpg'
import corpJpgImg from './assets/corporate.jpg'

function ServiceHero({ img }) {
  return (
    <div className="sp-hero reveal">
      {img
        ? <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        : <div className="sp-placeholder">[ Add image here ]</div>
      }
    </div>
  )
}

export function AboutPage() {
  useReveal()
  return (
    <main>
      <section className="ap-hero">
        <div className="container">
          <div className="ap-hero-head">
            <span className="eyebrow reveal" style={{ display: 'flex', justifyContent: 'center' }}>About Us</span>
            <h1 className="reveal stagger-1">Who <span className="ital">We Are.</span></h1>
          </div>
          <div className="ap-photo-grid reveal stagger-2">
            <div className="ap-founder-card">
              <div className="ap-photo">
                <img src={jitendraImg} alt="Mr. Jitender Tyagi" />
              </div>
              <div className="ap-founder-name">Mr. Jitender Tyagi</div>
            </div>
            <div className="ap-founder-card">
              <div className="ap-photo">
                <img src={gulsherImg} alt="Mr. Gulsher Sherani" />
              </div>
              <div className="ap-founder-name">Mr. Gulsher Sherani</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text reveal stagger-1">
              <h3>Founded in 2012</h3>
              <p>
                Event Planner was established in 2012 by Mr. Jitender Tyagi and Mr. Gulsher Sherani, leveraging their networking talent over the years to become one of Jodhpur's top event companies. We've expanded our services to neighboring cities and beyond, serving individual clients, corporate partners, and families.
              </p>
            </div>
            <div className="about-text reveal stagger-2">
              <h3>Our Mission</h3>
              <p>
                We are a driven team of wedding enthusiasts working to build a new way of wedding planning through luxurious wedding destinations and amazing customer service. We provide professional, elite services designed to create flawless and memorable occasions for our clients.
              </p>
            </div>
            <div className="about-text reveal stagger-3">
              <h3>Our Philosophy</h3>
              <p>
                We weave dreams, emotions, relations, and responsibilities into every event. With two decades of experience across Rajasthan's most stunning venues, we maintain an exclusive vendors list to enhance event execution. We specialize in weddings, seminars, and corporate events across multiple destinations including Jaipur, Udaipur, Pushkar, Jaisalmer, Kumbhalgarh, and Ranakpur.
              </p>
            </div>
            <div className="about-text reveal stagger-4">
              <h3>Our Promise</h3>
              <p>
                We don't just plan events. We orchestrate them with meticulous attention to every detail. From the grandeur of your reception to the intimacy of your mehandi, every element is curated to reflect your vision and honor your traditions. Our celebrations are not just executed perfectly — they're remembered forever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function ServicesPage() {
  useReveal()
  return (
    <main>
      <section className="service-page">
        <div className="container">
          <h2>Services Page - Coming Soon</h2>
        </div>
      </section>
    </main>
  )
}

export function PortfolioPage() {
  useReveal()
  return (
    <main>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2>Portfolio Page - Coming Soon</h2>
        </div>
      </section>
    </main>
  )
}

export function DecorationPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Decor &amp; Design</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Crafting <em>Beautiful Spaces.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Attention to detail can transform a wedding into a truly unforgettable experience. We work with you to bring your vision to life, crafting an atmosphere that reflects your personal style and story.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={floralImg} alt="Floral Design" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Floral<br /><em>Design</em></h2>
            <p className="sp-zz-text">We craft stunning floral arrangements that set the tone, from delicate bouquets to dramatic installations, enhancing the beauty of your venue and making it memorable.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={furnitureImg} alt="Custom Furniture" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Custom &amp;<br /><em>Rental Furniture</em></h2>
            <p className="sp-zz-text">We curate unique furniture pieces that complement your aesthetic and provide practical comfort. Whether vintage elegance or modern minimalism, we source or custom-design the perfect pieces.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={propsImg} alt="Accessories and Props" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Accessories &amp;<br /><em>Props</em></h2>
            <p className="sp-zz-text">From statement-making decor elements to subtle accents, our curated selection of accessories and props adds personality and charm to your event.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={lightingImg} alt="Lighting Design" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 04</span>
            <h2 className="sp-zz-heading">Lighting<br /><em>Design</em></h2>
            <p className="sp-zz-text">We understand the power of lighting to create mood and ambiance. Our lighting concepts elevate the space, spotlighting key areas and enhancing the overall experience for your guests.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={funcImg} alt="Functional Conversation Pieces" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 05</span>
            <h2 className="sp-zz-heading">Functional<br /><em>Conversation Pieces</em></h2>
            <p className="sp-zz-text">We create design elements that double as conversation starters, blending creativity with functionality to keep your guests engaged throughout the event.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">By harmonizing these elements, we turn your dream wedding into a reality, ensuring every detail contributes to a seamless and stunning celebration.</p>
        </div>
      </section>
    </main>
  )
}

export function CateringPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Catering &amp; Cuisine</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Global Flavours, <em>Local Heart.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            We believe that a memorable event goes hand in hand with exceptional cuisine. With world-class catering vendors, we create unique menus featuring show-stopping live stations that elevate the dining experience.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={c3Img} alt="Global Culinary Spread" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Global Culinary<br /><em>Adventure</em></h2>
            <p className="sp-zz-text">Embark on a culinary adventure with flavors from around the globe — from exquisite truffles from Italy to savory parathas from Delhi, our team is dedicated to bringing your gastronomic visions to life.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={c2Img} alt="World-Class Catering" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">World-Class<br /><em>Expertise</em></h2>
            <p className="sp-zz-text">We collaborate with Michelin-star and celebrity chefs to ensure every dish is a work of art, prepared with the finest ingredients. Our farm-to-table approach emphasizes freshness, connecting you with local producers and seasonal flavors.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={c1Img} alt="Beverage Excellence" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Beverage<br /><em>Excellence</em></h2>
            <p className="sp-zz-text">Our top mixologists craft innovative cocktails that perfectly complement your menu, while our selection of fine wines and craft beers enhances the overall dining experience for every palate.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">With our commitment to culinary excellence, your event will not only satisfy but delight every guest.</p>
        </div>
      </section>
    </main>
  )
}

export function EventManagementPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Event Management</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Seamless <em>Coordination.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Managing a wedding involves meticulous planning, coordination, and attention to detail to ensure that the big day runs smoothly and is memorable for all the right reasons.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={guestImg} alt="Comprehensive Planning" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Comprehensive<br /><em>Planning</em></h2>
            <p className="sp-zz-text">It begins with setting a budget and a timeline, followed by selecting the perfect venue, which sets the tone for the entire event. Engaging reliable vendors for catering, photography, floral arrangements, and entertainment is crucial.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={helpdeskImg} alt="Guest Management" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Guest<br /><em>Management</em></h2>
            <p className="sp-zz-text">Equally important is managing guest lists and sending out invitations well in advance. Effective communication with all parties involved, including the bridal party and guests, ensures everyone is informed and on the same page.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">From first call to final toast, we orchestrate every detail so you can be fully present for the moments that matter.</p>
        </div>
      </section>
    </main>
  )
}

export function ArtistPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Artist &amp; Entertainment</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            World-Class <em>Talent.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            We elevate your celebration with extraordinary performances — from live bands and celebrity acts to immersive experiences that leave lasting impressions on every guest.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={artist2Img} alt="World-Class Talent Curation" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">World-Class<br /><em>Talent Curation</em></h2>
            <p className="sp-zz-text">We continually seek out fresh talent, ensuring you receive top-notch performances tailored to your unique preferences. Our extensive network of world-class artists guarantees we'll find the perfect match to bring your vision to life.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={artist3Img} alt="Diverse Entertainment Range" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Diverse<br /><em>Entertainment Range</em></h2>
            <p className="sp-zz-text">Our entertainment spans live bands, DJs, mentalists, illusionists, and comedians. Whether you want the energy of a cirque act or the elegance of a dance troupe, we have access to a global pool of talent for a one-of-a-kind event.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={artist1Img} alt="Immersive Experiences" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Immersive<br /><em>Experiences</em></h2>
            <p className="sp-zz-text">We don't just provide performances — we create immersive, interactive experiences that engage your guests. From curated artist ensembles to personalized dynamic acts, every detail is tailored to your event's theme and atmosphere.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">Every performance we curate is designed to become a cherished memory for you and your guests.</p>
        </div>
      </section>
    </main>
  )
}

export function SoundSystemPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Sound &amp; Stage</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Crystal-Clear <em>Sound.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Our sound system services are designed to elevate your wedding experience with exceptional audio and stunning visual elements that ensure every moment is amplified beautifully.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={sound1Img} alt="Premium Audio & Visual Setup" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Premium Audio &amp;<br /><em>Visual Setup</em></h2>
            <p className="sp-zz-text">We provide high-quality audio equipment tailored to your venue, ensuring crystal-clear sound for speeches, music, and announcements. Every seat in the house hears every word and note perfectly.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={sound2Img} alt="Professional Stage & Technical Support" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Professional Stage &amp;<br /><em>Technical Support</em></h2>
            <p className="sp-zz-text">For performances, we set up a dedicated stage that provides an ideal platform for your chosen artists. Our experienced technicians manage setup and operation, allowing you to relax and enjoy your special day.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">With our comprehensive sound and lighting solutions, every moment of your celebration will be amplified beautifully.</p>
        </div>
      </section>
    </main>
  )
}

export function LogisticsPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">

      {/* Page header */}
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Transportation &amp; Logistics</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Seamless <em>Journeys,</em><br />Flawless <em>Arrivals.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Event planners meticulously manage every logistical detail to ensure a seamless experience for wedding guests. From handling visa arrangements and booking flights to coordinating local transfers, we leave no stone unturned.
          </p>
        </div>
      </section>

      {/* Zigzag rows */}
      <div className="sp-zigzag">

        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={logiImg} alt="Comprehensive Travel Coordination" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">
              Comprehensive<br />
              <em>Travel Coordination</em>
            </h2>
            <p className="sp-zz-text">Our team works diligently to ensure that every guest, whether local or international, is cared for from the moment they begin their journey to the wedding. We carefully plan and organize transportation options, ensuring that guests can move effortlessly between venues, hotels, and other wedding-related locations.</p>
          </div>
        </div>

        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={logi2Img} alt="Premium Transportation Fleet" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">
              Premium<br />
              <em>Transportation Fleet</em>
            </h2>
            <p className="sp-zz-text">We pride ourselves on offering a comprehensive transportation solution for your wedding, with our own fleet strategically located across India and an extensive network of partners both locally and internationally. Our dedicated logistics team operates around the clock.</p>
          </div>
        </div>

        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={logi3Img} alt="Varied Transportation Options" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">
              Varied<br />
              <em>Transportation Options</em>
            </h2>
            <p className="sp-zz-text">From elegant airport transfers to stylish sprinters and buses, we accommodate groups of any size, ensuring everyone arrives on time and in comfort. For a touch of glamour, we offer vintage cars that add a charming, classic vibe to your special day, or luxury sports cars that bring an exhilarating flair.</p>
          </div>
        </div>

      </div>

      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">Let us handle the details, so you can focus on creating unforgettable memories with your loved ones.</p>
        </div>
      </section>

    </main>
  )
}

export function InvitationsPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Invitations &amp; Gifting</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Memorable <em>Gestures.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Every gift and invitation is a reflection of your love and gratitude. We craft thoughtful, personalised experiences that make every guest feel truly celebrated.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={g1Img} alt="Custom Gifting Experiences" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Custom<br /><em>Gifting Experiences</em></h2>
            <p className="sp-zz-text">We specialize in creating memorable gifting experiences that perfectly align with the aesthetic of your wedding. Our services include designing and sourcing custom gifts, with interactive gifting stations where guests can choose their own.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={g2Img} alt="Thoughtful Guest Amenities" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Thoughtful<br /><em>Guest Amenities</em></h2>
            <p className="sp-zz-text">Our welcome hampers are curated to make your guests feel special upon arrival, featuring a selection of treats and essentials. We also provide weather-related accessories and comfort items to keep guests comfortable throughout the day.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={g3Img} alt="Coordinated Gift Services" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Coordinated<br /><em>Gift Services</em></h2>
            <p className="sp-zz-text">Our team arranges daily gift room drops, delivering thoughtful surprises to your guests while they enjoy the festivities. With coordinated gift packaging and attention to detail, we create a seamless gifting experience.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">Every detail we curate is a token of your appreciation, making your guests feel as special as the occasion itself.</p>
        </div>
      </section>
    </main>
  )
}

export function VenueBookingPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Venue Booking</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            The Perfect <em>Setting.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            From heritage palaces to beachfront resorts, we have access to Rajasthan's most stunning venues. Our network spans India's premier wedding destinations, ensuring the perfect backdrop for your celebration.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={rajImg} alt="Heritage Palaces Jodhpur" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Heritage<br /><em>Palaces</em></h2>
            <p className="sp-zz-text">Step into royalty with our curated selection of maharaja palaces and historic havelis. These timeless venues offer unmatched grandeur, intricate architecture, and an atmosphere of regal elegance that transforms your wedding into a royal affair.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={udaipurImg} alt="Garden and Outdoor Estates Udaipur" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Garden &amp;<br /><em>Outdoor Estates</em></h2>
            <p className="sp-zz-text">For couples who dream of open-air celebrations, our garden venues offer lush surroundings, manicured lawns, and the natural beauty of Rajasthan's landscape as the perfect backdrop for your ceremony and reception.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={jaipurImg} alt="Luxury Resorts and Hotels Jaipur" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Luxury Resorts &amp;<br /><em>Hotels</em></h2>
            <p className="sp-zz-text">Modern luxury meets timeless elegance at our partner resorts and hotels. With world-class amenities, dedicated event spaces, and experienced hospitality teams, these venues ensure your guests are pampered throughout the celebration.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={jodhpurImg} alt="Customized Venue Setup Jodhpur" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 04</span>
            <h2 className="sp-zz-heading">Customized<br /><em>Venue Setup</em></h2>
            <p className="sp-zz-text">We transform any space into your dream wedding venue. From floral archways to custom lighting rigs, draping and decor, our team works with every venue to maximize its potential and bring your unique vision to life.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">With our extensive network and local expertise, we'll help you discover the perfect venue that matches your vision, budget, and guest count — making your dream wedding a reality.</p>
        </div>
      </section>
      <Inquiry />
    </main>
  )
}

export function CorporateEventsPage() {
  useReveal()
  return (
    <main className="sp-zigzag-main">
      <section className="sp-zz-header">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Corporate Events</span>
          <h1 className="sp-zz-page-title reveal stagger-1">
            Events that <em>Inspire.</em>
          </h1>
          <p className="sp-zz-page-intro reveal stagger-2">
            Event Planner skillfully orchestrates corporate events, handling every aspect from décor and entertainment to catering and award ceremonies with flawless execution that aligns with your brand identity.
          </p>
        </div>
      </section>
      <div className="sp-zigzag">
        <div className="sp-zz-row reveal">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={corp1Img} alt="Strategic Corporate Décor" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 01</span>
            <h2 className="sp-zz-heading">Strategic<br /><em>Corporate Décor</em></h2>
            <p className="sp-zz-text">Corporate event décor should reflect the company's brand and event theme. From elegant centerpieces to branded backdrops, the design strikes a balance between professionalism and creativity.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={corp2Img} alt="Prestigious Award Ceremonies" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 02</span>
            <h2 className="sp-zz-heading">Prestigious<br /><em>Award Ceremonies</em></h2>
            <p className="sp-zz-text">We design a prestigious atmosphere that celebrates achievements. We manage everything from staging and lighting to the timing of speeches and awards, ensuring a memorable and seamless ceremony.</p>
          </div>
        </div>
        <div className="sp-zz-row reveal stagger-2">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={corpJpgImg} alt="Curated Entertainment" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 03</span>
            <h2 className="sp-zz-heading">Curated<br /><em>Entertainment</em></h2>
            <p className="sp-zz-text">Whether it's live music, comedians, motivational speakers, or interactive activities, we curate acts that engage the audience while keeping the tone appropriate and aligned with your event's objectives.</p>
          </div>
        </div>
        <div className="sp-zz-row sp-zz-row-rev reveal stagger-1">
          <div className="sp-zz-visual">
            <img className="sp-zz-img" src={corp4Img} alt="Professional Catering" />
          </div>
          <div className="sp-zz-body">
            <span className="eyebrow no-line">Service 04</span>
            <h2 className="sp-zz-heading">Professional<br /><em>Catering</em></h2>
            <p className="sp-zz-text">Catering at corporate events should reflect quality and professionalism. We coordinate menus — whether formal dining, buffets, or cocktail-style events — ensuring all dietary preferences are accommodated with excellence.</p>
          </div>
        </div>
      </div>
      <section className="sp-zz-footer">
        <div className="container">
          <p className="service-closing reveal">With a focus on professionalism and attention to detail, we craft unforgettable, seamless events that make a lasting positive impact on all attendees.</p>
        </div>
      </section>
    </main>
  )
}

export function GalleryPage() {
  return (
    <main>
      <section className="service-page">
        <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>Coming Soon</span>
          <h1 className="service-page-title">Gallery</h1>
          <p className="body-l" style={{ maxWidth: '40ch', margin: '0 auto' }}>
            Our gallery is being curated. Check back soon to explore our portfolio of stunning celebrations.
          </p>
        </div>
      </section>
    </main>
  )
}

const BLOGGER_HOME = 'https://weddingorganiserjodhpur.blogspot.com'

const BLOGGER_FEED_ALL = 'https://weddingorganiserjodhpur.blogspot.com/feeds/posts/default?alt=json&max-results=50'

const STATIC_POSTS_PAGE = [
  {
    tag: 'Destination Wedding',
    title: 'Why Jodhpur is the Perfect Destination Wedding Location in Rajasthan',
    url: 'https://weddingorganiserjodhpur.blogspot.com/2026/06/httpswww.eventplannerjodhpur.com.html',
    img: rajImg,
    summary: 'Every couple dreams of a wedding that feels magical — where the venue, the décor, the ambience, and the memories all come together seamlessly. Jodhpur, the Blue City of Rajasthan, offers exactly that.',
    date: '5 June 2026',
  },
  {
    tag: 'Trends',
    title: 'Wedding Trends In 2026',
    url: 'https://weddingorganiserjodhpur.blogspot.com/2026/05/wedding-trends-in-2026.html',
    img: trendImg,
    summary: '2026 weddings emphasize cinematic storytelling, intimate guest experiences, and heritage venues. Couples are choosing personalized details over generic décor, and multi-day celebrations are back in full swing.',
    date: '15 May 2026',
  },
  {
    tag: 'Planning Tips',
    title: 'How to Plan the Perfect Rajasthani Wedding from Abroad',
    url: BLOGGER_HOME,
    img: blogImg,
    summary: 'Planning a destination wedding in Rajasthan while living abroad may seem daunting, but with the right event planner by your side, every detail — from venue booking to vendor coordination — falls perfectly into place.',
    date: '',
  },
]

function extractThumbPage(entry) {
  const raw = entry['media$thumbnail']?.url
  if (raw) return raw.replace(/\/s\d+(-c)?\//, '/s1600/')
  const content = entry.content?.$t || entry.summary?.$t || ''
  const m = content.match(/<img[^>]+src="([^"]+)"/)
  return m ? m[1] : null
}

export function BlogPage() {
  useReveal()
  const [posts, setPosts] = useState(STATIC_POSTS_PAGE)
  const [fetchFailed, setFetchFailed] = useState(false)

  useEffect(() => {
    fetch(BLOGGER_FEED_ALL)
      .then(r => r.json())
      .then(feed => {
        const entries = feed?.feed?.entry || []
        if (entries.length === 0) { setPosts(STATIC_POSTS_PAGE); return }
        setPosts(entries.map(e => ({
          tag: e.category?.[0]?.term || 'Blog',
          title: e.title?.$t || '',
          url: e.link?.find(l => l.rel === 'alternate')?.href || BLOGGER_HOME,
          img: (() => {
            const raw = e['media$thumbnail']?.url
            if (raw) return raw.replace(/\/s\d+(-c)?\//, '/s1600/')
            const m = (e.content?.$t || '').match(/<img[^>]+src="([^"]+)"/)
            return m ? m[1] : null
          })(),
          summary: (e.summary?.$t || e.content?.$t || '')
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
            .trim().replace(/\s+/g, ' ').slice(0, 160),
          date: e.published?.$t
            ? new Date(e.published.$t).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
        })))
      })
      .catch(() => { setFetchFailed(true); setPosts(STATIC_POSTS_PAGE) })
  }, [])

  const displayPosts = posts

  return (
    <main>
      <section className="blog-page-hero">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>From the blog</span>
          <h1 className="reveal stagger-1" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(42px,6vw,80px)', textAlign: 'center', marginTop: 16 }}>
            Stories &amp; <span className="ital">Insights.</span>
          </h1>
          <p className="body-l reveal stagger-2" style={{ textAlign: 'center', maxWidth: '44ch', margin: '20px auto 0' }}>
            Behind-the-scenes, wedding tips, and inspiration from Event Planner Jodhpur.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px', background: 'var(--paper)' }}>
        <div className="container">
          {displayPosts === null ? (
            /* Loading skeleton */
            <div className="blog-grid">
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className="blog-card blog-card-skeleton">
                  <div className="blog-card-img" style={{ background: 'var(--cream-2)' }} />
                  <div className="blog-card-body">
                    <div className="skel-line" style={{ width: '40%', marginBottom: 12 }} />
                    <div className="skel-line" style={{ width: '90%', marginBottom: 6 }} />
                    <div className="skel-line" style={{ width: '70%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="blog-grid">
              {displayPosts.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card blog-card-fadein"
                  style={{ animationDelay: (i % 6) * 0.07 + 's' }}
                >
                  <div className="blog-card-img">
                    {p.img
                      ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <div className="bp-placeholder">Blog image</div>
                    }
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-tag">{p.tag}</span>
                    <div className="blog-card-title">{p.title}</div>
                    {p.summary && <p className="body-s" style={{ marginBottom: 12, lineHeight: 1.5 }}>{p.summary}</p>}
                    {p.date && <div className="blog-card-date">{p.date}</div>}
                    <span className="blog-card-read">Read more →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export function ContactPage() {
  useReveal()
  return (
    <main>
      <Inquiry />
    </main>
  )
}

const DESTINATIONS = [
  {
    id: 'd1',
    name: 'Jodhpur',
    subtitle: 'The Blue City',
    description: 'Renowned for majestic palaces, historic forts, and vibrant Rajasthani culture. Features iconic venues like Umaid Bhawan Palace and Mehrangarh Fort set against the Thar Desert landscape with distinctive blue cityscape architecture.',
    venues: ['Umaid Bhawan Palace', 'Mehrangarh Fort', 'Raas Jodhpur', 'Ajit Bhawan'],
    img: jodhpurImg,
  },
  {
    id: 'd2',
    name: 'Udaipur',
    subtitle: 'City of Lakes',
    description: 'Known as "City of Lakes" with breathtaking palaces, serene lakes, and venues including Lake Palace, City Palace, and Jagmandir Island Palace surrounded by tranquil waters and scenic hills.',
    venues: ['Lake Palace', 'City Palace', 'Jagmandir Island Palace', 'Fateh Garh'],
    img: udaipurImg,
  },
  {
    id: 'd3',
    name: 'Jaipur',
    subtitle: 'The Pink City',
    description: 'Called "Pink City," featuring City Palace, Rambagh Palace, and Amer Fort offering historical charm and opulence with excellent accessibility and accommodation options.',
    venues: ['Rambagh Palace', 'City Palace', 'Amer Fort', 'Samode Palace'],
    img: jaipurImg,
  },
  {
    id: 'd4',
    name: 'Jaisalmer',
    subtitle: 'The Golden City',
    description: 'Known as "Golden City" with exotic desert charm, sandstone forts, and venues like Suryagarh. Experience desert safaris and camel rides woven into your celebration.',
    venues: ['Suryagarh', 'Jaisalmer Fort', 'Nachana Haveli', 'Desert Camps'],
    img: jaisalmerImg,
  },
  {
    id: 'd5',
    name: 'Pushkar',
    subtitle: 'Sacred & Serene',
    description: 'Serene town offering spiritual ambiance around Pushkar Lake with heritage hotels like Pushkar Palace and Bhanwar Singh Palace for intimate and meaningful celebrations.',
    venues: ['Pushkar Palace', 'Bhanwar Singh Palace', 'The Westin Pushkar', 'Ananta Spa & Resorts'],
    img: pushkarImg,
  },
]

export function DestinationPage() {
  useReveal()
  return (
    <main>
      {/* Hero */}
      <section className="dest-hero">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Destination Weddings</span>
          <h1 className="reveal stagger-1">Dream <span className="ital">Destinations.</span></h1>
          <p className="body-l reveal stagger-2">
            "Love knows no borders — celebrate your forever in a dream destination."
          </p>
        </div>
      </section>

      {/* Alternating image + text rows */}
      <section className="dest-rows-section">
        {DESTINATIONS.map((d, i) => (
          <div key={d.id} className={'dest-row reveal' + (i % 2 === 1 ? ' dest-row-reverse' : '')}>
            <div className="dest-row-img">
              {d.img
                ? <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                : <div className="dest-img-placeholder">{d.name}</div>
              }
            </div>
            <div className="dest-row-body">
              <h2 className="dest-row-name">{d.name}</h2>
              <div className="dest-row-divider" />
              <p className="dest-row-desc">{d.description}</p>
              <div className="dest-venues">
                {d.venues.map(v => (
                  <span key={v} className="dest-venue-chip">{v}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Services strip */}
      <section className="dest-services-strip">
        <div className="container">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>We Handle Everything</span>
          <div className="dest-services-row reveal stagger-1">
            {['Haldi & Mehandi', 'Sangeet', 'Mandap', 'Reception', 'Corporate Events'].map(s => (
              <div key={s} className="dest-service-item">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <Inquiry />
    </main>
  )
}
