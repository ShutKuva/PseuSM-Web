import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccessToken } from "../interfaces/AccessToken";
import User from "../interfaces/User";

export interface UserSliceInitialState {
  token: AccessToken;
  user: User;
}

const userSlice = createSlice({
  initialState: {} as UserSliceInitialState,
  name: "user",
  reducers: {
    setToken: (
      state: UserSliceInitialState,
      action: PayloadAction<AccessToken>
    ) => {
      state.token = action.payload;
    },
    setUser: (state: UserSliceInitialState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setToken, setUser } = userSlice.actions;
export const userActions = userSlice.actions;
