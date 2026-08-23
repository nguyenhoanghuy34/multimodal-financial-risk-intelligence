import { useState } from "react";
import "./Overview.css";

const dataGroups = [
  {
    id: "rates",
    icon: "↗",
    title: "Interest Rates",
    subtitle: "Monetary Policy",
    description:
      "Track U.S. monetary policy and interest rate conditions across the economy.",
    series: [
      "Federal Funds Rate",
      "Treasury Yields",
      "10-Year Treasury Rate",
      "3-Month Treasury Rate",
    ],
  },
  {
    id: "inflation",
    icon: "◌",
    title: "Inflation",
    subtitle: "Price Stability",
    description:
      "Analyze price pressures and inflation trends through CPI and PCE indicators.",
    series: [
      "Consumer Price Index (CPI)",
      "Personal Consumption Expenditures (PCE)",
      "Core CPI",
      "Core PCE",
    ],
  },
  {
    id: "labor",
    icon: "◫",
    title: "Employment",
    subtitle: "Labor Market",
    description:
      "Evaluate labor market health and the economy's ability to create jobs.",
    series: [
      "Unemployment Rate",
      "Employment",
      "Nonfarm Payrolls",
      "Labor Force Participation",
    ],
  },
  {
    id: "growth",
    icon: "↗",
    title: "Economic Growth",
    subtitle: "Economic Activity",
    description:
      "Measure the pace of economic growth and overall U.S. economic activity.",
    series: [
      "GDP",
      "Real GDP",
      "GDP Growth Rate",
      "Industrial Production",
    ],
  },
  {
    id: "housing",
    icon: "⌂",
    title: "Housing",
    subtitle: "Real Estate",
    description:
      "Track housing cycles and changing conditions in the U.S. residential market.",
    series: [
      "Home Prices",
      "Housing Starts",
      "Building Permits",
      "New Home Sales",
    ],
  },
  {
    id: "consumption",
    icon: "◉",
    title: "Consumption & Income",
    subtitle: "Household Economy",
    description:
      "Analyze household purchasing power and consumption capacity across the economy.",
    series: [
      "Consumer Spending",
      "Personal Income",
      "Disposable Personal Income",
      "Retail Sales",
    ],
  },
  {
    id: "money",
    icon: "$",
    title: "Money Supply",
    subtitle: "Monetary Conditions",
    description:
      "Monitor money supply growth and changes in overall liquidity conditions.",
    series: [
      "M1 Money Supply",
      "M2 Money Supply",
      "Monetary Base",
      "Money Velocity",
    ],
  },
  {
    id: "markets",
    icon: "◇",
    title: "Financial Markets",
    subtitle: "Market Conditions",
    description:
      "Combine financial indicators to evaluate market conditions and economic risk.",
    series: [
      "Financial Conditions",
      "Market Indicators",
      "Credit Spreads",
      "Volatility Indicators",
    ],
  },
];

const forecastingTasks = [
  {
    number: "01",
    title: "Unemployment Forecast",
    description:
      "Forecast the unemployment rate over upcoming periods.",
  },
  {
    number: "02",
    title: "Inflation Forecast",
    description:
      "Forecast inflation trends using historical economic data.",
  },
  {
    number: "03",
    title: "Interest Rate Forecast",
    description:
      "Analyze and forecast future interest rate movements.",
  },
  {
    number: "04",
    title: "GDP Forecast",
    description:
      "Forecast economic growth and overall economic activity.",
  },
  {
    number: "05",
    title: "Housing Forecast",
    description:
      "Forecast trends and conditions in the U.S. housing market.",
  },
  {
    number: "06",
    title: "Recession Prediction",
    description:
      "Estimate the probability of the U.S. economy entering a recession.",
  },
  {
    number: "07",
    title: "Economic Regime",
    description:
      "Classify the current state and regime of the U.S. economy.",
  },
  {
    number: "08",
    title: "Economic Risk Score",
    description:
      "Aggregate economic signals into a comprehensive risk score.",
  },
];

