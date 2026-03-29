export default function Arrow({
  fill,
  height,
}: {
  fill: string;
  height: string;
}) {
  return (
    <svg
      height={height}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.77855 4.87238L1.32063 0.194166C0.801694 -0.250638 0 0.118089 0 0.801571V9.32282C0 10.0063 0.801694 10.375 1.32063 9.93022L6.77855 5.25201C6.89495 5.15224 6.89495 4.97215 6.77855 4.87238Z"
        fill={fill}
      />
    </svg>
  );
}
