import { ClassBased, Console, StatusCodes } from 'outers'; // Import Methods from outers
import { StringKeys, IP_API } from '../core/variables.core'; // Import AppName from variables.core

// Import Interfaces
import { IGetIPDetails } from '../core/Interfaces/IP Details.utils.interface'; // Import IGetIPDetails from IP Details.utils.interface

// Register IP Details Short Storage for IP Details Cache
export const IPDetailsShortStorage = new ClassBased.Storage.CreateNewShortStorage(
	StringKeys.AppName,
	999,
	`${StringKeys.AppName}${StringKeys.JWT_SECRET}${StringKeys.IP_INFO_API_KEY}`
); // Create New Short Storage for IP Details

// Main Function
export default async function (ClientIP: string): Promise<IGetIPDetails> {
	try {
		// Search IP Details in Short Storage
		const IPDetails = await IPDetailsShortStorage.Get(ClientIP); // Get IP Details from Short Storage

		// Check if IP Details are available in Short Storage
		if (IPDetails.status == StatusCodes.OK) {
			return {
				status: 200,
				message: 'Success',
				details: IPDetails.Data[0].Data,
			};
		}
		const ClientIPData = await IP_API.Get(`/${ClientIP}/json?token=${StringKeys.IP_INFO_API_KEY}`, true);
		const IPType = IPChecker(ClientIP); // Check if IP is IPv4 or IPv6

		// Save to Short Storage
		await IPDetailsShortStorage.Save(ClientIP, {
			...ClientIPData,
			Type: IPType,
			origin: `${StringKeys.AppName}'s Cache Server`,
		}); // Save IP Details to Short Storage

		// Send Return data
		return {
			status: 200,
			message: 'Success',
			details: {
				...ClientIPData,
				Type: IPType,
				origin: 'IP Address Lookup API Server',
			},
		};
	} catch (error) {
		Console.red(error); // Log Error
		return {
			status: 500,
			message: 'Internal Server Error',
			details: null,
		};
	}
}

// IP Type checker

// Check if IP is IPv4 or IPv6 address
export function IPChecker(CurrentIP: string): string | unknown {
	try {
		// Regular expressions for IPv4 and IPv6 addresses
		const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
		const ipv6Regex = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;

		// Check if the IP address matches IPv4 or IPv6 regex
		if (ipv4Regex.test(CurrentIP)) {
			return 'IPv4';
		} else if (ipv6Regex.test(CurrentIP)) {
			return 'IPv6';
		} else {
			return new Error('Invalid IP address');
		}
	} catch (error) {
		// If any error occurs, reject the Promise with the error
		return error;
	}
}
