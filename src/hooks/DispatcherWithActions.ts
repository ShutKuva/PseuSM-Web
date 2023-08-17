import { useDispatch } from "react-redux";
import { StoreDispatcher } from "../store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "../store/userSlice";

export const useUserActions = () => {
  const dispatcher = useDispatch<StoreDispatcher>();

  return bindActionCreators(userActions, dispatcher);
};
