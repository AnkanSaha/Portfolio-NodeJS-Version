import { Routes, Route, BrowserRouter } from 'react-router-dom' // import the React router DOM module

// Import Pages
import HomePage from '../../Pages/Home'; // Import the Home page
import ProjectsPage from '../../Pages/Projects'; // Import the Projects page

// Main Router
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter // Export the main router
