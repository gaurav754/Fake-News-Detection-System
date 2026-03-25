import './HomePage.css'
import heroImage from '../assets/image.png'
import target from '../assets/target.png'
import result from '../assets/results.png'
import community from '../assets/community.png'

function HomePage() {

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Verify News with <span className="hero-highlight">Confidence</span>
          </h1>
          <p>
            Combat misinformation with our advanced AI technology. Analyze any news article or statement in seconds and get accurate credibility scores.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-hero btn-hero-primary" onClick={() => document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </button>
            <button className="btn-hero btn-hero-secondary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>98%</h3>
              <p>Accuracy Rate</p>
            </div>
            <div className="stat-item">
              <h3>1k+</h3>
              <p>Articles Analyzed</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Active Users</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card">
            <img src={heroImage} alt="News Detection" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="features-header">
          <h2>Powerful Features for News Verification</h2>
          <p>Comprehensive AI-driven tools designed to keep you informed and protected from misinformation</p>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon"><img src={target}/></div>
            <h3>Accurate Detection</h3>
            <p>AI-powered analysis to detect fake news with high accuracy across multiple sources and formats.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img src={result}/></div>
            <h3>Instant Results</h3>
            <p>Get real-time verification results in seconds with detailed credibility scores and explanations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img src={community}/></div>
            <h3>Community Reports</h3>
            <p>Help us fight misinformation by reporting fake news spreading in your area</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Submit Content</h3>
            <p>Paste text or provide a URL to the news article</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our AI analyzes content, sources, and patterns</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Results</h3>
            <p>Receive detailed credibility score and insights</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-shapes">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <div className="cta-content">
            <h2>Ready to Fight Misinformation?</h2>
            <p>Join thousands of users who trust our platform for news verification. Start protecting yourself from fake news today with AI-powered detection.</p>
            <div className="cta-buttons">
              <button className="btn-hero btn-hero-primary">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

        </div>
  )
}

export default HomePage
