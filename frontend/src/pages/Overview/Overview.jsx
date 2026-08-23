import "./Overview.css";

function Overview() {
  return (
    <section className="overview-page">
      <div className="overview-container">

        <div className="glass-badge">
          Financial Intelligence Platform
        </div>

        <h1>
          Multimodal Financial
          <br />
          Risk Intelligence
        </h1>

        <p className="overview-description">
          An intelligent platform for financial market
          analysis, risk prediction and model-driven
          decision support.
        </p>

        <div className="glass-card overview-coming-soon">

          <div className="coming-soon-icon">
            ✦
          </div>

          <span className="section-label">
            Overview
          </span>

          <h2>
            Coming Soon
          </h2>

          <p>
            Market overview, portfolio risk,
            macroeconomic indicators and real-time
            financial intelligence will be available here.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Overview;