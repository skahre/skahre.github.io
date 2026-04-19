import Hamburger from "../../assets/hamburger";
import MobileMenu from "./mobileMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "var(--color-sage-400)" : "inherit",
  });

  return (
    <>
      <nav className="flex flex-row items-center justify-between h-fit bg-white border-b border-gray-200 px-9 py-2 nav:px-24 nav:py-4 3xl:px-44 3xl:py-12">
        <NavLink to="/">
          <div className="h2 font-bold flex items-center">Sandra Kåhre</div>
        </NavLink>
        <span className="hidden nav:flex flex-row gap-8 3xl:gap-16 h4 font-semibold">
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
          <NavLink to="/projects" style={navStyle}>
            Projects
          </NavLink>
          <NavLink to="/experience" style={navStyle}>
            Experience
          </NavLink>
          <NavLink to="/about" style={navStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
        </span>
        {!isMobileMenuOpen && (
          <div
            className="nav:hidden h-[28.8px] md:h-[38.4px] aspect-square"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Hamburger />
          </div>
        )}
      </nav>
      {isMobileMenuOpen && (
        <MobileMenu
          onClick={() => setIsMobileMenuOpen(false)}
          navStyle={navStyle}
        />
      )}
    </>
  );
}
