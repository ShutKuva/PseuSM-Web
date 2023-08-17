import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

const mergedReducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: mergedReducers,
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatcher = typeof store.dispatch;

export { store };
