import { Activity, Bell, ChevronDown } from "lucide-react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header glass">
      <div className="header-inner">
        <a href="/" className="brand">
          <div className="brand-icon">
            <Activity size={20} />
          </div>

          <div>
            <div className="brand-name">FINRISK AI</div>
            <div className="brand-subtitle">Financial Intelligence</div>
          </div>
        </a>

        <nav className="nav">
          <a href="/" className="nav-link active">
            Overview
          </a>

          <a href="/prediction" className="nav-link">
            Prediction
          </a>

          <a href="/market" className="nav-link">
            Indicators
          </a>

          <a href="/models" className="nav-link">
            Models
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button glass">
            <Bell size={18} />
          </button>

          <button className="profile glass">
            <div className="avatar">L</div>

            <span>Louis</span>

            <ChevronDown size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}