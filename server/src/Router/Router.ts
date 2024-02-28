import { Router, Request, Response } from 'express'; // Import the Router class from express
import { Serve, StatusCodes, Middleware } from 'outers'; // Import the methods from outers
import { StringKeys } from '../core/variables.core'; // Import the variables

// Import Middlewares
import RateLimiterMiddleware from '../Middleware/RateLimiter.middleware'; // Import Rate Limiter Middleware
import CORSMiddleware from '../Middleware/CORS.middleware'; // Import CORS Middleware

// Create a new Router instance
const Routing = Router(); // This is the main router

// Attach Middlewares
Routing.use(RateLimiterMiddleware); // Attach Rate Limiter Middleware
Routing.use(CORSMiddleware); // Attach CORS Middleware and CORS Options

// Attach Security middlewares to protect API endpoints
// Create URL Hostname
const { hostname } = new URL(StringKeys.CORS_URL); // Create URL Hostname

// Setup Security Middlewares to protect from attacks
Routing.use(Middleware.MethodsController(StringKeys.Allowed_Methods)); // Only Allow Specific Methods

Routing.use(Middleware.AccessController([hostname])); // Only Allow Specific Hostname to Access API

Routing.use(Middleware.RequestInjectIP(['POST', 'PUT', 'DELETE'])); // Inject IP Address to Request Body

// All Routes

// If All Routes not found
Routing.all('*', (Request: Request, Response: Response) => {
	Serve.JSON({
		response: Response,
		status: false,
		statusCode: StatusCodes.NOT_FOUND,
		Title: ' Route Not Found',
		message: 'The route you are looking for is not found',
		data: {
			Path: Request.url,
			HostName: Request.hostname,
			Method: Request.method,
			IP: Request.ip,
			Time: new Date().toISOString(),
			HTTP_Version: Request.httpVersion,
		},
		contentType: 'application/json',
	});
});

// Export the Router
export default Routing; // Export the main router
