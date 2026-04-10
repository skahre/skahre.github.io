import Cross from "../../assets/cross";
import { Link } from "react-router-dom";

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <div className="nav:hidden flex flex-col items-center w-full h-full fixed inset-0 bg-espresso/85 text-white gap-[64px] p-[36px]">
      <div className="flex flex-row items-center justify-between w-full">
        <h2>Sandra Kåhre</h2>
        <div onClick={() => onClick()}>
          <Cross />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[36px]">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/projects">
          <h2>Projects</h2>
        </Link>
        <Link to="/experience">
          <h2>Experience</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
        <Link to="/contact">
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  );
}
