import { useState } from 'react'
import './ContactPage.css'

const faqs = [
  {
    q: 'How accurate is the fake news detection?',
    a: 'Our AI model achieves 98% accuracy on benchmark datasets, trained on thousands of verified real and fake news samples.',
  },
  {
    q: 'What types of content can I analyze?',
    a: 'You can paste raw news text or submit a URL. Our system supports articles, headlines, and social media posts.',
  },
  {
    q: 'Is my data stored or shared?',
    a: 'No. We do not store or share any content you submit. All analysis is done in real-time and discarded immediately.',
  },
  {
    q: 'How do I report a bug or issue?',
    a: 'Use the "Report Issue" button in the Support section below, or email us directly at support@fakenewsdetector.com.',
  },
]

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-badge">💬 We're here to help</div>
          <h1>Get In <span className="contact-highlight">Touch</span></h1>
          <p>Have questions, feedback, or just want to say hello? We'd love to hear from you. Our team typically responds within 24 hours.</p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Form */}
          <div className="glass-card contact-form-card">
            <h2 className="form-title">✉️ Send a Message</h2>
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button className="contact-btn" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>👤 Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>📧 Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>📌 Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label>💬 Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." rows={5} required />
                </div>
                <button type="submit" className="contact-btn">🚀 Send Message</button>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="info-col">
            <div className="glass-card info-card">
              <span className="info-icon">📍</span>
              <div>
                <h3>Our Address</h3>
                <p>123 Tech Park, Sector 62<br />Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="glass-card info-card">
              <span className="info-icon">📧</span>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:contact@fakenewsdetector.com">contact@fakenewsdetector.com</a></p>
                <p><a href="mailto:support@fakenewsdetector.com">support@fakenewsdetector.com</a></p>
              </div>
            </div>
            <div className="glass-card info-card">
              <span className="info-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p className="info-sub">Mon – Fri, 9am – 6pm IST</p>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card social-card">
              <h3>🌐 Follow Us</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>🐙</span> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>💼</span> LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>🐦</span> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-section">
        <div className="section-header">
          <h2>📍 Find Us</h2>
          <p>Visit us at our office in Noida, India</p>
        </div>
        <div className="map-wrapper glass-card">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.3654!3d28.6273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM4LjMiTiA3N8KwMjEnNTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="contact-section">
        <div className="section-header">
          <h2>❓ Frequently Asked Questions</h2>
          <p>Quick answers to common questions</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`glass-card faq-item ${openFaq === i ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-question">
                <span>{f.q}</span>
                <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
              </div>
              {openFaq === i && <p className="faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>



      {/* ── Footer ── */}
      <footer className="contact-footer">
        <div className="contact-footer-content">
          <p>📧 <a href="mailto:contact@fakenewsdetector.com">contact@fakenewsdetector.com</a></p>
          <p>🐙 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repository</a></p>
          <p className="footer-copy">© {new Date().getFullYear()} Fake News Detection System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default ContactPage
