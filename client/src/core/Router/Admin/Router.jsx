import { Routes, Route, BrowserRouter } from "react-router-dom"; // import the React router DOM module

// Import Pages
import SkeletonPage from "../../../Pages/Skeleton"; // Import the Skeleton page

// Main Router
const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SkeletonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter; // Export the main router
