/* eslint-disable react-refresh/only-export-components */
import { React as Service } from "react-caches"; // Import Service
import App_logo from "@public/icons/Ruppe.svg"; // API Key For IP Info API import.meta.env.VITE_IPInfoAPIKey

// Export is Development Mode
export const isDevelopmentMode = import.meta.env.DEV; // Global Development Mode
export const BACKEND_Dev_PORT = import.meta.env.DEV === true ? 5678 : 5679; // Global Development Port

// Global App Configuration
export const AppName = "Ankan Saha"; // Global App Name
export const AppLaunchDate = "19-03-2024"; // Global App Logo
export const AppLogo = App_logo; // Global App Logo
export const Live_URL =
  isDevelopmentMode === true
    ? `http://localhost:${BACKEND_Dev_PORT}`
    : window.location.origin; // Global Live URL

// Global App Owner Details
export const OwnerName = "Ankan Saha"; // Global App Owner Name
export const OwnerEmail = "ankansahaofficial@gmail.com"; // Global App Owner Email
export const OwnerLinkedIn = "theankansaha"; // Global App Owner LinkedIn
export const OwnerYoutube = "UC6vLzWN-UCHe28ZMyHkNJf91MKLt-8Eg"; // Global App Owner Youtube
export const OwnerTwitter = "theankansaha"; // Global App Owner Twitter

// Global API Call to Server Instance
export const API_Call = new Service.ClassBasedFunctions.API({
  APIBaseDomain: `${Live_URL}/api`,
  Headers: {
    "Content-Type": "application/json",
  },
});