import CORS from 'cors'; // Import CORS from cors
import { StringKeys, AllowedHeadersInCORS, AllExposedHeadersInCORS } from '../core/variables.core'; // Import StringKeys from keys
import { StatusCodes } from 'outers'; // Import StatusCodes from outers

// Export CORS Config as Middleware
export default CORS({
	origin: StringKeys.CORS_URL, // Origin is the URL of the server that will be allowed to access the resources.
	credentials: true, // Credentials are cookies, authorization headers or TLS client certificates.
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Methods are the HTTP methods that are allowed to access the resources.
	maxAge: 86400, // MaxAge is the maximum age (in seconds) of the cache duration for preflight requests.
	preflightContinue: false, // PreflightContinue determines whether the middleware will process the request after a preflight request even if the request's method is not a valid HTTP method.
	optionsSuccessStatus: StatusCodes.NO_CONTENT, // OptionsSuccessStatus specifies the response status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
	allowedHeaders: AllowedHeadersInCORS, // AllowedHeaders is an array of headers that are allowed in a request.
	exposedHeaders: AllExposedHeadersInCORS, // ExposedHeaders indicates which headers are safe to expose to the API of a CORS API specification
}); // Export CORS Config as Middleware
