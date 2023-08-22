import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge("focus:outline-none", props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
