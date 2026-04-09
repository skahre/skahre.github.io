import LinkedInIcon from "../../assets/linkedin.tsx";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-espresso text-white p-[36px] md:px-[96px] md:py-[36px] 3xl:px:[176px] 3xl:py-[48px] max-sm:gap-[24px]">
      <h3>Let's work together!</h3>
      <p>last updated March 2026</p>
      <span className="flex flex-row items-center gap-[16px]">
        <LinkedInIcon fill="var(--color-white)" size="24px" />
        <h4>/sandra-kahre</h4>
      </span>
    </footer>
  );
}
