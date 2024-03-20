import { Request, Response } from 'express'; // Import express types
import { ClassBased, StatusCodes, Console } from 'outers'; // Import outer types

// import Keys
import { StringKeys } from '../../core/variables.core'; // Import Keys

// Main Function
export default async function AdminLogin(Request: Request, Response: Response) {
	// Register Response
	const InternalError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error'); // Internal Server Error
	const Missing = new ClassBased.Response.JSON(Response, StatusCodes.BAD_REQUEST, 'json', 'Missing Required Fields'); // Missing Required Fields
	const MisMatch = new ClassBased.Response.JSON(Response, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED, 'json', 'Invalid ADMIN_PASSWORD'); // Invalid ADMIN_PASSWORD
	try {
		// Destructure the Request Body
		const { ADMIN_PASSWORD } = Request.body; // Destructure the Request Body
		
		// Check if ADMIN_PASSWORD is not provided
		if (ADMIN_PASSWORD === undefined || ADMIN_PASSWORD === null || ADMIN_PASSWORD === '') {
			return Missing.Send(undefined, 'ADMIN_PASSWORD is required.'); // Send Missing Required Fields
		}
		console.log(StringKeys.ADMIN_PASSWORD)
		// Check if ADMIN_PASSWORD is matching with the ADMIN_PASSWORD provided by system or not
		if (StringKeys.ADMIN_PASSWORD.toLowerCase() !== ADMIN_PASSWORD.toLowerCase()) {
			return MisMatch.Send(undefined, 'ADMIN_PASSWORD is not matching with the ADMIN_PASSWORD provided by system.'); // Send Invalid ADMIN_PASSWORD
		}

		// Send Internal Request to generate the token
		const Response = await new ClassBased.API('http://localhost:5678').Get('/get/auth/generate-JWT-Token')
		console.log(Response);
	} catch (error) {
		Console.red(error); // Log Error
		return InternalError.Send(undefined, 'Internal Server Error Occurred while processing the request.'); // Send Internal Server Error
	}
}
