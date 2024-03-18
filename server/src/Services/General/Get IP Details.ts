import { Request, Response } from 'express'; // Importing express types
import { FunctionBased, ClassBased, Console, StatusCodes } from 'outers'; // Import Methods from outers
import { StringKeys } from '../../core/variables.core'; // Import the variables

// Main Function
export default async function GetIPDetails(Request: Request, Response: Response) {
	const InternalServerError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error', false); // Internal Server Error Response
	const OK = new ClassBased.Response.JSON(Response, StatusCodes.OK, 'json', 'IPDetails Fetched', true); // OK Response
	try {
		// Get User IP Address
		const RequesterIPaddress =
			StringKeys.ENV == 'DEVELOPMENT'
				? '8.8.8.8'
				: Request.headers['x-forwarded-for'] ??
				  Request.connection.remoteAddress ??
				  Request.socket.remoteAddress ??
				  Request.socket.remoteAddress ??
				  Request.headers['x-real-ip'] ??
				  Request.ip; // Get Requester IP Address

		// Get Ip Address Details
		const IP_Address_Details = await FunctionBased.IP.Info(StringKeys.IP_INFO_API_KEY, String(RequesterIPaddress)); // Get IP Details
		console.log(IP_Address_Details.details); // Log IP Address Details

		// Send Response to Client
		OK.Send(IP_Address_Details.details, `Your IP Address is ${RequesterIPaddress}, you can use this details anywhere`); // Send OK Response to Client
	} catch (error) {
		Console.red(error); // Log Error
		return InternalServerError.Send(undefined, 'Could not generate JWT Token. Please try again later.'); // Send Internal Server Error
	}
} // Main Function
