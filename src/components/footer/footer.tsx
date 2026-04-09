import "./footer.css";
import LinkedInIcon from "../../assets/linkedin.tsx";

export default function Footer() {
  return (
    <footer>
      <h3>Let's work together!</h3>
      <p>last updated March 2026</p>
      <span className="linkedin">
        <LinkedInIcon fill="var(--color-white)" size="24px" />
        <h4>/sandra-kahre</h4>
      </span>
    </footer>
  );
}
