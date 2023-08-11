import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

type InputProps = Props;

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
