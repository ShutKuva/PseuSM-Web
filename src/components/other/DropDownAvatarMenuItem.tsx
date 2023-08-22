import { ButtonHTMLAttributes } from "react";
import Button from "../elements/Button";

interface DropDownAvatarMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const DropDownAvatarMenuItem = (props: DropDownAvatarMenuItemProps) => {
  const { text } = props;

  return (
    <Button
      {...props}
      className="z-50 relative block w-40 text-left px-8 py-2 bg-gray-200 hover:bg-gray-800 hover:text-white duration-75"
    >
      {text}
    </Button>
  );
};

export default DropDownAvatarMenuItem;
