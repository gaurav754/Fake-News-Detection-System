import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const stats = { total: 1284, fake: 743, real: 541 }

const monthlyData = [
  { month: 'Jan', fake: 60, real: 40 },
  { month: 'Feb', fake: 75, real: 55 },
  { month: 'Mar', fake: 50, real: 70 },
  { month: 'Apr', fake: 90, real: 45 },
  { month: 'May', fake: 65, real: 80 },
  { month: 'Jun', fake: 85, real: 60 },
]

const maxVal = Math.max(...monthlyData.flatMap(d => [d.fake, d.real]))

function Dashboard() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const fakePercent = Math.round((stats.fake / stats.total) * 100)
  const realPercent = 100 - fakePercent



  return (
    <div className="dashboard">

      {/* Welcome */}
      <div className="dash-welcome">
        <div>
          <h2>Welcome back, {user.name || 'User'} 👋</h2>
          <p>Here's your fake news detection overview</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-cards">
        <div className="dash-card total">
          <div className="dash-icon">📊</div>
          <div className="dash-info">
            <span className="dash-label">Total Analyzed</span>
            <span className="dash-value">{stats.total.toLocaleString()}</span>
          </div>
        </div>
        <div className="dash-card fake">
          <div className="dash-icon">🚨</div>
          <div className="dash-info">
            <span className="dash-label">Fake News</span>
            <span className="dash-value">{stats.fake.toLocaleString()}</span>
            <span className="dash-percent">{fakePercent}% of total</span>
          </div>
        </div>
        <div className="dash-card real">
          <div className="dash-icon">✅</div>
          <div className="dash-info">
            <span className="dash-label">Real News</span>
            <span className="dash-value">{stats.real.toLocaleString()}</span>
            <span className="dash-percent">{realPercent}% of total</span>
          </div>
        </div>
        <div className="dash-card community-card" onClick={() => navigate('/community')}>
          <div className="dash-icon">🌐</div>
          <div className="dash-info">
            <span className="dash-label">Community Reports</span>
            <span className="dash-value">Join</span>
            <span className="dash-percent">Report circulating fake news →</span>
          </div>
        </div>
      </div>

      {/* Fake News Detector */}
      <div className="dash-section detect-section">
        <div className="detect-info">
          <h3>🔍 Fake News Detector</h3>
          <p className="dash-section-sub">Our AI model analyzes news articles and detects whether they are fake or real with high accuracy.</p>
        </div>
        <a
          href="https://fakenewsproject-dxeqdcrwhgb8mxrcgh23yb.streamlit.app/"
          target="_blank"
          rel="noreferrer"
          className="detect-btn"
        >
          🔍 Detect Fake News
        </a>
      </div>

      {/* Visualisation */}
      <div className="dash-section">
        <h3>📈 Monthly Trend</h3>
        <p className="dash-section-sub">Fake vs Real news detected over the last 6 months</p>
        <div className="chart-wrap">
          {monthlyData.map(d => (
            <div className="chart-col" key={d.month}>
              <div className="chart-bars">
                <div className="chart-bar bar-fake-c" style={{ height: `${(d.fake / maxVal) * 160}px` }} title={`Fake: ${d.fake}`} />
                <div className="chart-bar bar-real-c" style={{ height: `${(d.real / maxVal) * 160}px` }} title={`Real: ${d.real}`} />
              </div>
              <span className="chart-label">{d.month}</span>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span><span className="legend-dot fake-dot" />Fake</span>
          <span><span className="legend-dot real-dot" />Real</span>
        </div>
      </div>

      {/* Overall Bar */}
      <div className="dashboard-bar">
        <div className="bar-label">
          <span>🚨 Fake {fakePercent}%</span>
          <span>✅ Real {realPercent}%</span>
        </div>
        <div className="bar-track">
          <div className="bar-fake" style={{ width: `${fakePercent}%` }} />
          <div className="bar-real" style={{ width: `${realPercent}%` }} />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
