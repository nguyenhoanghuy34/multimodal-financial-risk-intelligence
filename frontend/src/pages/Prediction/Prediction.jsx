import { useState } from "react";
import "./Prediction.css";

import UnemploymentForecast from "./UnemploymentForecast/UnemploymentForecast";
import InflationForecast from "./InflationForecast/InflationForecast";
import InterestRateForecast from "./InterestRateForecast/InterestRateForecast";
import GDPForecast from "./GDPForecast/GDPForecast";
import HousingForecast from "./HousingForecast/HousingForecast";
import RecessionPrediction from "./RecessionPrediction/RecessionPrediction";
import EconomicRegime from "./EconomicRegime/EconomicRegime";
import EconomicRiskScore from "./EconomicRiskScore/EconomicRiskScore";

const predictionItems = [
  {
    id: "unemployment",
    number: "01",
    title: "Unemployment Forecast",
    short: "Unemployment",
    component: UnemploymentForecast,
  },
  {
    id: "inflation",
    number: "02",
    title: "Inflation Forecast",
    short: "Inflation",
    component: InflationForecast,
  },
  {
    id: "interest-rate",
    number: "03",
    title: "Interest Rate Forecast",
    short: "Interest Rate",
    component: InterestRateForecast,
  },
  {
    id: "gdp",
    number: "04",
    title: "GDP Forecast",
    short: "GDP",
    component: GDPForecast,
  },
  {
    id: "housing",
    number: "05",
    title: "Housing Forecast",
    short: "Housing",
    component: HousingForecast,
  },
  {
    id: "recession",
    number: "06",
    title: "Recession Prediction",
    short: "Recession",
    component: RecessionPrediction,
  },
  {
    id: "regime",
    number: "07",
    title: "Economic Regime",
    short: "Economic Regime",
    component: EconomicRegime,
  },
  {
    id: "risk",
    number: "08",
    title: "Economic Risk Score",
    short: "Risk Score",
    component: EconomicRiskScore,
  },
];

function Prediction() {
  const [activeId, setActiveId] = useState("unemployment");

  const activeItem = predictionItems.find(
    (item) => item.id === activeId
  );

  const ActiveComponent = activeItem.component;

  return (
    <section className="prediction-page">
      <div className="prediction-container">

        {/* LEFT NAVIGATION */}

        <aside className="prediction-sidebar">

          <div className="prediction-sidebar-header">
            <span className="section-kicker">
              MACRO MODELS
            </span>

            <h2>
              Prediction
            </h2>

            <p>
              Select an economic forecasting task.
            </p>
          </div>

          <nav className="prediction-nav">

            {predictionItems.map((item) => (
              <button
                key={item.id}
                className={`prediction-nav-item ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="prediction-nav-number">
                  {item.number}
                </span>

                <span className="prediction-nav-title">
                  {item.short}
                </span>

                <span className="prediction-nav-arrow">
                  →
                </span>
              </button>
            ))}

          </nav>

        </aside>

        {/* MAIN CONTENT */}

        <main className="prediction-content">

          <div className="prediction-content-header">

            <div>
              <span className="section-kicker">
                MODEL / {activeItem.number}
              </span>

              <h1>
                {activeItem.title}
              </h1>
            </div>

            <div className="prediction-status">
              <span />
              MODEL IN DEVELOPMENT
            </div>

          </div>

          <ActiveComponent />

        </main>

      </div>
    </section>
  );
}

export default Prediction;