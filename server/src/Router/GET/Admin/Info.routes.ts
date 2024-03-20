import { Router } from 'express'; // Import the Router class from express

// Import Middlewares
import { Middleware } from 'outers'; // Import the methods from outers

// Import keys
import { StringKeys } from '../../../core/variables.core'; // Import the keys

// Initialize the Router
const AdminInfo = Router(); // Create a new Router

// Import Services
import GetAllRequestLogs from '../../../Services/Admin/GetLogs.Admin'; // Get all Request Logs

// Handle the GET Requests
AdminInfo.get('/get-all-http-Logs', Middleware.JWTValidator('sessionid', StringKeys.JWT_SECRET), GetAllRequestLogs); // Handle the GET Request

// Export the Router
export default AdminInfo; // Export the Router
