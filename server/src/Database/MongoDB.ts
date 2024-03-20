import { StringKeys } from '../core/variables.core'; // Import Environment Variables
import { MongoClient } from 'mongodb'; // Import Mongoose

// Register MongoDB Client Instance
export const Client = new MongoClient(StringKeys.MongoDB_URL); // MongoDB Client Instance

// Register Database for MongoDB
export const Database = Client.db(StringKeys.DB_NAME); // Connect Database to Client Instance

// Register Collections for MongoDB
export const RequestCollection = Database.collection(StringKeys.RequestCollectionName); // Connect Collection to Database Instance
export const PortfolioInfoCollection = Database.collection(StringKeys.PortfolioInfoCollectionName); // Connect Collection to Database Instance

// Connect to MongoDB functions
export async function connectDB() {
	try {
		await Client.connect(); // Connect to MongoDB
		console.log('MongoDB Connected with Server');
	} catch (error) {
		console.log(error); // Error
	}
}
