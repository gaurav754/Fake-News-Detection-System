import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSuccess(true)
    setTimeout(() => navigate('/'), 2000)
  }

  if (success) return (
    <div className="su-page">
      <div className="su-success">
        <div className="su-success-icon">✅</div>
        <h2>Welcome Back!</h2>
        <p>Login successful. Redirecting...</p>
      </div>
    </div>
  )

  return (
    <div className="su-page">
      <div className="su-card login-card">

        <div className="su-header">
          <div className="su-logo">🛡️</div>
          <h2>Welcome Back</h2>
          <p>Login to continue detecting fake news</p>
        </div>

        <form onSubmit={handleSubmit} className="su-form" noValidate>

          <div className="su-field">
            <label>📧 Email Address</label>
            <input
              type="email" value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }) }}
              placeholder="you@example.com"
            />
            {errors.email && <span className="su-error">{errors.email}</span>}
          </div>

          <div className="su-field">
            <label>🔒 Password</label>
            <div className="su-pass-wrap">
              <input
                type={showPass ? 'text' : 'password'} value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: '' }) }}
                placeholder="Enter your password"
              />
              <button type="button" className="su-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="su-error">{errors.password}</span>}
          </div>

          <div className="login-forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="su-btn">🔓 Login</button>

          <p className="su-login">Don't have an account? <Link to="/signup">Sign Up</Link></p>

        </form>
      </div>
    </div>
  )
}
