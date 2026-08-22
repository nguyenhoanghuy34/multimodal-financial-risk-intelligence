# 📊 Financial Risk Prediction

<p align="center">
  AI-powered financial risk prediction using daily macro-financial data from FRED.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/LightGBM-ML-9ACD32?style=flat-square"/>
  <img src="https://img.shields.io/badge/XGBoost-ML-189E38?style=flat-square"/>
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/MLflow-MLOps-0194E2?style=flat-square&logo=mlflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/Data-FRED-1F4E79?style=flat-square"/>
</p>

---

## 🖥️ Dashboard

<p align="center">
  <img
    src="https://itamih.com/images/dashboard-main.png"
    width="70%"
  />
</p>

<p align="center">
  <sub>Dashboard inspiration — Economic Intelligence UI</sub>
</p>

---

## 📈 Data

Daily macro-financial time-series data from **FRED (Federal Reserve Economic Data)**.

| Category | Examples |
|---|---|
| Interest Rates | Treasury Yields |
| Yield Curve | 10Y–2Y, 10Y–3M |
| Credit | Corporate Bond Spreads |
| Inflation | Breakeven Inflation |
| Financial Stress | STLFSI4 |
| FX | USD / EUR, USD / JPY |

---

## 🧠 Pipeline

```text
FRED API
   ↓
Data Processing
   ↓
Feature Engineering
   ↓
XGBoost / LightGBM
   ↓
Risk Prediction
   ↓
SHAP Explainability
   ↓
React Dashboard
