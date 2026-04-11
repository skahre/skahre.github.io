interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
}

const baseStyle =
  "border-solid border-orange border-[2px] rounded-full cursor-pointer w-fit";
const sizeStyle = {
  s: "px-[8px] py-[2px]",
  m: "px-[16px] py-[4px]",
  l: "px-[32px] py-[8px]",
};
const variantStyle = {
  primary: "text-white bg-orange",
  secondary: "text-orange bg-transparent",
};

export default function Button({
  label,
  onClick,
  size = "m",
  variant = "primary",
}: ButtonProps) {
  const labelElement =
    size === "s" ? (
      <p>{label}</p>
    ) : size === "l" ? (
      <h2>{label}</h2>
    ) : (
      <h4>{label}</h4>
    );

  return (
    <div
      onClick={onClick}
      className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]}`}
    >
      {labelElement}
    </div>
  );
}
