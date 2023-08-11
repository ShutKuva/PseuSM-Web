import { twMerge } from "tailwind-merge";
import Avatar from "../other/Avatar";
import { BiSolidUpArrow } from "react-icons/bi";
import Button from "../elements/Button";
import User from "../../interfaces/User";

interface Props {
  className?: string;
  user: User;
}

type AccountWidgetProps = Props;

const AccountWidget = (props: AccountWidgetProps) => {
  return (
    <div
      className={twMerge(
        `flex items-center justify-between text-white h-12 w-52`,
        props.className
      )}
    >
      <Avatar user={props.user} />
      <div>
        <h4 className="font-bold p-0 m-0">{props.user.name}</h4>
        <h5 className="font-thin p-0 m-0 text-sm text-gray-300">
          {props.user.login}
        </h5>
      </div>
      <Button hidden>
        <BiSolidUpArrow className="text-gray-300 text-sm" />
      </Button>
    </div>
  );
};

export default AccountWidget;
