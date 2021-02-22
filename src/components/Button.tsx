interface ButtonProps {
  color: string;
  children: string;
}

const Button = ({ color, children }: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};

export default Button;
