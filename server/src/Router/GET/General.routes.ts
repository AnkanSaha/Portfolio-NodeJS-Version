import { Router } from 'express'; // Import the Router class from express
// Import Middlewares
import { Middleware } from 'outers'; // Import the Middleware from outers
// Import Keys
import { StringKeys } from '../../core/variables.core'; // Import the variables

// Initialize the Router
const General = Router(); // Create a new Router

// Import Services
import GetIPDetails from '../../Services/General/Get IP Details'; // Import the getIPDetails Service

// Handle the GET Requests
General.get('/get-ip-details', Middleware.JWTValidator('sessionid', StringKeys.JWT_SECRET), GetIPDetails); // Get IP Details

// Export the Router
export default General; // Export the Router