function Overview() {
  const [selectedData, setSelectedData] = useState("rates");
  const [selectedTask, setSelectedTask] = useState(null);

  const activeData = dataGroups.find(
    (item) => item.id === selectedData
  );

  const handleDataClick = (id) => {
    setSelectedData(id);
    setSelectedTask(null);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setSelectedData(null);
  };

  return (
    <section className="overview-page">
      <div className="overview-container">

        {/* HERO */}

        <div className="overview-hero">

          <div className="hero-content">

            <div className="glass-badge">
              <span className="status-dot" />
              US Macro Intelligence
            </div>

            <h1>
              US <span>MacroMind</span>
            </h1>

            <p>
              Economic intelligence powered by FRED data,
              time series analysis, and machine learning.
            </p>

            <div className="hero-meta">
              <div>
                <strong>FRED</strong>
                <span>Primary Data Source</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Forecasting Tasks</span>
              </div>

              <div>
                <strong>ML</strong>
                <span>Economic Intelligence</span>
              </div>
            </div>

          </div>

          <div className="hero-orb">
            <div className="orb-core">
              <span>US</span>
              <small>MACRO</small>
            </div>
          </div>

        </div>

        {/* INTRO */}

        <div className="overview-intro">

          <div>
            <span className="section-kicker">
              SYSTEM OVERVIEW
            </span>

            <h2>
              From economic data
              <br />
              to economic intelligence.
            </h2>
          </div>

          <p>
            US MacroMind uses FRED as its primary data source,
            integrating multiple economic time series into a
            multivariate economic dataset for analysis,
            forecasting, and machine learning.
          </p>

        </div>

        {/* DATASET */}

        <section className="overview-section">

          <div className="section-heading">
            <div>
              <span className="section-kicker">
                01 / DATA FOUNDATION
              </span>

              <h2>
                Economic Dataset
              </h2>
            </div>

            <span className="section-count">
              {dataGroups.length} DATA GROUPS
            </span>
          </div>

          <div className="data-grid">

            {dataGroups.map((item) => (
              <button
                key={item.id}
                className={`data-card ${
                  selectedData === item.id
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleDataClick(item.id)}
              >
                <div className="data-card-top">
                  <span className="data-icon">
                    {item.icon}
                  </span>

                  <span className="data-arrow">
                    →
                  </span>
                </div>

                <h3>{item.title}</h3>

                <span className="data-subtitle">
                  {item.subtitle}
                </span>
              </button>
            ))}

          </div>

          {/* SELECTED DATA */}

          {activeData && (
            <div className="detail-card">

              <div className="detail-main">

                <span className="detail-icon">
                  {activeData.icon}
                </span>

                <div>
                  <span className="detail-kicker">
                    SELECTED DATA GROUP
                  </span>

                  <h3>
                    {activeData.title}
                  </h3>

                  <p>
                    {activeData.description}
                  </p>
                </div>

              </div>

              <div className="series-list">
                {activeData.series.map((series) => (
                  <div
                    key={series}
                    className="series-item"
                  >
                    <span className="series-dot" />
                    {series}
                  </div>
                ))}
              </div>

            </div>
          )}

        </section>

        {/* FORECASTING */}

        <section className="overview-section">

          <div className="section-heading">
            <div>
              <span className="section-kicker">
                02 / INTELLIGENCE ENGINE
              </span>

              <h2>
                Forecasting System
              </h2>
            </div>

            <span className="section-count">
              8 PROBLEMS
            </span>
          </div>

          <div className="forecast-grid">

            {forecastingTasks.map((task) => (
              <button
                key={task.number}
                className={`forecast-card ${
                  selectedTask?.number === task.number
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleTaskClick(task)}
              >
                <span className="forecast-number">
                  {task.number}
                </span>

                <div>
                  <h3>
                    {task.title}
                  </h3>

                  <p>
                    {task.description}
                  </p>
                </div>

                <span className="forecast-arrow">
                  →
                </span>
              </button>
            ))}

          </div>

          {/* SELECTED TASK */}

          {selectedTask && (
            <div className="detail-card task-detail">

              <div className="task-number-large">
                {selectedTask.number}
              </div>

              <div>
                <span className="detail-kicker">
                  FORECASTING TASK
                </span>

                <h3>
                  {selectedTask.title}
                </h3>

                <p>
                  {selectedTask.description}
                </p>

                <div className="task-tags">
                  <span>Time Series</span>
                  <span>Machine Learning</span>
                  <span>Economic Data</span>
                </div>
              </div>

            </div>
          )}

        </section>

        {/* OBJECTIVE */}

        <section className="objective-section">

          <div className="objective-card">

            <div className="objective-icon">
              ✦
            </div>

            <span className="section-kicker">
              03 / OBJECTIVE
            </span>

            <h2>
              Turn economic data into
              <span> understandable signals.</span>
            </h2>

            <p>
              Transform economic data into clear signals
              that help explain the current state and
              future direction of the U.S. economy.
            </p>

            <div className="pipeline">

              <div>
                <strong>01</strong>
                <span>Data Engineering</span>
              </div>

              <div className="pipeline-line" />

              <div>
                <strong>02</strong>
                <span>Time Series</span>
              </div>

              <div className="pipeline-line" />

              <div>
                <strong>03</strong>
                <span>Machine Learning</span>
              </div>

              <div className="pipeline-line" />

              <div>
                <strong>04</strong>
                <span>Economic Intelligence</span>
              </div>

            </div>

          </div>

        </section>

      </div>
    </section>
  );
}

export default Overview;