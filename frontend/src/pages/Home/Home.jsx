import {
  ArrowUpRight,
  ShieldAlert,
  TrendingUp,
  Activity,
} from "lucide-react";

import "./Home.css";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <div>
          <span className="eyebrow">
            <Activity size={14} />
            FINANCIAL RISK INTELLIGENCE
          </span>

          <h1>
            Understand the
            <span> financial risk.</span>
          </h1>

          <p>
            Analyze macro-financial conditions and predict emerging
            financial risk using machine learning.
          </p>
        </div>

        <div className="status glass">
          <span className="status-dot" />
          System operational
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card glass glass-hover">
          <div className="stat-header">
            <span>Risk Score</span>
            <ShieldAlert size={18} />
          </div>

          <div className="stat-value danger">72.8</div>

          <div className="stat-footer">
            <span>High Risk</span>
            <span className="negative">+8.4%</span>
          </div>
        </div>

        <div className="stat-card glass glass-hover">
          <div className="stat-header">
            <span>Risk Probability</span>
            <TrendingUp size={18} />
          </div>

          <div className="stat-value">78.4%</div>

          <div className="progress">
            <div style={{ width: "78.4%" }} />
          </div>
        </div>

        <div className="stat-card glass glass-hover">
          <div className="stat-header">
            <span>Financial Stress</span>
            <Activity size={18} />
          </div>

          <div className="stat-value">1.42</div>

          <div className="stat-footer">
            <span>Elevated</span>
            <span className="negative">+0.21</span>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="chart-card glass">
          <div className="card-heading">
            <div>
              <span className="card-label">RISK TREND</span>
              <h2>Financial Risk Probability</h2>
            </div>

            <button className="period-button">
              30 Days <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="chart-placeholder">
            <div className="chart-line" />
            <div className="chart-label label-1">80%</div>
            <div className="chart-label label-2">60%</div>
            <div className="chart-label label-3">40%</div>
          </div>
        </div>

        <div className="risk-card glass">
          <span className="card-label">CURRENT ASSESSMENT</span>

          <div className="risk-circle">
            <div>
              <strong>HIGH</strong>
              <span>72.8</span>
            </div>
          </div>

          <p>
            Financial conditions indicate elevated risk across several
            macro-financial indicators.
          </p>
        </div>
      </section>
    </main>
  );
}