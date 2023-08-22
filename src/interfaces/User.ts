import { UserStatuses } from "../enums/UserStatuses";

export default interface User {
  id: number;
  name: string;
  login: string;
  avatarReference: string;
  status: UserStatuses;
  description: string;
}
