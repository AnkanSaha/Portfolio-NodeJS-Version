import { configureStore, combineReducers } from '@reduxjs/toolkit' // Import the configureStore and combineReducers functions from the Redux Toolkit
// import Some General App Info
import { isDevelopmentMode } from '../Keys/variables.keys' // Import the development mode checker

// Import the reducers
import GuestUsersReducers from './Slices/Guest Users' // Import the Guest Users Reducer
import SiteInfoReducers from './Slices/SiteInfo' // Import the SiteInfo Reducer

// Combine all the reducers into one
export const CombinedReducers = combineReducers({
  GuestUsers: GuestUsersReducers,
  SiteInfo: SiteInfoReducers
})
// Main store Configuration for the application
const ReduxStore = configureStore({
  devTools: isDevelopmentMode, // Enable the Redux DevTools
  reducer: CombinedReducers // Pass the root reducer to the store
}) // Create the store

export default ReduxStore // Export the store to be used by the React application
