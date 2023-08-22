import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DropDownAvatarMenuProps {
  hidden?: boolean;
  className?: string;
  children?: ReactNode;
}

const DropDownAvatarMenu = (props: DropDownAvatarMenuProps) => {
  const { hidden, className, children } = props;

  return (
    <div hidden={hidden} className={twMerge(className)}>
      {children}
    </div>
  );
};

export default DropDownAvatarMenu;
