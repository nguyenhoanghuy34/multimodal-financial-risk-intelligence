import "./Market.css";

function Market() {
  return (
    <section className="market-page">
      <div className="market-container">

        <div className="glass-badge">
          Market Intelligence
        </div>

        <h1>
          Market Indicators
        </h1>

        <p className="market-description">
          Monitor market conditions, technical signals,
          volatility and macroeconomic indicators.
        </p>

        <div className="glass-card market-coming-soon">

          <div className="coming-soon-icon">
            ◈
          </div>

          <span className="section-label">
            Market
          </span>

          <h2>
            Coming Soon
          </h2>

          <p>
            Technical indicators, market regime,
            volatility and macroeconomic data
            will be displayed here.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Market;