import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

type ButtonProps = Props;

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
