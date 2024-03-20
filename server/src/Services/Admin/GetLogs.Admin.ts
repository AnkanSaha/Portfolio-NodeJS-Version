import {Request, Response} from 'express'; // Import Express Types
import {Console, ClassBased, StatusCodes} from 'outers'; // Import Outers Functions

// Main Function
export default async function GetAllRequestLogs (Request: Request, Response:Response){
  // Register Responses
  const InternalError = new ClassBased.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json', 'Something went wrong in server'); // Internal Error
  try {
    console.log(Request.query)
  }
  catch (error){
    Console.red(error); // Console the error
    return InternalError.Send(undefined, "There was an error in server. Please try again later with the same Method"); // Send the error message
  }
}