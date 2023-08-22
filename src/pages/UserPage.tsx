import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../services/UserService";
import Button from "../components/elements/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../store/store";
import { UserSliceInitialState } from "../store/userSlice";

interface Props {}

type UserPageProps = Props;

const UserPage = (props: UserPageProps) => {
  const { userId } = useParams();
  const { data, isLoading, refetch } = useQuery({
    queryFn: () => {
      return getUser(userId ? +userId : undefined);
    },
    retry: false,
  });

  const currentUserId = useSelector<StoreState, UserSliceInitialState>(
    (state) => state.user
  ).user?.id;

  useEffect(() => {
    refetch();
  }, [userId]);

  if (data) {
    const { avatarReference, name, login } = data;

    return (
      <div className="m-10 h-80 flex flex-col-reverse bg-slate-700 relative">
        <img
          src="https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg"
          alt="User background"
          className="z-1 absolute h-full w-full"
        />
        <div className="box-border w-full bg-white relative h-24">
          <img
            src={avatarReference}
            alt="Avatar"
            className="h-28 w-28 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border-4"
          />
          <div
            hidden={!userId || +userId === currentUserId}
            className="absolute right-10 -top-7"
          >
            <Button className="user-page-action-button bg-blue-500">
              <AiOutlineUserAdd />
            </Button>
            <Button className="user-page-action-button bg-purple-500">
              <BiChat />
            </Button>
            <Button className="user-page-action-button bg-orange-500">
              <RiSettings4Line />
            </Button>
          </div>
          <div className="flex items-center h-full justify-around">
            <div className="text-center">
              <h3 className="text-2xl">{name}</h3>
              <h4 className="text-gray-700">{login}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  return <>User was not fetched</>;
};

export default UserPage;
