import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Community.css'

const API = 'https://fake-news-detection-system-backend-qyyf.onrender.com/api/community'

export default function Community() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const userId = user.id
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', description: '', source: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPosts)
      .catch(() => {})
  }, [])

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.description.trim()) e.description = 'Description is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitting(true)
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setErrors({ title: data.message }); return }
      setPosts([data, ...posts])
      setForm({ title: '', description: '', source: '' })
      setShowForm(false)
    } catch {
      setErrors({ title: 'Server error. Try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpvote = async (id) => {
    if (!token) { navigate('/login'); return }
    const res = await fetch(`${API}/${id}/upvote`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.status === 400) return
    const updated = await res.json()
    setPosts(posts.map(p => p._id === id ? updated : p))
  }

  const timeAgo = (date) => {
    const diff = Math.floor((Date.now() - new Date(date)) / 1000)
    if (diff < 60) return `${diff}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
  }

  return (
    <div className="community">
      <div className="comm-header">
        <button className="comm-back" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
        <div>
          <h2>🌐 Community Reports</h2>
          <p>Help others by reporting fake news circulating around you</p>
        </div>
        {token && (
          <button className="comm-report-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? '✕ Cancel' : '+ Report Fake News'}
          </button>
        )}
      </div>

      {!token && (
        <div className="comm-login-notice">
          <span>🔒 <button onClick={() => navigate('/login')}>Login</button> to report fake news</span>
        </div>
      )}

      {showForm && (
        <div className="comm-form-wrap">
          <h3>📢 Report Circulating Fake News</h3>
          <form onSubmit={handleSubmit} className="comm-form" noValidate>
            <div className="comm-field">
              <label>Headline / Title *</label>
              <input
                value={form.title}
                onChange={e => { setForm({ ...form, title: e.target.value }); setErrors({ ...errors, title: '' }) }}
                placeholder="What is the fake news claiming?"
              />
              {errors.title && <span className="comm-error">{errors.title}</span>}
            </div>
            <div className="comm-field">
              <label>Description *</label>
              <textarea
                rows={4}
                value={form.description}
                onChange={e => { setForm({ ...form, description: e.target.value }); setErrors({ ...errors, description: '' }) }}
                placeholder="Describe the fake news in detail..."
              />
              {errors.description && <span className="comm-error">{errors.description}</span>}
            </div>
            <div className="comm-field">
              <label>Source / Link <span className="optional">(optional)</span></label>
              <input
                value={form.source}
                onChange={e => setForm({ ...form, source: e.target.value })}
                placeholder="https://example.com/fake-article"
              />
            </div>
            <button type="submit" className="comm-submit-btn" disabled={submitting}>
              {submitting ? '⏳ Submitting...' : '🚨 Submit Report'}
            </button>
          </form>
        </div>
      )}

      <div className="comm-posts">
        {posts.length === 0 ? (
          <div className="comm-empty">
            <div className="comm-empty-icon">📭</div>
            <p>No reports yet. Be the first to report fake news!</p>
          </div>
        ) : (
          posts.map(post => (
            <div className="comm-post" key={post._id}>
              <div className="comm-post-header">
                <span className="comm-badge">🚨 Fake News</span>
                <span className="comm-time">{timeAgo(post.createdAt)}</span>
              </div>
              <h4 className="comm-post-title">{post.title}</h4>
              <p className="comm-post-desc">{post.description}</p>
              {post.source && (
                <a className="comm-post-source" href={post.source} target="_blank" rel="noreferrer">
                  🔗 View Source
                </a>
              )}
              <div className="comm-post-footer">
                <span className="comm-author">👤 {post.postedBy}</span>
                <button
                  className={`comm-upvote ${post.upvotedBy?.includes(userId) ? 'upvoted' : ''}`}
                  onClick={() => handleUpvote(post._id)}
                  disabled={post.upvotedBy?.includes(userId)}
                  title={post.upvotedBy?.includes(userId) ? 'Already upvoted' : 'Upvote'}
                >
                  👍 {post.upvotes}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
