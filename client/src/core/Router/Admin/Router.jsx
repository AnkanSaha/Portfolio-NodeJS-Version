import { Routes, Route } from "react-router-dom"; // import the React router DOM module

// Import Pages
import SkeletonPage from "../../../Pages/Skeleton"; // Import the Skeleton page
import AdminLogin from "../../../Pages/Admin/AdminLogin"; // Import the Admin Login page

// Main Router
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="*" element={<SkeletonPage />} />
    </Routes>
  );
};

export default AdminRouter; // Export the main router
