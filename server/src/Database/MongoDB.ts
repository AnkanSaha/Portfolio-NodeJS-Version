import { StringKeys } from '../core/variables.core'; // Import Environment Variables
import { connect } from 'mongoose'; // Import Mongoose

// Connect to MongoDB functions
export async function connectDB() {
	try {
		const COnnection_Status = await connect(StringKeys.MongoDB_URL);
		console.log('MongoDB Connected with Server :', COnnection_Status.connection.host);
	} catch (error) {
		console.log(error); // Error
	}
}
