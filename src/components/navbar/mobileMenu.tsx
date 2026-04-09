import Cross from "../../assets/cross";

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <div className="min-[880px]:hidden flex flex-col items-center w-full h-full fixed inset-0 box-border bg-[color-mix(in_srgb,var(--color-espresso)_85%,transparent)] text-white gap-[64px] p-[36px]">
      <div className="flex flex-row items-center justify-between w-full">
        <h2>Sandra Kåhre</h2>
        <div onClick={() => onClick()}>
          <Cross />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[36px]">
        <h2>Home</h2>
        <h2>Projects</h2>
        <h2>Experience</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
