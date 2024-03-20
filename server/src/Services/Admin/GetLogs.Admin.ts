import { Request, Response } from 'express'; // Import Express Types
import { Console, ClassBased, StatusCodes, FunctionBased } from 'outers'; // Import Outers Functions

// Main Function
export default async function GetAllRequestLogs(Request: Request, Response: Response) {
	// Register Responses
	const InternalError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Something went wrong in server'); // Internal Error
	const OK = new ClassBased.Response.JSON(Response, StatusCodes.OK, 'json', 'HTTP Request Logs Fetched'); // OK Response
	const NotFound = new ClassBased.Response.JSON(Response, StatusCodes.NOT_FOUND, 'json', "We couldn't find the requested resource"); // NOT_FOUND Response

	try {
		// Check if Provided Specific Date or not
		if (!Request.query.RequestDate) {
			const AllLogs = await FunctionBased.GetRequestLog(); // Get all logs

			if (AllLogs.status === StatusCodes.OK) {
				return OK.Send(AllLogs.Data, 'You Can Now Check your All Logs Status from your Dashboard'); // Send the logs
			}

			// Send Not found Response
			return NotFound.Send(undefined, 'The Resource that you requested was not found in our server logs. Please try again later with the same Method'); // Send Not found
		}

		// if Date is provided
		const SpecificLogs = await FunctionBased.GetRequestLog(String(Request.query.RequestDate)); // Get Specific Logs

		// Check if Data fetched or not
		if (SpecificLogs.status == StatusCodes.OK) {
			return OK.Send(SpecificLogs.Data, 'You Can Now Check your Specific Logs Status from your Dashboard'); // Send the logs
		}

		// Send Not found Response
		return NotFound.Send(undefined, 'The Resource that you requested was not found in our server logs. Please try again later with the same Method'); // Send Not found
	} catch (error) {
		Console.red(error); // Console the error
		return InternalError.Send(undefined, 'There was an error in server. Please try again later with the same Method'); // Send the error message
	}
}
