import { Code2, Activity } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Activity size={15} />
          <span>FINRISK AI</span>
        </div>

        <span className="footer-copy">
          © 2026 Financial Risk Intelligence
        </span>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <Code2 size={15} />
          GitHub
        </a>
      </div>
    </footer>
  );
}