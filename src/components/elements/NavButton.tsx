import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  link: string;
}

type NavButtonProps = Props;

const NavButton = (props: NavButtonProps) => {
  return (
    <Link className={props.className} to={props.link}>
      <button type="button">{props.children}</button>
    </Link>
  );
};

export default NavButton;
