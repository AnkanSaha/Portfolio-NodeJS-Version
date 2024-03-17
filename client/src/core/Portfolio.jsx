import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLinker from './Linker' // Import the Main Entry File

// import Redux Provider
import { Provider } from 'react-redux' // Import React Redux Provider
import ReduxStore from './Redux/Store' // Import Redux Store

// Create Root Element
export const Root = ReactDOM.createRoot(document.getElementById('root')) // Root Element

// Render Component
Root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <MainLinker />
    </Provider>
  </React.StrictMode>
) // Render App Component with React Strict Mode
