import LinkedInIcon from "../../assets/linkedin.tsx";

export default function Footer() {
  return (
    <footer className="flex flex-col nav:flex-row items-center justify-between bg-espresso text-white p-[36px] nav:px-[96px] nav:py-[36px] 3xl:px-[176px] 3xl:py-[48px] max-nav:gap-[24px]">
      <h3>I design. I build.</h3>
      <div className="flex flex-col items-center gap-[8px]">
        <p>last updated {__BUILD_DATE__}</p>
        <p className="text-center text-[10px] md:text-[12px] 3xl:text-[24px]">
          © 2026 Sandra Kåhre — Designed & coded from scratch
        </p>
      </div>
      <span className="flex flex-row items-center gap-[16px]">
        <LinkedInIcon fill="var(--color-white)" size="24px" />
        <h4>/sandra-kahre</h4>
      </span>
    </footer>
  );
}
