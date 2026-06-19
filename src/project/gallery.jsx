export function InstagramSection() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <span className="eyebrow reveal">Meanwhile on Instagram</span>
        <h2 className="reveal stagger-1">Latest from <span className="ital">@event_planner_jdr</span></h2>
        <div className="instagram-embed reveal stagger-2">
          <iframe
            src="https://www.instagram.com/event_planner_jdr/embed"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          ></iframe>
        </div>
        <div className="instagram-cta reveal stagger-3">
          <a href="https://www.instagram.com/event_planner_jdr/" target="_blank" rel="noopener noreferrer" className="cta-link">
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}

export function YouTubeSection() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Wedding Highlights' },
    { id: 'dQw4w9WgXcQ', title: 'Event Coverage' },
    { id: 'dQw4w9WgXcQ', title: 'Client Testimonials' },
  ]
  return (
    <section className="youtube-section">
      <div className="container">
        <span className="eyebrow reveal">Video Gallery</span>
        <h2 className="reveal stagger-1">See our work on <span className="ital">YouTube</span></h2>
        <div className="youtube-grid reveal stagger-2">
          {videos.map((video, i) => (
            <div key={i} className="youtube-card">
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
        <div className="youtube-cta reveal stagger-3">
          <a href="https://www.youtube.com/channel/UCrlwRg5RVAmQagb21KpNa_A/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="cta-link">
            Watch on YouTube →
          </a>
        </div>
      </div>
    </section>
  )
}
