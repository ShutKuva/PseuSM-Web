import { HubConnection } from "@microsoft/signalr";
import { FriendsFilters } from "../../enums/FriendsFilters";
import { createConnection } from "../SignalRService";
import User from "../../interfaces/User";

const GET_FRIENDS = "GetFriends";
//const UPDATE_USER = "UpdateUser";
const UPDATE_SUBSCRIPTION_TO_FRIEND_GROUP = "UpdateSubscriptionToFriendsGroup";

export const GET_FRIENDS_CLIENT = "getFriends";
export const UPDATE_USER_CLIENT = "updateUser";

export const createFriendConnection = () => {
  return createConnection("/friends");
};

export const getFriends = (
  id: number,
  friendsFilter: FriendsFilters,
  connection: HubConnection
) => {
  try {
    console.log("Get friends");
    return connection.invoke<User[]>(GET_FRIENDS, id, friendsFilter);
  } catch (error) {
    console.log(error);
  }
};

export const updateSubscriptionToFriendsGroup = (
  users: User[],
  connection: HubConnection
) => {
  return connection.send(UPDATE_SUBSCRIPTION_TO_FRIEND_GROUP, users);
};
