import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function getStrength(password) {
  if (password.length === 0) return null
  if (password.length < 6) return 'weak'
  if (password.length < 10 || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) return 'medium'
  return 'strong'
}

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', username: '', email: '', phone: '',
    password: '', confirm: '', address: '',
  })
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [avatar, setAvatar] = useState(null)

  const strength = getStrength(form.password)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.username.trim()) e.username = 'Username is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    if (!form.address.trim()) e.address = 'Address is required'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleAvatar = (e) => {
    const file = e.target.files[0]
    if (file) setAvatar(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setErrors({ email: data.message }); return }
      setSuccess(true)
      setTimeout(() => navigate('/login'), 2000)
    } catch {
      setErrors({ email: 'Server error. Try again.' })
    }
  }

  if (success) return (
    <div className="su-page">
      <div className="su-success">
        <div className="su-success-icon">🎉</div>
        <h2>Account Created!</h2>
        <p>Welcome aboard. Redirecting to login...</p>
      </div>
    </div>
  )

  return (
    <div className="su-page">
      <div className="su-card">

        {/* Header */}
        <div className="su-header">
          <div className="su-logo">🛡️</div>
          <h2>Create Account</h2>
          <p>Join us in fighting misinformation</p>
        </div>



        <form onSubmit={handleSubmit} className="su-form" noValidate>

          {/* Row 1 */}
          <div className="su-row">
            <div className="su-field">
              <label>👤 Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
              {errors.name && <span className="su-error">{errors.name}</span>}
            </div>
            <div className="su-field">
              <label>🔖 Username</label>
              <input name="username" value={form.username} onChange={handleChange} placeholder="johndoe99" />
              {errors.username && <span className="su-error">{errors.username}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="su-row">
            <div className="su-field">
              <label>📧 Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="su-error">{errors.email}</span>}
            </div>
            <div className="su-field">
              <label>📞 Phone <span className="su-optional">(optional)</span></label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            </div>
          </div>

          {/* Password */}
          <div className="su-row">
            <div className="su-field">
              <label>🔒 Password</label>
              <div className="su-pass-wrap">
                <input
                  name="password" type={showPass ? 'text' : 'password'}
                  value={form.password} onChange={handleChange} placeholder="Min. 6 characters"
                />
                <button type="button" className="su-eye" onClick={() => setShowPass(!showPass)}>
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
              {form.password && (
                <div className="su-strength">
                  <div className={`su-strength-bar su-${strength}`} />
                  <span className={`su-strength-label su-${strength}`}>
                    {strength === 'weak' ? '⚠️ Weak' : strength === 'medium' ? '🟡 Medium' : '✅ Strong'}
                  </span>
                </div>
              )}
              {errors.password && <span className="su-error">{errors.password}</span>}
            </div>
            <div className="su-field">
              <label>🔐 Confirm Password</label>
              <div className="su-pass-wrap">
                <input
                  name="confirm" type={showConfirm ? 'text' : 'password'}
                  value={form.confirm} onChange={handleChange} placeholder="Re-enter password"
                />
                <button type="button" className="su-eye" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>
              {form.confirm && form.password !== form.confirm &&
                <span className="su-error">❌ Passwords don't match</span>}
              {form.confirm && form.password === form.confirm && form.confirm.length > 0 &&
                <span className="su-match">✅ Passwords match</span>}
              {errors.confirm && !form.confirm && <span className="su-error">{errors.confirm}</span>}
            </div>
          </div>

          {/* Address */}
          <div className="su-field su-full">
            <label>🏠 Address</label>
            <input name="address" value={form.address} onChange={handleChange} placeholder="123 Street, City, State" />
            {errors.address && <span className="su-error">{errors.address}</span>}
          </div>

          {/* Submit */}
          <button type="submit" className="su-btn">🚀 Create Account</button>

          <p className="su-login">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}
