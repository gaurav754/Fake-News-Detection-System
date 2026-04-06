import './AboutPage.css'

const team = [
  { name: 'Divyansh Pathak', role: 'Full Stack Developer' },
  { name: 'Gorav Chauhan', role: 'ML Engineer' },
  { name: 'Gaurav Vishwakarma', role: 'Full Stack Developer' },
  { name: 'Gunjan Sharma', role: 'UI/UX Designer' },
]

const techs = ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Python', 'NLP', 'Transformers']

const steps = [
  { num: '01', emoji: '🔗', title: 'Input News URL', tag: 'Step 1', desc: 'Paste any news article URL or raw text — our system accepts both formats instantly.' },
  { num: '02', emoji: '🤖', title: 'AI/ML Processing', tag: 'Step 2', desc: 'Advanced NLP models scan language patterns, writing style, and source credibility signals.' },
  { num: '03', emoji: '🧾', title: 'Real / Fake Verdict', tag: 'Step 3', desc: 'The model delivers a clear verdict — Real ✅ or Fake ❌ — with zero ambiguity.' },
  { num: '04', emoji: '📈', title: 'Confidence Score', tag: 'Step 4', desc: 'A precise confidence percentage tells you exactly how certain the AI is about its prediction.' },
]

const features = [
  { icon: '🎯', title: 'Accurate Detection', desc: 'High-precision AI model trained on large datasets.' },
  { icon: '⚡', title: 'Instant Results', desc: 'Get predictions in seconds, not minutes.' },
  { icon: '📊', title: 'Confidence Score', desc: 'Know how confident the model is in its prediction.' },
  { icon: '📜', title: 'User History', desc: 'Track all your previously analyzed articles.' },
  { icon: '🧠', title: 'Dataset Training', desc: 'Trained on thousands of verified real and fake news samples.' },
]

const whyUs = [
  { icon: '✅', title: 'High Accuracy', desc: '98% accuracy rate on benchmark datasets.' },
  { icon: '🚀', title: 'Fast Processing', desc: 'Results delivered in under 2 seconds.' },
  { icon: '🖥️', title: 'User-Friendly UI', desc: 'Clean, intuitive interface for all users.' },
  { icon: '🔴', title: 'Real-Time Predictions', desc: 'Live analysis with up-to-date model inference.' },
]

function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-badge">🛡️ Powered by AI & NLP</div>
          <h1>About Our <span className="about-highlight">Fake News Detection</span> System</h1>
          <p>We leverage cutting-edge Artificial Intelligence and Natural Language Processing to help users identify misinformation and make informed decisions in the digital age.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <div className="section-header">
          <h2>Mission & Vision</h2>
          <p>What drives us forward every day</p>
        </div>
        <div className="two-col-grid">
          <div className="glass-card mv-card">
            <div className="mv-top">
              <span className="mv-sticker">🎯</span>
              <span className="mv-label">Our Mission</span>
            </div>
            <h3 className="mv-title">Detect. Verify. <span className="mv-accent">Protect.</span></h3>
            <p className="mv-desc">We detect fake news quickly and accurately using advanced AI — empowering every user to cut through misinformation and access the truth in real time.</p>
            <div className="mv-pills">
              <span>⚡ Real-time</span>
              <span>🧠 AI-Powered</span>
              <span>🔍 Accurate</span>
            </div>
          </div>
          <div className="glass-card mv-card">
            <div className="mv-top">
              <span className="mv-sticker">🌍</span>
              <span className="mv-label">Our Vision</span>
            </div>
            <h3 className="mv-title">A Safer <span className="mv-accent">Digital World.</span></h3>
            <p className="mv-desc">We envision a world where every person has access to tools that protect them from misinformation — building a trustworthy, informed, and resilient digital society.</p>
            <div className="mv-pills">
              <span>🌐 Global Reach</span>
              <span>🤝 Trustworthy</span>
              <span>🛡️ Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Four simple steps to verify any news article</p>
        </div>
        <div className="four-col-grid">
          {steps.map((s) => (
            <div className="glass-card step-card" key={s.num}>
              <div className="step-tag">{s.tag}</div>
              <div className="step-emoji">{s.emoji}</div>
              <div className="step-number">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="about-section">
        <div className="section-header">
          <h2>Technologies Used</h2>
          <p>The stack powering our detection engine</p>
        </div>
        <div className="tech-badges">
          {techs.map((t) => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="about-section">
        <div className="section-header">
          <h2>Key Features</h2>
          <p>Everything you need for reliable news verification</p>
        </div>
        <div className="three-col-grid">
          {features.map((f) => (
            <div className="glass-card feature-card" key={f.title}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <div className="section-header">
          <h2>Meet the Team</h2>
          <p>The people behind the platform</p>
        </div>
        <div className="four-col-grid">
          {team.map((m) => (
            <div className="glass-card team-card" key={m.name}>
              <div className="team-avatar">{m.name.charAt(0)}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>What sets us apart from the rest</p>
        </div>
        <div className="two-col-grid">
          {whyUs.map((w) => (
            <div className="glass-card why-card" key={w.title}>
              <span className="why-icon">{w.icon}</span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="about-footer-content">
          <p>📧 <a href="mailto:contact@fakenewsdetector.com">contact@fakenewsdetector.com</a></p>
          <p>🐙 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repository</a></p>
          <p className="footer-copy">© {new Date().getFullYear()} Fake News Detection System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default AboutPage
