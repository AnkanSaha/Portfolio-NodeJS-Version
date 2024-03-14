/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit'

// This slice is used to store the account information
const UserInfo = createSlice({
  name: 'UserInfo',
  initialState: {
    JWT: null
  },
  reducers: {
    ModifyJWT: (state, action) => {
      state.JWT = action.payload.JWT
    }
  }
})

// Export the reducer and actions from the AccountInfo slice
export const { ModifyJWT } = UserInfo.actions // Export the action
export default UserInfo.reducer // Export the reducer from the UserInfo slice
