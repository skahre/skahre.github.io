import "./mobileMenu.css";
import Cross from "../../assets/cross";

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <div className="menu-container">
      <div className="top-nav">
        <h2>Sandra Kåhre</h2>
        <div onClick={() => onClick()}>
          <Cross />
        </div>
      </div>
      <div className="navigation">
        <h2>Home</h2>
        <h2>Projects</h2>
        <h2>Experience</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
