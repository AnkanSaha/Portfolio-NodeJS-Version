/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

// This slice is used to store the account information
const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    JWT: null,
    IsLoading: false,
    IP_Details: null,
  },
  reducers: {
    ModifyJWT: (state, action) => {
      state.JWT = action.payload.JWT;
    },
    ModifyIsLoading: (state, action) => {
      state.IsLoading = action.payload.IsLoading;
    },
    ModifyIPDetails: (state, action) => {
      state.IP_Details = action.payload.IP_Details;
    },
  },
});

// Export the reducer and actions from the AccountInfo slice
export const { ModifyJWT, ModifyIsLoading, ModifyIPDetails } = UserInfo.actions; // Export the action
export default UserInfo.reducer; // Export the reducer from the UserInfo slice
