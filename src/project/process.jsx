export function Process() {
  const steps = [
    {
      n: 'I', title: ['Initial', 'Consultation'],
      body: 'We meet with you to understand your vision, budget, guest count, and event type. We listen to your story, your preferences, and your expectations for the perfect celebration.'
    },
    {
      n: 'II', title: ['Planning &', 'Design'],
      body: 'Our team develops comprehensive plans covering venue, catering, decor, entertainment, and logistics. We present detailed proposals and timelines to bring your vision to life.'
    },
    {
      n: 'III', title: ['Coordination &', 'Execution'],
      body: 'We manage all vendor relationships, contracts, and logistics. Our team coordinates every detail across multiple events in the wedding sequence or corporate function.'
    },
    {
      n: 'IV', title: ['Event', 'Management'],
      body: "We oversee the complete execution on your event day. From setup through final moments, our team ensures everything runs flawlessly so you can focus on celebrating."
    },
  ]
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-head">
          <div>
            <span className="eyebrow">Our Process</span>
            <h2 className="reveal">Four stages of <span className="ital">seamless coordination.</span></h2>
          </div>
          <p className="intro reveal stagger-1">
            We work methodically and thoughtfully. Each decision is deliberate, every detail matters,
            and the result is an event that exceeds your expectations.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={s.n} style={{ transitionDelay: (i * 0.08) + 's' }}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title[0]} {s.title[1] && <span className="ital">{s.title[1]}</span>}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
