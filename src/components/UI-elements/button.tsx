import "./button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
}

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
    <button onClick={onClick} className={`btn-${size} ${variant}`}>
      {labelElement}
    </button>
  );
}
