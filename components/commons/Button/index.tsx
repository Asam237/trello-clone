interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const ButtonComponent = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${variant}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonComponent;
