import { Request, Response } from "express"; // Importing express types
import { methods, Console, StatusCodes } from "outers"; // Import Methods from outers


// Main Function
export default async function GenerateJWT(Request: Request, Response: Response) {
    // Response Instances
    const InternalServerError = new methods.Response.JSON(Response, StatusCodes.INTERNAL_SERVER_ERROR, 'json' ,"Internal Server Error"); // Internal Server Error Response
    try {
        console.log(Request.ip)
    }
    catch (error) {
        Console.red(error); // Log Error
        return InternalServerError.Send(undefined, "Could not generate JWT Token. Please try again later."); // Send Internal Server Error
    }
}