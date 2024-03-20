import { Router } from 'express'; // Import the Router class from express

// Initialize the Router
const AdminInfo = Router(); // Create a new Router

// Import Services
import GetAllRequestLogs from '../../../Services/Admin/GetLogs.Admin'; // Get all Request Logs

// Handle the GET Requests
AdminInfo.get('/get-all-http-Logs', GetAllRequestLogs); // Handle the GET Request

// Export the Router
export default AdminInfo; // Export the Router
