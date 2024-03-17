/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

// This slice is used to store the account information
const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    JWT: "vervuyrevue",
    IsLoading: false,
    IP_Details: null,
  },
  reducers: {
    ModifyJWT: (state, action) => {
      state.JWT = action.payload;
    },
    ModifyIsLoading: (state, action) => {
      state.IsLoading = action.payload;
    },
    ModifyIPDetails: (state, action) => {
      state.IP_Details = action.payload;
    },
  },
});

// Export the reducer and actions from the AccountInfo slice
export const { ModifyJWT, ModifyIsLoading, ModifyIPDetails } = UserInfo.actions; // Export the action
export default UserInfo.reducer; // Export the reducer from the UserInfo slice
