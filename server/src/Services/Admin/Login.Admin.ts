import { Request, Response } from 'express'; // Import express types
import { ClassBased, StatusCodes, Console } from 'outers'; // Import outer types

// Main Function
export default function AdminLogin(Request: Request, Response: Response) {
	// Register Response
	const InternalError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error'); // Internal Server Error
	try {
		console.log(Request.body); // Log Request Body
	} catch (error) {
		Console.red(error); // Log Error
		return InternalError.Send(undefined, 'Internal Server Error Occurred while processing the request.'); // Send Internal Server Error
	}
}
