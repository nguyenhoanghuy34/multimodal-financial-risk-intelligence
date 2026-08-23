import "./Prediction.css";

function Prediction() {
  return (
    <section className="prediction-page">
      <div className="prediction-container">

        <div className="prediction-header">

          <div>
            <span className="page-label">
              RISK ENGINE
            </span>

            <h1>
              Financial Risk Prediction
            </h1>

            <p>
              Analyze financial signals and predict
              potential market risk using machine
              learning models.
            </p>
          </div>

          <div className="glass-badge prediction-status">
            ● System Ready
          </div>

        </div>

        <div className="prediction-grid">

          <div className="glass-card prediction-panel">
            <div className="panel-header">
              <div>
                <span className="panel-label">
                  INPUT
                </span>

                <h2>
                  Market Parameters
                </h2>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Asset
                </label>

                <select className="glass-select">
                  <option>BTCUSDT</option>
                  <option>ETHUSDT</option>
                  <option>BNBUSDT</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Time Horizon
                </label>

                <select className="glass-select">
                  <option>1 Minute</option>
                  <option>5 Minutes</option>
                  <option>15 Minutes</option>
                  <option>30 Minutes</option>
                  <option>60 Minutes</option>
                </select>
              </div>

              <div className="form-group full">
                <label>
                  Current Price
                </label>

                <input
                  className="glass-input"
                  placeholder="Enter current price"
                  type="number"
                />
              </div>

              <div className="form-group">
                <label>
                  Volatility
                </label>

                <input
                  className="glass-input"
                  placeholder="0.00"
                  type="number"
                />
              </div>

              <div className="form-group">
                <label>
                  RSI
                </label>

                <input
                  className="glass-input"
                  placeholder="0 - 100"
                  type="number"
                />
              </div>

            </div>

            <button className="glass-button prediction-button">
              Generate Risk Prediction
            </button>
          </div>

          <div className="glass-card prediction-panel result-panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">
                  OUTPUT
                </span>

                <h2>
                  Risk Assessment
                </h2>
              </div>
            </div>

            <div className="risk-placeholder">

              <div className="risk-circle">
                <span>--</span>
              </div>

              <h3>
                Awaiting Prediction
              </h3>

              <p>
                Submit market parameters to generate
                a financial risk assessment.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Prediction;