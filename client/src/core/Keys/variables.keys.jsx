/* eslint-disable react-refresh/only-export-components */
import { React as Service } from 'react-caches' // Import Service
import Loading from '../../Assets/Images/loading.gif' // Import Loading GIF

// Export is Development Mode
export const isDevelopmentMode = import.meta.env.DEV // Global Development Mode
export const BACKEND_Dev_PORT = import.meta.env.DEV === true ? 5678 : 5679 // Global Development Port

// Global App Configuration
export const AppName = 'Ankan Saha' // Global App Name
export const AppLaunchDate = '19-03-2024' // Global App Logo
export const Live_URL =
  isDevelopmentMode === true
    ? `http://localhost:${BACKEND_Dev_PORT}`
    : window.location.origin // Global Live URL

// Global API Call to Server Instance
export const API_Call = new Service.ClassBasedFunctions.API({
  APIBaseDomain: `${Live_URL}/api`,
  Headers: {
    'Content-Type': 'application/json'
  }
})

// Export the Loading GIF
export const LoadingGIF = Loading // Global Loading GIF
