import './Dashboard.css'

const stats = {
  total: 1284,
  fake: 743,
  real: 541,
}

function Dashboard() {
  const fakePercent = Math.round((stats.fake / stats.total) * 100)
  const realPercent = 100 - fakePercent

  return (
    <>
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Prediction Dashboard</h2>
        <p>Overview of all news predictions analyzed by our AI</p>
      </div>

      <div className="dashboard-cards">
        <div className="dash-card total">
          <div className="dash-icon">📊</div>
          <div className="dash-info">
            <span className="dash-label">Total Predictions</span>
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
      </div>

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
    </section>
    </>
  )
}

export default Dashboard
