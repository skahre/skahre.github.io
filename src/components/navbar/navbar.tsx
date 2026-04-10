import Hamburger from "../../assets/hamburger";
import MobileMenu from "./mobileMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "var(--color-orange)" : "inherit",
  });

  return (
    <>
      <nav className="flex flex-row items-center justify-between sticky inset-0 bg-espresso text-white p-[36px] nav:px-[96px] nav:py-[36px] 3xl:px-[176px] 3xl:py-[48px]">
        <NavLink to="/">
          <h2>Sandra Kåhre</h2>
        </NavLink>
        <span className="hidden nav:flex flex-row gap-[32px] 3xl:gap-[64px]">
          <NavLink to="/" style={navStyle}>
            <h4>Home</h4>
          </NavLink>
          <NavLink to="/projects" style={navStyle}>
            <h4>Projects</h4>
          </NavLink>
          <NavLink to="/experience" style={navStyle}>
            <h4>Experience</h4>
          </NavLink>
          <NavLink to="/about" style={navStyle}>
            <h4>About</h4>
          </NavLink>
          <NavLink to="/contact" style={navStyle}>
            <h4>Contact</h4>
          </NavLink>
        </span>
        {!isMobileMenuOpen && (
          <div className="nav:hidden" onClick={() => setIsMobileMenuOpen(true)}>
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
