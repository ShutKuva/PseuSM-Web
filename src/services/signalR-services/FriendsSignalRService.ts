import { HubConnection } from "@microsoft/signalr";
import { FriendsFilters } from "../../enums/FriendsFilters";
import { createConnection } from "../SignalRService";
import User from "../../interfaces/User";

const GET_FRIENDS = "GetFriends";
//const UPDATE_USER = "UpdateUser";
const UPDATE_SUBSCRIPTION_TO_FRIEND_GROUP = "UpdateSubscriptionToFriendsGroup";

export const GET_FRIENDS_CLIENT = "getFriends";
export const UPDATE_USER_CLIENT = "updateUser";

interface CreateFriendConnectionParameters {
  onGetFriendsClient?: (users: User[]) => void;
  onUpdateUserClient?: (user: User) => void;
}

export const createFriendConnection = (
  parameters: CreateFriendConnectionParameters
) => {
  const { onGetFriendsClient, onUpdateUserClient } = parameters;

  const friendConnection = createConnection("/friends");

  if (!friendConnection) {
    return undefined;
  }

  if (onGetFriendsClient) {
    friendConnection.on(GET_FRIENDS_CLIENT, onGetFriendsClient);
  }

  if (onUpdateUserClient) {
    friendConnection.on(UPDATE_USER_CLIENT, onUpdateUserClient!);
  }

  return friendConnection;
};

export const getFriends = (
  friendsFilter: FriendsFilters,
  connection: HubConnection
) => {
  try {
    return connection.invoke<User[]>(GET_FRIENDS, friendsFilter);
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
