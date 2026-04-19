interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
}

const baseStyle = "border-solid border-[2px] rounded-full cursor-pointer w-fit";
const sizeStyle = {
  s: "px-2 py-[2px]",
  m: "px-4 py-1",
  l: "px-8 py-2",
};
const variantStyle = {
  primary:
    "text-white bg-sage-500 border-sage-500 hover:bg-sage-600 transition-colors",
  secondary:
    "text-sage-500 border-sage-500 bg-transparent hover:bg-sage-200/75",
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
