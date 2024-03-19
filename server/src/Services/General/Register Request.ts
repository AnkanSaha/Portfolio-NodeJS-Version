import { Response, Request } from 'express'; // Import Response and Request from express
import { Console, ClassBased, StatusCodes, FunctionBased } from 'outers'; // Import red from outers
import { StringKeys, CRY_API } from '../../core/variables.core'; // import variables from outers

// Import MongoDB Action Creator
import { Collection } from '../../Database/MongoDB'; // Import MongoDB Action Creator

// Interface
interface RegisterRequest {
	RequestTitle: string;
	RequestDescription: string;
	Email: string;
	RequesterIPaddress: string;
}

// Main Code
export default async function RegisterRequest(Request: Request, Response: Response) {
	// Register Response Instances
	const InternalServerError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Internal Server Error'); // Internal Server Error
	const EmptyDetails = new ClassBased.Response.JSON(Response, StatusCodes.BAD_REQUEST, 'json', 'Please fill all the details'); // Empty Details
	const OK = new ClassBased.Response.JSON(Response, StatusCodes.OK, 'json', 'Request Registered Successfully'); // OK

	try {
		const { RequestTitle, RequestDescription, Email, RequesterIPaddress }: RegisterRequest = Request.body; // Destructure Request Body

		// Check if RequestTitle, RequestDescription and Email is empty
		if (
			!RequestTitle ||
			!RequestDescription ||
			!Email ||
			!RequesterIPaddress ||
			RequestTitle === '' ||
			RequestDescription === '' ||
			Email === '' ||
			RequesterIPaddress === ''
		)
			return EmptyDetails.Send('Please Send Appropriate Details with Request'); // Send Empty Details

		// Generate Unique Request ID
		let UniqueRequestID: number; // Unique Request ID
		let isPreviousRequest: boolean = false; // Check if Previous Request with this ID

		do {
			// Generate Unique ID
			UniqueRequestID = FunctionBased.RandomGenerator.Number(10, true); // Unique Request ID

			// Check if Request with this ID already
			const PreviousRequest = await Collection.find({ RequestID: UniqueRequestID }).toArray(); // Find Request with this ID
			PreviousRequest.length !== 0 ? (isPreviousRequest = true) : false; // If Request with this ID already exists
		} while (isPreviousRequest == true);

		// Find IP Address Details
		const IP_Details = (await FunctionBased.IP.Info(StringKeys.IP_INFO_API_KEY, StringKeys.ENV === 'DEVELOPMENT' ? '8.8.8.8' : RequesterIPaddress))
			.details; // IP Details

		// Create Index with Request ID
		await Collection.createIndex({ RequestID: 1 }, { unique: true }); // Create Index with Request ID

		// Save The Request To The Database
		const SaveStatus = await Collection.insertOne({
			RequestID: UniqueRequestID,
			RequestTitle: await CRY_API.Encrypt(RequestTitle),
			RequestDescription: await CRY_API.Encrypt(RequestDescription),
			Email: await CRY_API.Encrypt(Email),
			RequesterIPaddress: StringKeys.ENV == 'DEVELOPMENT' ? '8.8.8.8' : RequesterIPaddress,
			Requester_IP_Details: await CRY_API.Encrypt(IP_Details),
		});

		// Check if Request is Saved Successfully
		if (SaveStatus.acknowledged === true) {
			// Send Response to Client
			return OK.Send({ RequestID: UniqueRequestID }, 'Your Request has been saved with the following parameters and Request ID successfully.'); // Send OK
		}

		// Send Response to Client if failed
		return InternalServerError.Send(undefined, 'Could not register request. Please try again later.', 'Request Registration Failed'); // Send Internal Server Error
	} catch (error) {
		Console.red(error); // Log Error in red color
		return InternalServerError.Send('Something went wrong! Please try again later.');
	}
}
