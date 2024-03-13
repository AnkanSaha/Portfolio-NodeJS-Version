import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './Router/Router'

// import Redux Provider
import { Provider } from 'react-redux' // Import React Redux Provider

// import CSS Frameworks
import '../css/tailwind.css' // Import Tailwind CSS
import 'daisyui' // Import Daisy UI
import { ChakraProvider } from '@chakra-ui/react' // Import Chakra Provider

// Create Root Element
export const Root = ReactDOM.createRoot(document.getElementById('root')) // Root Element

// Render Component
Root.render(
  <React.StrictMode>
    <Provider>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
) // Render App Component with React Strict Mode
