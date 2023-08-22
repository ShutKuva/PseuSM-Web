import { twMerge } from "tailwind-merge";
import Avatar from "../other/Avatar";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import Button from "../elements/Button";
import { useMutation } from "react-query";
import { getUser } from "../../services/UserService";
import NavButton from "../elements/NavButton";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import { UserSliceInitialState } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { useUserActions } from "../../hooks/DispatcherWithActions";
import DropDownAvatarMenu from "../other/DropDownAvatarMenu";
import DropDownAvatarMenuItem from "../other/DropDownAvatarMenuItem";

interface AccountWidgetProps {
  className?: string;
}

const AccountWidget = (props: AccountWidgetProps) => {
  const { className } = props;
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const { setUser } = useUserActions();
  const { data, mutate } = useMutation({
    mutationFn: getUser,
    retry: false,
    onSuccess: (user) => {
      if (user) {
        setUser(user);
      }
    },
  });
  const { token } = useSelector<StoreState, UserSliceInitialState>(
    (state) => state.user
  );

  const menuShowHandler = () => {
    setIsMenuCollapsed((state) => !state);
  };

  useEffect(() => {
    console.log("ObjectMutated");
    mutate(undefined);
  }, [token, mutate]);

  if (data) {
    const { id, login, name } = data;

    return (
      <div className="h-full">
        <div
          className={twMerge("flex items-center text-white h-full", className)}
        >
          <NavButton link={`/user/${id}`} className="flex items-center">
            <Avatar user={data} className="mr-5" />
            <div className="mr-5 text-left">
              <h4 className="font-bold p-0 m-0">{name}</h4>
              <h5 className="font-thin p-0 m-0 text-sm text-gray-300">
                {login}
              </h5>
            </div>
          </NavButton>
          <Button onClick={menuShowHandler}>
            {isMenuCollapsed ? (
              <BiSolidDownArrow className="text-gray-300 text-sm" />
            ) : (
              <BiSolidUpArrow className="text-gray-300 text-sm" />
            )}
          </Button>
        </div>

        <DropDownAvatarMenu
          hidden={!isMenuCollapsed}
          className="relative z-50 drop-shadow-xl"
        >
          <DropDownAvatarMenuItem text="Test" />
          <DropDownAvatarMenuItem text="Test" />
          <DropDownAvatarMenuItem text="Test" />
        </DropDownAvatarMenu>
      </div>
    );
  } else {
    return (
      <div className="text-white">
        <NavButton link="/login" className="mr-4">
          Login
        </NavButton>
        <NavButton link="register">Register</NavButton>
      </div>
    );
  }
};

export default AccountWidget;
