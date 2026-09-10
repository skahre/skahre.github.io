const buttontyles = `
  group
  flex flex-col items-center gap-2
  rounded-3xl p-5
  bg-sage-100
  h4 text-center font-semibold
  shadow-md

  transition-all duration-200 ease-out
  hover:-translate-y-1 hover:rotate-[0.5deg]
  hover:bg-sage-200 hover:shadow-lg

  active:translate-y-0 active:scale-[0.97] active:shadow-sm

  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-sage-500
`;

interface AppButtonProps {
  href: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function AppButton({ href, text, icon }: AppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttontyles}
    >
      {text && text}
      {icon && (
        <span className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-2">
          {icon}
        </span>
      )}
    </a>
  );
}
