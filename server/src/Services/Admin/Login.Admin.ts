import { Request, Response } from 'express'; // Import express types
import { ClassBased, StatusCodes, Console } from 'outers'; // Import outer types

// import Keys
import { StringKeys } from '../../core/variables.core'; // Import Keys

// import Another Function to Generate Token
import GenerateJWT from '../Auth/JWT Generator.service'; // Import Another Function to Generate Token

// Main Function
export default async function AdminLogin(Request: Request, Response: Response) {
	// Register Response
	const InternalError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error'); // Internal Server Error
	const Missing = new ClassBased.Response.JSON(Response, StatusCodes.BAD_REQUEST, 'json', 'Missing Required Fields'); // Missing Required Fields
	const MisMatch = new ClassBased.Response.JSON(Response, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED, 'json', 'Invalid Admin Password'); // Invalid ADMIN_PASSWORD
	try {
		// Destructure the Request Body
		const { ADMIN_PASSWORD } = Request.body; // Destructure the Request Body

		// Check if ADMIN_PASSWORD is not provided
		if (ADMIN_PASSWORD === undefined || ADMIN_PASSWORD === null || ADMIN_PASSWORD === '') {
			return Missing.Send(undefined, 'ADMIN_PASSWORD is required.'); // Send Missing Required Fields
		}

		// Check if ADMIN_PASSWORD is matching with the ADMIN_PASSWORD provided by system or not
		if (StringKeys.ADMIN_PASSWORD.toLowerCase() !== ADMIN_PASSWORD.toLowerCase()) {
			return MisMatch.Send(undefined, 'This Password is not matching with that provided by system.'); // Send Invalid ADMIN_PASSWORD
		}

		// Pass the Request to GenerateJWT Function
		await GenerateJWT(Request, Response); // Pass the Request to GenerateJWT Function
	} catch (error) {
		Console.red(error); // Log Error
		return InternalError.Send(undefined, 'Internal Server Error Occurred while processing the request.'); // Send Internal Server Error
	}
}
