import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  link: string;
  className?: string;
}

const NavButton = (props: NavButtonProps) => {
  const { children, className, link } = props;

  return (
    <Link to={link}>
      <button type="button" className={className}>
        {children}
      </button>
    </Link>
  );
};

export default NavButton;
