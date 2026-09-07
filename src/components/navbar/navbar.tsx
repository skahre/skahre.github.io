import { FaBars } from "react-icons/fa6";
import MobileMenu from "./mobileMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 hover:text-sage-400 ${
      isActive ? "text-sage-400" : "text-inherit"
    }`;

  return (
    <>
      <nav className="flex flex-row items-center justify-between h-fit w-full bg-white border-b border-gray-200 px-9 py-2 nav:px-24 nav:py-4 3xl:px-44 3xl:py-12">
        <NavLink
          to="/"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <div className="h2 font-bold flex items-center">Sandra Kåhre</div>
        </NavLink>
        <span className="hidden nav:flex flex-row gap-8 3xl:gap-16 h4 font-semibold">
          <NavLink to="/" className={navClassName}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navClassName}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={navClassName}>
            Experience
          </NavLink>
          <NavLink to="/about" className={navClassName}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClassName}>
            Contact
          </NavLink>
        </span>
        {!isMobileMenuOpen && (
          <button
            type="button"
            className="nav:hidden h-[28.8px] md:h-[38.4px] aspect-square text-inherit hover:text-sage-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <FaBars className="h-full w-full" />
          </button>
        )}
      </nav>
      {isMobileMenuOpen && (
        <MobileMenu
          onClick={() => setIsMobileMenuOpen(false)}
          navStyle={navClassName}
        />
      )}
    </>
  );
}
