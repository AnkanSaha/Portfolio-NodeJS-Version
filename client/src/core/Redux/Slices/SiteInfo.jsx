/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";


// Main Slices
const SiteInfo = createSlice({
  name: "SiteInfo",
  initialState: {
    Certificates: [],
  },
  reducers: {
    ModifyCertificates : (states, action) => {
      states.Certificates = action.payload; // Overwrite the existing
    }
  },
})

// Exports
export const { ModifyCertificates } = SiteInfo.actions; // Export All Actions
export default SiteInfo.reducer; // Export All Reducers