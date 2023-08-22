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
import { FriendsFilters } from "../../enums/FriendsFilters";

interface FriendsSidePartProps {}

const FriendsSidePart = (props: FriendsSidePartProps) => {
  const [connection, setConnection] = useState<HubConnection>();
  const [users, setUsers] = useState<{ [id: number]: User }>({});

  const setMappedUsers: (users: User[]) => void = (users) => {
    const userDict: { [id: number]: User } = {};
    users.forEach((v) => {
      userDict[v.id] = v;
    });
    setUsers(userDict);
  };

  useEffect(() => {
    const friendConnection = createFriendConnection({
      onGetFriendsClient: (users) => {
        setMappedUsers(users);
      },
      onUpdateUserClient(user) {
        setUsers((state) => {
          state[user.id] = user;
          return state;
        });
      },
    });

    if (friendConnection) {
      friendConnection.start().then(() => {
        if (friendConnection.state === HubConnectionState.Connected) {
          setConnection(friendConnection);
        }
      });
    }

    return () => {
      connection?.stop();
    };
  }, []);

  useEffect(() => {
    if (connection && connection.state === HubConnectionState.Connected) {
      console.log(connection);
      getFriends(FriendsFilters.All, connection);
    }
  }, [connection]);

  const usersArray: User[] = [];
  for (let id in users) {
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
