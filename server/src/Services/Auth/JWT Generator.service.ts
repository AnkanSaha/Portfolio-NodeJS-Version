import { Request, Response } from 'express'; // Importing express types
import { methods, Console, StatusCodes } from 'outers'; // Import Methods from outers
import { StringKeys } from '../../core/variables.core'; // Import the variables

// Import Utility Functions
import IP_Details from '../../utility/IP Details.utils'; // Import IP_Details utility function

// Main Function
export default async function GenerateJWT(Request: Request, Response: Response) {
	// Response Instances
	const InternalServerError = new methods.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error', false); // Internal Server Error Response
	const OK = new methods.Response.JSON(Response, StatusCodes.OK, 'json', 'Token JWT Generated', true); // OK Response
	try {
		// Get User IP Address
		const RequesterIPaddress =
			Request.headers['x-forwarded-for'] ??
			Request.connection.remoteAddress ??
			Request.socket.remoteAddress ??
			Request.socket.remoteAddress ??
			Request.headers['x-real-ip'] ??
			Request.ip; // Get Requester IP Address

		// Get Ip Address Details
		const IP_Address_Details = await IP_Details(String(RequesterIPaddress)); // Get IP Details

		// Generate Random Rounds for Login token generation
		const Rounds: number = new methods.UniqueGenerator(1).RandomNumber(false, [2, 3, 4, 5, 6]); // Generate Random Rounds for Login token generation

		// Generate JWT Token
		const JWT_Token = new methods.JWT_Manager(StringKeys.JWT_SECRET).generateLoginToken(IP_Address_Details, Rounds, StringKeys.JWT_EXPIRES_IN).toKen; // Create JWT Manager Instance

		// Assign JWT Token to Response Headers
		Response.setHeader('Authorization', JWT_Token); // Assign JWT Token to Response Headers

		//Send Response to Client
		OK.Send(JWT_Token, 'You can use this token for further requests'); // Send OK Response to Client
	} catch (error) {
		Console.red(error); // Log Error
		return InternalServerError.Send(undefined, 'Could not generate JWT Token. Please try again later.'); // Send Internal Server Error
	}
}
