import { HubConnection, HubConnectionState } from "@microsoft/signalr";
import SidePart from "../page-parts/SidePart";
import { useEffect, useState } from "react";
import {
  GET_FRIENDS_CLIENT,
  UPDATE_USER_CLIENT,
  createFriendConnection,
  getFriends,
} from "../../services/signalR-services/FriendsSignalRService";
import User from "../../interfaces/User";
import SidePartItem from "./SidePartItem";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import { UserSliceInitialState } from "../../store/userSlice";
import { FriendsFilters } from "../../enums/FriendsFilters";

interface Props {}

type FriendsSidePartProps = Props;

const FriendsSidePart = (props: FriendsSidePartProps) => {
  const [connection, setConnection] = useState<HubConnection>();
  const [users, setUsers] = useState<{ [id: number]: User }>({});
  const { user } = useSelector<StoreState, UserSliceInitialState>(
    (state) => state.user
  );

  useEffect(() => {
    const friendConnection = createFriendConnection();

    if (friendConnection) {
      friendConnection.on(GET_FRIENDS_CLIENT, (users: User[]) => {
        const userDict: { [id: number]: User } = {};
        users.forEach((v) => {
          userDict[v.id] = v;
        });
        setUsers(users);
      });

      friendConnection.on(UPDATE_USER_CLIENT, (user: User) => {
        setUsers((state) => {
          state[user.id] = user;
          return state;
        });
      });

      friendConnection.start();

      setConnection(friendConnection);
    }

    return () => {
      connection?.stop();
    };
  }, []);

  const usersArray: User[] = [];
  for (let id in usersArray) {
    usersArray.push(users[id]);
  }

  return (
    <SidePart>
      {usersArray.map((user) => (
        <SidePartItem key={user.id}>
          <Avatar key={user.id} user={user} />
        </SidePartItem>
      ))}
    </SidePart>
  );
};

export default FriendsSidePart;
