import { Routes, Route, BrowserRouter } from 'react-router-dom' // import the React router DOM module

// Import Pages
import HomePage from '../../Pages/Home' // Import the Home page
import ProjectsPage from '../../Pages/Projects' // Import the Projects page
import ContactPage from '../../Pages/Contact' // Import the Contact page
import GetIPDetailsPage from '../../Pages/Get IP Details' // Import the Get IP Details page
import SkeletonPage from '../../Pages/Skeleton'; // Import the Skeleton page

// Main Router
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/current-ip' element={<GetIPDetailsPage />} />
        <Route path='*' element={<SkeletonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter // Export the main router
