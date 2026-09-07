import React from "react";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

type NavStyleFn = ({ isActive }: { isActive: boolean }) => string;

export default function MobileMenu({
  onClick,
  navStyle,
}: {
  onClick: () => void;
  navStyle: NavStyleFn;
}) {
  return (
    <div className="nav:hidden flex flex-col items-center w-full h-full fixed inset-0 bg-sage-300/85 text-black gap-16">
      <div className="flex flex-row items-center justify-between w-full h-fit px-9 py-2 bg-sage-300/80 border-b border-sage-300">
        <div className="h2 font-bold flex items-center">Sandra Kåhre</div>
        <button
          type="button"
          className="h-[28.8px] md:h-[38.4px] aspect-square text-inherit hover:text-sage-600 transition-colors duration-200"
          onClick={() => onClick()}
          aria-label="Close mobile menu"
        >
          <FaXmark className="w-full h-full" />
        </button>
      </div>
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-9 h2 font-semibold">
          <NavLink to="/" className={navStyle} onClick={onClick}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navStyle} onClick={onClick}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={navStyle} onClick={onClick}>
            Experience
          </NavLink>
          <NavLink to="/about" className={navStyle} onClick={onClick}>
            About
          </NavLink>
          <NavLink to="/contact" className={navStyle} onClick={onClick}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
