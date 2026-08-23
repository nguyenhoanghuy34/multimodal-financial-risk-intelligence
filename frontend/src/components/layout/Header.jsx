import { NavLink } from "react-router-dom";

import "./Header.css";

const navigation = [
  {
    label: "Overview",
    path: "/overview",
  },
  {
    label: "Prediction",
    path: "/prediction",
  },
  {
    label: "Market",
    path: "/market",
  },
  {
    label: "Models",
    path: "/models",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <NavLink to="/prediction" className="logo">
          <span className="logo-mark">
            FR
          </span>

          <span className="logo-text">
            US MacroMind
          </span>
        </NavLink>

        <nav className="navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;