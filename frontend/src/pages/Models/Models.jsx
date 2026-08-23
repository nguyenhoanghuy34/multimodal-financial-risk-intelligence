import "./Models.css";

function Models() {
  return (
    <section className="models-page">
      <div className="models-container">

        <div className="glass-badge">
          Model Intelligence
        </div>

        <h1>
          Risk Models
        </h1>

        <p className="models-description">
          Explore the machine learning models powering
          the financial risk intelligence system.
        </p>

        <div className="glass-card models-coming-soon">

          <div className="coming-soon-icon">
            ◉
          </div>

          <span className="section-label">
            Models
          </span>

          <h2>
            Coming Soon
          </h2>

          <p>
            Model performance, feature importance,
            evaluation metrics and model comparison
            will be available here.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Models;