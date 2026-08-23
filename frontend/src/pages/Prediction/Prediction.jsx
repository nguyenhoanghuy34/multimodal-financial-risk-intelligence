import "./Prediction.css";

function Prediction() {
  return (
    <section className="prediction-page">

      <div className="prediction-container">

        <div className="page-header">
          <div>
            <span className="page-label">
              RISK ENGINE
            </span>

            <h1>
              Financial Risk Prediction
            </h1>

            <p>
              Analyze financial signals and predict potential
              market risk using machine learning models.
            </p>
          </div>
        </div>

        <div className="prediction-grid">

          <div className="prediction-input-panel">
            <h2>Prediction Input</h2>

            <p>
              Configure market parameters and generate
              a risk prediction.
            </p>

            <div className="placeholder-box">
              Prediction interface
            </div>
          </div>

          <div className="prediction-result-panel">
            <h2>Risk Assessment</h2>

            <div className="placeholder-box">
              Prediction result
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Prediction;