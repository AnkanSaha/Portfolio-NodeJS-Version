import React from "react";
import ReactDOM from "react-dom/client";
import Router from "../App.jsx";

// import Redux Provider
import { Provider } from "react-redux"; // Import React Redux Provider

// import CSS Frameworks
import "@src/css/tailwind.css"; // Import Tailwind CSS
import "daisyui"; // Import Daisy UI
import { ChakraProvider } from "@chakra-ui/react"; // Import Chakra Provider

// Create Root Element
export const Root = ReactDOM.createRoot(document.getElementById("root")); // Root Element

// Render Component
Root.render(
  <React.StrictMode>
    <Provider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
); // Render App Component with React Strict Mode
