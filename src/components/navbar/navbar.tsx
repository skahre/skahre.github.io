import Hamburger from "../../assets/hamburger";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row items-center justify-between sticky inset-0 bg-espresso text-white p-[36px] min-[880px]:px-[96px] min-[880px]:py-[36px] 3xl:px-[176px] 3xl:py-[48px]">
        <h2>Sandra Kåhre</h2>
        <span className="hidden min-[880px]:flex flex-row gap-[32px] 3xl:gap-[64px]">
          <h4>Home</h4>
          <h4>Projects</h4>
          <h4>Experience</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </span>
        {!isMobileMenuOpen && (
          <div
            className="min-[880px]:hidden"
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
