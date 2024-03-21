/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit'

// Main Slices
const SiteInfo = createSlice({
  name: 'SiteInfo',
  initialState: {
    Certificates: [],
    Education: [],
    Skills: [],
    Projects: []
  },
  reducers: {
    ModifyCertificates: (states, action) => {
      states.Certificates = action.payload // Overwrite the existing
    },

    ModifyEducation: (states, action) => {
      states.Education = action.payload // Overwrite the existing
    },

    ModifySkills: (states, action) => {
      states.Skills = action.payload // Overwrite the existing
    },

    ModifyProjects: (states, action) => {
      states.Projects = action.payload // Overwrite the existing
    }
  }
})

// Exports
export const { ModifyCertificates, ModifyEducation, ModifySkills, ModifyProjects } = SiteInfo.actions // Export All Actions
export default SiteInfo.reducer // Export All Reducers
