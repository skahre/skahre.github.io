import "./navbar.css";
import Hamburger from "../../assets/hamburger";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <h2>Sandra Kåhre</h2>
        <span className="nav-links">
          <h4>Projects</h4>
          <h4>Education</h4>
          <h4>About me</h4>
          <h4>Contact</h4>
        </span>
        {!isMobileMenuOpen && (
          <div
            className="hamburger-container"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Hamburger />
          </div>
        )}
      </nav>
      {isMobileMenuOpen && (
        <MobileMenu onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}
