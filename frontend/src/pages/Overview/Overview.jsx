import "./Overview.css";

function Overview() {
  return (
    <section className="overview-page">

      <div className="overview-container">

        <div className="page-badge">
          Financial Intelligence Platform
        </div>

        <h1>
          Multimodal Financial
          <br />
          Risk Intelligence
        </h1>

        <p>
          An intelligent platform for financial market analysis,
          risk prediction and model-driven decision support.
        </p>

        <div className="coming-soon-card">
          <span>Overview</span>

          <h2>Coming Soon</h2>

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