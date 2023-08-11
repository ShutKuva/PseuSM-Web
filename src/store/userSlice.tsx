import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../interfaces/User";

export const fetchUserByJwt = createAsyncThunk(
  "user/fetchUserByJwt",
  async (thunkAPI) => {
    return (await axios.get(process.env.MAIN_API || "")).data;
  }
);

interface UserSliceInitialState {
  user: User;
}

const userSlice = createSlice<UserSliceInitialState, {}>({
  initialState: {} as UserSliceInitialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserByJwt.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
