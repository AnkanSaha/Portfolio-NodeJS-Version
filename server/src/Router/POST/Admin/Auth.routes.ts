import { Router } from 'express'; // Import the Router class from express

// Initialize the Router
const AdminAuth = Router(); // Create a new Router

// Import Services
import AdminLogin from '../../../Services/Admin/Login.Admin'; // Import the AdminLogin Service

// Handle the POST Requests
AdminAuth.post('/login', AdminLogin); // Handle the POST Request for Admin Login

// Export the Router
export default AdminAuth; // Export the Router
