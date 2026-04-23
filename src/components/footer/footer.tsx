import LinkedInIcon from "../../assets/linkedin.tsx";

function waveBorder() {
  return (
    <svg
      width="1024"
      height="96"
      viewBox="0 0 5257 1399"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1399V1168.49C0 1168.49 298.738 1087.52 632.558 1128C966.379 1168.49 1163.06 1198.26 1632.96 1125.91C2102.86 1053.56 2560 1168.49 2560 1168.49V1399H0Z"
        fill="#3B5638"
      />
      <path
        d="M2624 474V328.087C2624 328.087 2773.37 276.832 2940.28 302.46C3107.19 328.088 3205.53 346.93 3440.48 301.133C3675.43 255.336 3904 328.087 3904 328.087V474H2624Z"
        fill="#3B5638"
      />
      <path
        d="M3575 335V73.4438C3575 73.4438 3714.22 -18.4348 3869.78 27.5048C4025.35 73.4444 4117 107.22 4335.98 25.1271C4554.96 -56.966 4768 73.4438 4768 73.4438V335H3575Z"
        fill="#3B5638"
      />
      <path
        d="M4120 558V340.683C4120 340.683 4260.5 264.345 4417.5 302.514C4574.5 340.684 4667 368.747 4888 300.539C5109 232.331 5324 340.683 5324 340.683V558H4120Z"
        fill="#3B5638"
      />
    </svg>
  );
}

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
