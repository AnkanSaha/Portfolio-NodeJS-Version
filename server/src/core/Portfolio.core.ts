import express, { Express } from 'express'; // Import express
import { methods } from 'outers'; // Import outers
import { NumberKeys } from './variables.core'; // Import Environment Variables

// import DB Connection Functions
import { connectDB } from '../Database/MongoDB'; // Import DB Connection Functions

// Import Main Router
import MainRouter from '../Router/Router'; // Import Methods Router

// create Express Instance
const Server: Express = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy

// Set APi Content Type and JSON Parsing
Server.use(express.json({ limit: '999mb' })); // Enable JSON Parsing
Server.use(express.urlencoded({ extended: true, limit: '999mb', parameterLimit: 2000 })); // Enable URL Encoded Parsing and Limit of 5GB

// Set API Main Entry Route
Server.use('/api', MainRouter); // Enable API Main Entry Route with Some Middlewares

// Initialize Server with Cluster Config
const Cluster = new methods.ClusterCreator.ClassBased(Server, NumberKeys.PORT); // Initialize Cluster Creator

// Add Number of Workers to Cluster
Cluster.SetNumberOfWorkers(NumberKeys.CPUCount); // Set Number of Workers to Cluster

// Add After Listen function
Cluster.AddAfterListenFunction(connectDB); // Add After Listen Function to Cluster

// Listen Server
Cluster.StartServer(); // Start Server
