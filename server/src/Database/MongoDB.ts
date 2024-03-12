import { StringKeys } from '../core/variables.core'; // Import Environment Variables
import { MongoClient } from 'mongodb'; // Import Mongoose

export const Client = new MongoClient(StringKeys.MongoDB_URL); // MongoDB Client Instance
export const Database = Client.db(StringKeys.DB_NAME); // Connect Database to Client Instance
export const Collection = Database.collection(StringKeys.CollectionName); // Connect Collection to Database Instance

// Connect to MongoDB functions
export async function connectDB() {
	try {
		await Client.connect(); // Connect to MongoDB
		Collection.insertOne({
			name: 'Ankan',
		}).then(res => {
			console.log(res);
		});
		console.log('MongoDB Connected with Server');
	} catch (error) {
		console.log(error); // Error
	}
}
