import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: [],
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatcher = typeof store.dispatch;