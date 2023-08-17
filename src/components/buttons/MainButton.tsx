import { RiChatSmile2Fill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import NavButton from "../elements/NavButton";

interface Props {
  className?: string;
}

type MainButtonProps = Props;

const MainButton = (props: MainButtonProps) => {
  return (
    <NavButton
      link="/"
      className={twMerge(
        "p-4 w-16 bg-orange-900 h-full focus:outline-none text-center",
        props.className
      )}
    >
      <RiChatSmile2Fill className="text-white text-3xl" />
    </NavButton>
  );
};

export default MainButton;
