import LinkedInIcon from "../../assets/linkedin.tsx";

export default function Footer() {
  return (
    <footer className="flex flex-col nav:flex-row items-center justify-between bg-sage-600 text-white p-[36px] nav:px-[96px] nav:py-[36px] 3xl:px-[176px] 3xl:py-[48px] max-nav:gap-[24px]">
      <h2 className="font-body font-bold">I design. I build.</h2>
      <div className="flex flex-col items-center gap-[8px] text-white/70">
        <p>last updated {__BUILD_DATE__}</p>
        <p className="text-center text-[10px] md:text-[12px] 3xl:text-[24px]">
          © 2026 Sandra Kåhre • Designed & coded from scratch
        </p>
      </div>
      <span className="flex flex-row items-center text-peach gap-[16px]">
        <LinkedInIcon
          fill="currentColor"
          size="24px"
          aria-label="LinkedIn Logo"
        />
        <h3 className="font-body font-semibold">/sandra-kahre</h3>
      </span>
    </footer>
  );
}
