import { Router } from 'express'; // Import the Router class from express

// Initialize the Router
const Authenticate = Router(); // Create a new Router

// Import Services
import GenerateJWT from '../../Services/Auth/JWT Generator.service'; // Import the getIPDetails Service

// Handle the GET Requests
Authenticate.get('/generate-JWT-Token', GenerateJWT); // Handle the GET Request

// Export the Router
export default Authenticate; // Export the Router
