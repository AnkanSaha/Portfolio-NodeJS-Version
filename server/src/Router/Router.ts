import { Router, Request, Response } from 'express'; // Import the Router class from express
import { Serve, StatusCodes } from 'outers'; // Import the methods from outers

// Import Middlewares
import RateLimiterMiddleware from '../Middleware/RateLimiter.middleware'; // Import Rate Limiter Middleware

// Create a new Router instance
const Routing = Router(); // This is the main router

// Attach Middlewares
Routing.use(RateLimiterMiddleware); // Attach Rate Limiter Middleware

// All Routes
Routing.post('/', (Request: Request, Response: Response) => {
	console.log(Request.hostname);
	Response.json(Request.body);
});

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
