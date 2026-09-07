interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const baseStyle =
  "border-solid border-[2px] rounded-full cursor-pointer w-fit transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100";
const sizeStyle = {
  s: "px-2 py-[2px]",
  m: "px-4 py-1",
  l: "px-8 py-2",
};
const variantStyle = {
  primary:
    "text-white bg-sage-500 border-sage-500 hover:bg-sage-600 active:bg-sage-600",
  secondary:
    "text-sage-500 border-sage-500 bg-transparent hover:bg-sage-200/75 active:bg-sage-200",
};

export default function Button({
  label,
  onClick,
  size = "m",
  variant = "primary",
  disabled = false,
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
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]}`}
    >
      {labelElement}
    </button>
  );
}
