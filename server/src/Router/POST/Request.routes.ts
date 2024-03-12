import { Router } from 'express'; // Import the Router class from express

// Import Middlewares
import { Middleware } from 'outers'; // Import the Middleware from outers

// Import Keys
import { StringKeys } from '../../core/variables.core'; // Import the variables

// Initialize the Router
const Request = Router(); // Create a new Router

// Import Services
import RegisterRequest from '../../Services/General/Register Request'; // Import the RegisterRequest Service

// Handle the POST Requests
Request.post('/CreateNewRequest', Middleware.JWTValidator('sessionid', StringKeys.JWT_SECRET), RegisterRequest); // Handle the RegisterRequest Request

// Export the Router
export default Request; // Export the Router
