import express, { Express } from 'express'; // Import express
import { ClassBased } from 'outers'; // Import outers
import { NumberKeys } from './variables.core'; // Import Environment Variables

// import DB Connection Functions
import { connectDB } from '../Database/MongoDB'; // Import DB Connection Functions

// Import Main Router
import MainRouter from '../Router/Router'; // Import Methods Router

// create Express Instance
const Server: Express = express(); // Initialize express

// Set APi Content Type and JSON Parsing
Server.use(express.json({ limit: '999mb' })); // Enable JSON Parsing
Server.use(express.urlencoded({ extended: true, limit: '999mb', parameterLimit: 2000 })); // Enable URL Encoded Parsing and Limit of 5GB

// Set API Main Entry Route
Server.use('/api', MainRouter); // Enable API Main Entry Route with Some Middlewares

// Initialize Server with Cluster Config
const Cluster = new ClassBased.ClusterCreator(Server, NumberKeys.PORT, NumberKeys.CPUCount); // Initialize Cluster Creator

// Set Trust Proxy to True
Cluster.ControlTrustProxy(true); // Enable Trust Proxy

// Add After Listen function
Cluster.AddAfterListenFunction(connectDB); // Add After Listen Function to Cluster

// Listen Server
Cluster.StartServer(); // Start Server
