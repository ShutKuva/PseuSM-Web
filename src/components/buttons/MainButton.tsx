import { RiChatSmile2Fill } from "react-icons/ri";
import Button from "../elements/Button";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

type MainButtonProps = Props;

const MainButton = (props: MainButtonProps) => {
  return (
    <Button className={twMerge("p-4 bg-orange-900 h-full", props.className)}>
      <RiChatSmile2Fill className="text-white text-3xl" />
    </Button>
  );
};

export default MainButton;
