import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

const Button = ({ color, children }: ButtonProps) => {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button
      style={{ backgroundColor: color, color: "#fff" }}
      onClick={() => increment()}
    >
      {children} <strong>{counter}</strong>
    </button>
  );
};

export default Button;
