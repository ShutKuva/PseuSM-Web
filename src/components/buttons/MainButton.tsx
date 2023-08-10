import { IconContext } from "react-icons";
import { RiChatSmile2Fill } from "react-icons/ri";

interface Props {}

type MainButtonProps = Props;

const MainButton = (props: MainButtonProps) => {
  return (
    <button className="p-4 bg-orange-900">
      <IconContext.Provider value={{ className: "text-white text-5xl" }}>
        <RiChatSmile2Fill />
      </IconContext.Provider>
    </button>
  );
};

export default MainButton;
