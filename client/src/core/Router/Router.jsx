import { Routes, Route, BrowserRouter } from 'react-router-dom' // import the React router DOM module

// Import Pages
import HomePage from '../../Pages/Home' // Import the Home page

// Main Router
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter // Export the main router
