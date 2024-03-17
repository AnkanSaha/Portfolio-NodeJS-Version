import React from "react";
import ReactDOM from "react-dom/client";
import MainLinker from "./Linker"; // Import the Main Entry File

// Create Root Element
export const Root = ReactDOM.createRoot(document.getElementById("root")); // Root Element

// Render Component
Root.render(
  <React.StrictMode>
    <MainLinker />
  </React.StrictMode>
); // Render App Component with React Strict Mode
