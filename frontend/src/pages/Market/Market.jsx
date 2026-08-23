import "./Market.css";

function Market() {
  return (
    <section className="market-page">

      <div className="market-container">

        <span className="page-label">
          MARKET INTELLIGENCE
        </span>

        <h1>Market Indicators</h1>

        <p>
          Monitor market conditions, macroeconomic signals
          and financial indicators.
        </p>

        <div className="coming-soon-card">
          <span>Market</span>

          <h2>Coming Soon</h2>

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