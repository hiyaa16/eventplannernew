/* Event Planner — Photo-driven sections & social proof
   Hero collage, ceremony categories, films, IG feed, Google reviews, WhatsApp float
   Uses simple labeled placeholders (no drag-drop) so the structure reads clearly. */

const { useEffect: useEffectEX, useRef: useRefEX, useState: useStateEX } = React;

/* Simple labeled placeholder block. Tint selects palette gradient.
   ratio sets aspect-ratio (e.g. "4/5"). */
function Placeholder({ label, tint = 'tint-default', ratio, fill }) {
  const style = {};
  if (ratio) style.aspectRatio = ratio;
  if (fill) { style.position = 'absolute'; style.inset = 0; }
  return (
    <div className={"ph " + tint} style={style}>
      <div className="ph-inner">
        <span className="ph-marker">[ photo ]</span>
        <span className="ph-label">{label}</span>
      </div>
    </div>
  );
}

/* ---------- HERO with photo collage placeholders ---------- */
function HeroPhoto() {
  return (
    <section className="hero hero-photo" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-rays"></div>
      </div>
      <window.ParticleField count={42} />
      <window.FogOverlay />

      <div className="container hero-photo-container">
        <div className="hero-eyebrow-row">
          <span className="eyebrow">Bespoke Weddings &amp; Celebrations</span>
          <span className="eyebrow no-line">Udaipur · Jodhpur · Florence</span>
        </div>

        <div className="hero-collage">
          <div className="hero-photo-main">
            <Placeholder label="Couple portrait — hero" tint="tint-rose" fill />
            <div className="hero-photo-tag">
              <span className="tag-num">01</span>
              <span className="tag-text">The Mehndi · Tuscany, 2025</span>
            </div>
          </div>
          <div className="hero-photo-side hero-photo-side-1">
            <Placeholder label="Florals or decor detail" tint="tint-bronze" fill />
          </div>
          <div className="hero-photo-side hero-photo-side-2">
            <Placeholder label="Candid guest moment" tint="tint-plum" fill />
          </div>

          <div className="hero-stamp hero-stamp-1">
            <span className="serif">est.</span><br/>
            <span className="big">2014</span>
          </div>
          <div className="hero-stamp hero-stamp-2">
            <span className="ital">— since</span><br/>
            <span className="big">11 yrs</span>
          </div>
        </div>

        <h1 className="hero-headline display hero-headline-photo">
          <div className="hero-line">
            <window.CinematicText delay={0.2}>Designing moments</window.CinematicText>
          </div>
          <div className="hero-line">
            <window.CinematicText delay={0.7} className="ital-line">that linger.</window.CinematicText>
          </div>
        </h1>

        <div className="hero-cta-row">
          <a href="#inquiry" className="btn-primary">
            <span>Begin an enquiry</span>
            <span className="arrow">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="#films" className="btn-ghost">
            <span className="play-circle">
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1L9 5L2 9V1Z" fill="currentColor"/></svg>
            </span>
            Watch our films
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <div className="label">Weddings</div>
            <div className="value"><Counter to={240} suffix="+" /><span className="small">Composed since 2014</span></div>
          </div>
          <div>
            <div className="label">Cities</div>
            <div className="value">Jodhpur · Udaipur<span className="small">Florence · Antibes</span></div>
          </div>
          <div>
            <div className="label">Google</div>
            <div className="value">★ 4.9 / 5<span className="small">Across 180+ reviews</span></div>
          </div>
          <div>
            <div className="label">Currently</div>
            <div className="value">Booking 2026<span className="small">Limited dates</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CEREMONY CATEGORIES (large cards) ---------- */
function Categories() {
  const items = [
    { name: 'Haldi & Mehandi', tag: 'Day · Courtyard',     tint: 'tint-mustard',  ph: 'Haldi photo' },
    { name: 'Sangeet',          tag: 'Night · Stage',        tint: 'tint-plum',     ph: 'Sangeet photo' },
    { name: 'Mandap',           tag: 'Sunset · Pheras',      tint: 'tint-bronze',   ph: 'Mandap photo' },
    { name: 'Reception',        tag: 'Black-tie · Dinner',   tint: 'tint-charcoal', ph: 'Reception photo' },
    { name: 'Corporate',        tag: 'Conferences · Galas',  tint: 'tint-olive',    ph: 'Corporate event photo' },
    { name: 'Destination',      tag: 'Overseas · End-to-end',tint: 'tint-rose',     ph: 'Destination wedding photo' },
  ];
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories-head">
          <span className="eyebrow reveal">Every ceremony, in its right voice</span>
          <h2 className="reveal stagger-1">
            From <span className="ital">Haldi</span> to <span className="ital">Vidaai</span>,
            <br/>and every chapter between.
          </h2>
          <p className="body-m reveal stagger-2">
            Six distinct disciplines, one studio. Choose any one — or trust us with the whole arc.
          </p>
        </div>

        <div className="categories-grid">
          {items.map((it, i) => (
            <a href="#inquiry" key={it.name} className={"cat-card reveal " + it.tint} style={{ transitionDelay: (i % 3) * 0.08 + 's' }}>
              <div className="cat-img">
                <Placeholder label={it.ph} tint={it.tint} fill />
              </div>
              <div className="cat-body">
                <div className="cat-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{it.name}</h3>
                <span className="cat-tag">{it.tag}</span>
                <div className="cat-arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- YOUTUBE FILMS section ---------- */
function Films() {
  const films = [
    { title: 'A Riad in Marrakech',       couple: 'Mariam & Sebastián', minutes: '4:12', ph: 'Marrakech film thumbnail', tint: 'tint-bronze' },
    { title: 'The Mandap at Cetinale',    couple: 'Sofia & Lorenzo',    minutes: '3:48', ph: 'Mandap film thumbnail',    tint: 'tint-rose' },
    { title: 'Cliffside Vows',            couple: 'Hana & Auguste',     minutes: '5:02', ph: 'Cliffside film thumbnail',  tint: 'tint-olive' },
    { title: 'Lake Como at First Light',  couple: 'Yuki & Henrik',      minutes: '4:33', ph: 'Lake Como film thumbnail',  tint: 'tint-plum' },
  ];
  const [open, setOpen] = useStateEX(null);
  return (
    <section className="films" id="films">
      <div className="container">
        <div className="films-head">
          <div>
            <span className="eyebrow reveal">Wedding films</span>
            <h2 className="reveal stagger-1">
              The day, <span className="ital">held in light.</span>
            </h2>
          </div>
          <p className="body-m reveal stagger-2" style={{ maxWidth: '34ch' }}>
            Cinematography led by Aman Studios. Films you'll rewatch on every anniversary —
            and so will your grandchildren.
          </p>
        </div>

        <div className="films-grid">
          {films.map((f, i) => (
            <button
              key={f.title}
              className={"film-card reveal stagger-" + (i + 1)}
              onClick={() => setOpen(f)}
            >
              <div className="film-thumb">
                <Placeholder label={f.ph} tint={f.tint} fill />
                <div className="film-play">
                  <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3L17 10L5 17V3Z" fill="currentColor"/></svg>
                </div>
                <span className="film-runtime">{f.minutes}</span>
              </div>
              <div className="film-meta">
                <span className="film-couple">{f.couple}</span>
                <h3>{f.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <a href="#" className="films-more reveal">
          View all 24 films
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 12 }}>
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {open && (
        <div className="film-modal" onClick={() => setOpen(null)}>
          <div className="film-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="film-close" onClick={() => setOpen(null)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
            <div className="film-modal-video">
              <div className="film-modal-placeholder">
                <span className="serif ital">Wedding film</span>
                <span className="film-modal-title">{open.title}</span>
                <span className="film-modal-couple">{open.couple} · {open.minutes}</span>
                <span className="film-modal-note">[ YouTube/Vimeo embed goes here ]</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- INSTAGRAM FEED section ---------- */
function InstagramFeed() {
  const posts = [
    { ph: 'IG 01 — Marigold canopy',   likes: '2.4k', tag: 'Sangeet · Udaipur',  tint: 'tint-bronze' },
    { ph: 'IG 02 — Palace stairs',     likes: '3.1k', tag: 'Reception · Jodhpur',tint: 'tint-rose' },
    { ph: 'IG 03 — Parasols',          likes: '1.8k', tag: 'Mandap · Jaipur',    tint: 'tint-mustard' },
    { ph: 'IG 04 — Henna laughter',    likes: '2.7k', tag: 'Mehndi · Jodhpur',   tint: 'tint-plum' },
    { ph: 'IG 05 — Courtyard dinner',  likes: '1.6k', tag: 'Welcome · Tuscany',  tint: 'tint-olive' },
    { ph: 'IG 06 — Dawn vidaai',       likes: '4.2k', tag: 'Vidaai · Pushkar',   tint: 'tint-charcoal' },
  ];
  return (
    <section className="instagram" id="instagram">
      <div className="container">
        <div className="ig-head">
          <div className="reveal">
            <span className="eyebrow">@eventplanner</span>
            <h2>Meanwhile, <span className="ital">on Instagram.</span></h2>
          </div>
          <a href="#" className="ig-follow reveal stagger-1">
            Follow the studio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 10 }}>
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="ig-grid">
          {posts.map((p, i) => (
            <div key={p.ph} className="ig-tile reveal" style={{ transitionDelay: (i % 3) * 0.06 + 's' }}>
              <Placeholder label={p.ph} tint={p.tint} fill />
              <div className="ig-overlay">
                <span className="ig-likes">
                  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 12s-4-2.5-4-6a2.5 2.5 0 0 1 4-2 2.5 2.5 0 0 1 4 2c0 3.5-4 6-4 6Z" fill="currentColor"/></svg>
                  {p.likes}
                </span>
                <span className="ig-caption">{p.ph}</span>
                <span className="ig-tag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GOOGLE REVIEWS section ---------- */
function GoogleReviews() {
  const reviews = [
    {
      name: 'Anushka Mahar', initials: 'AM', stars: 5,
      time: '3 months ago · Local Guide',
      text: 'Thank you for all your help to make my sister\'s wedding beautiful. Your positive attitude and care for every detail meant everything — we would have been completely lost without you.',
    },
    {
      name: 'Shailesh Purohit', initials: 'SP', stars: 5,
      time: '8 months ago',
      text: 'A monsoon-month event managed flawlessly. Pains-taking, flexible, calm under pressure. Whatever challenges came up, the team resolved them faster than we could ask.',
    },
    {
      name: 'Gajendra Lodha', initials: 'GL', stars: 5,
      time: '1 year ago',
      text: 'My daughter\'s three-day wedding — Mehandi, Haldi, ceremony and reception — was executed beautifully. Coordination with the venue, the timeline, the family… everything as expected and more.',
    },
    {
      name: 'Vijay Daga', initials: 'VD', stars: 5,
      time: '1 year ago · Local Guide',
      text: 'A professional team with a friendly, personal approach. Each arrangement was beautifully and smoothly executed. We personally recommend them. Five stars.',
    },
  ];
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-head">
          <div className="reviews-head-left reveal">
            <span className="eyebrow">In their words</span>
            <h2>What couples say <span className="ital">on Google.</span></h2>
          </div>
          <div className="reviews-rating reveal stagger-1">
            <div className="g-badge">
              <span className="g-logo" aria-hidden="true">G</span>
              <span className="g-text">Google Reviews</span>
            </div>
            <div className="g-score">
              <span className="g-num">4.9</span>
              <span className="g-stars">
                {[0,1,2,3,4].map(i => <Star key={i} filled={true} />)}
              </span>
            </div>
            <span className="g-count">Based on 184 reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={r.name} className="review-card reveal" style={{ transitionDelay: (i % 2) * 0.08 + 's' }}>
              <div className="review-top">
                <div className="review-avatar">{r.initials}</div>
                <div className="review-who">
                  <div className="review-name">{r.name}</div>
                  <div className="review-time">{r.time}</div>
                </div>
                <div className="review-g" aria-hidden="true">G</div>
              </div>
              <div className="review-stars">
                {Array.from({length: 5}).map((_, i) => <Star key={i} filled={i < r.stars} />)}
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>

        <a href="#" className="reviews-more reveal">
          Read all 184 reviews on Google
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 12 }}>
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

function Star({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1">
      <path d="M7 1.5L8.6 5l3.9.4-2.9 2.7.8 3.9L7 10l-3.4 2 .8-3.9L1.5 5.4l3.9-.4L7 1.5Z" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- Fixed floating contact buttons ---------- */
function FloatingContact() {
  return (
    <div className="float-contact" aria-label="Quick contact">
      <a
        href="https://wa.me/919602197777?text=Hello!%20I%27d%20like%20to%20enquire%20about%20a%20wedding."
        target="_blank"
        rel="noopener"
        className="float-btn float-whatsapp"
        aria-label="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.884-.788-1.481-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
        </svg>
        <span className="float-label">WhatsApp</span>
      </a>
      <a
        href="tel:+919602197777"
        className="float-btn float-call"
        aria-label="Call"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
        <span className="float-label">Call</span>
      </a>
    </div>
  );
}

Object.assign(window, {
  HeroPhoto, Categories, Films, InstagramFeed, GoogleReviews, FloatingContact, Placeholder,
});
