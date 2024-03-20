import { Router, Request, Response } from 'express'; // Import the Router class from express
import { Serve, StatusCodes, Middleware } from 'outers'; // Import the methods from outers
import { StringKeys } from '../core/variables.core'; // Import the variables

// Import Middlewares
import RateLimiterMiddleware from '../Middleware/RateLimiter.middleware'; // Import Rate Limiter Middleware
import CORSMiddleware from '../Middleware/CORS.middleware'; // Import CORS Middleware

// Import Sub Routes for Client
import Authenticate from './GET/Auth.routes'; // Import the Auth Routes
import General from './GET/General.routes'; // Import the General Routes
import RegisterRequest from './POST/Request.routes'; // Import the Request Routes

// Import Sub Routes for Admin
import AdminAuth from './POST/Admin/Auth.routes'; // Import the Admin Auth Routes
import AdminInfo from './GET/Admin/Info.routes'; // Import the Admin Info Routes

// Create a new Router instance
const Routing = Router(); // This is the main router

// Attach Middlewares
Routing.use(RateLimiterMiddleware); // Attach Rate Limiter Middleware
Routing.use(CORSMiddleware); // Attach CORS Middleware and CORS Options

// Attach Security middlewares to protect API endpoints

// Setup Security Middlewares to protect from attacks
Routing.use(Middleware.MethodsController(StringKeys.Allowed_Methods)); // Only Allow Specific Methods

Routing.use(Middleware.URL_Controller([new URL(StringKeys.CORS_URL).hostname])); // Only Allow Specific Hostname to Access API

Routing.use(Middleware.RequestInjectIP(['POST', 'PUT', 'DELETE'])); // Inject IP Address to Request Body

Routing.use(Middleware.RequestLogger(true, true, true, true, true)); // Log all Requests

// All Routes for Client
Routing.use('/get/auth', Authenticate); // Attach the Auth Routes
Routing.use('/get/general', General); // Attach the General Routes
Routing.use('/post/request', RegisterRequest); // Attach the Request Routes

// All Routes for Admin
Routing.use('/post/AdminAuth', AdminAuth); // Attach the Admin Auth Routes
Routing.use('/get/AdminInfo', AdminInfo); // Attach the Admin Info Routes

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
