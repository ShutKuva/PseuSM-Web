import { twMerge } from "tailwind-merge";
import Avatar from "../other/Avatar";
import { BiSolidUpArrow } from "react-icons/bi";
import Button from "../elements/Button";
import { useMutation } from "react-query";
import { getUser } from "../../services/UserService";
import NavButton from "../elements/NavButton";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import { UserSliceInitialState } from "../../store/userSlice";
import { useEffect } from "react";
import { useUserActions } from "../../hooks/DispatcherWithActions";

interface Props {
  className?: string;
}

type AccountWidgetProps = Props;

const AccountWidget = (props: AccountWidgetProps) => {
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

  useEffect(() => {
    console.log("ObjectMutated");
    mutate(undefined);
  }, [token, mutate]);

  return (
    <div
      className={twMerge(
        `flex items-center justify-between text-white h-12 w-52`,
        props.className
      )}
    >
      {data ? (
        <>
          <Avatar user={data} />
          <div>
            <h4 className="font-bold p-0 m-0">{data.name}</h4>
            <h5 className="font-thin p-0 m-0 text-sm text-gray-300">
              {data.login}
            </h5>
          </div>
          <Button hidden>
            <BiSolidUpArrow className="text-gray-300 text-sm" />
          </Button>
        </>
      ) : (
        <div>
          <NavButton link="/login" className="mr-4">
            Login
          </NavButton>
          <NavButton link="register">Register</NavButton>
        </div>
      )}
    </div>
  );
};

export default AccountWidget;
