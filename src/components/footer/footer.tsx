import LinkedInIcon from "../../assets/linkedin.tsx";

export default function Footer() {
  return (
    <footer className="relative pt-12">
      <div className="absolute z-0 top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
            className="fill-sage-600"
          />
        </svg>
      </div>
      <div className="z-50 flex flex-col nav:flex-row items-center justify-between bg-sage-600 text-white p-9 nav:px-24 nav:py-9 3xl:px-44 3xl:py-12 max-nav:gap-6">
        <h2 className="font-body font-bold">I design. I build.</h2>
        <div className="flex flex-col text-body items-center gap-2 text-white/70">
          <p>last updated {__BUILD_DATE__}</p>
          <p className="text-center text-[10px] md:text-xs 3xl:text-2xl">
            © 2026 Sandra Kåhre • Designed & coded from scratch
          </p>
        </div>
        <span className="flex flex-row items-center text-white gap-4">
          <LinkedInIcon
            fill="currentColor"
            size="24px"
            aria-label="LinkedIn Logo"
          />
          <h3 className="font-body font-semibold">/sandra-kahre</h3>
        </span>
      </div>
    </footer>
  );
}
