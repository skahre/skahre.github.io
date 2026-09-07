import { Link } from "react-router-dom";

interface BaseButtonProps {
  label: string;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

interface ButtonAsButton extends BaseButtonProps {
  onClick: () => void;
  to?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  to: string;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyle =
  "border-solid border-[2px] rounded-full cursor-pointer w-fit transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 inline-block";
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
  size = "m",
  variant = "primary",
  disabled = false,
  ...rest
}: ButtonProps) {
  const labelElement =
    size === "s" ? (
      <p>{label}</p>
    ) : size === "l" ? (
      <h2>{label}</h2>
    ) : (
      <h4>{label}</h4>
    );

  const className = `${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]}`;

  if ("to" in rest && rest.to) {
    if (disabled) {
      return (
        <span className={className} aria-disabled="true">
          {labelElement}
        </span>
      );
    }
    return (
      <Link to={rest.to} className={className}>
        {labelElement}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={rest.onClick}
      disabled={disabled}
      className={className}
    >
      {labelElement}
    </button>
  );
}
