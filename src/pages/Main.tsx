import Avatar from "../components/other/Avatar";
import FriendsSidePart from "../components/other/FriendsSidePart";
import SidePartItem from "../components/other/SidePartItem";
import SidePart from "../components/page-parts/SidePart";

interface Props {}

type MainProps = Props;

const Main = (props: MainProps) => {
  return (
    <div className="flex justify-between h-full bg-slate-200">
      <SidePart></SidePart>
      <FriendsSidePart />
    </div>
  );
};

export default Main;
