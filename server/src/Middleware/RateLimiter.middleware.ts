import rateLimit from "express-rate-limit"; // Import rate limit for limiting request
import { StatusCodes } from "outers"; // Import Status Codes

export default rateLimit({
	windowMs: 60 * 1000, // 1 minute
	statusCode: StatusCodes.TOO_MANY_REQUESTS,
	max: 15, // 15 requests
	message: {
		status: false,
		statusCode: StatusCodes.TOO_MANY_REQUESTS,
		Title: "Too many requests",
		message: "Too many requests, please try again later",
		response: undefined,
	},
	standardHeaders: true, // Include standard headers for request limit
	legacyHeaders: false, // Include legacy headers for request limit
});