import express, { Express } from 'express'; // Import express
import { methods, Middleware } from 'outers'; // Import outers
import { NumberKeys, StringKeys } from './variables.core'; // Import Environment Variables

// Import Main Router
import MainRouter from '../Router/Router'; // Import Methods Router

// create Express Instance
const Server: Express = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy

// Set APi Content Type and JSON Parsing
Server.use(express.json({ limit: '999mb' })); // Enable JSON Parsing
Server.use(express.urlencoded({ extended: true, limit: '999mb', parameterLimit: 2000 })); // Enable URL Encoded Parsing and Limit of 5GB

// Create URL Hostname
const { hostname } = new URL(StringKeys.CORS_URL); // Create URL Hostname

// Setup Security Middlewares to protect from attacks
Server.use(Middleware.MethodsController(StringKeys.Allowed_Methods)); // Only Allow Specific Methods

Server.use(Middleware.AccessController([hostname])); // Only Allow Specific Hostname to Access API

Server.use(Middleware.RequestInjectIP(['POST', 'PUT', 'DELETE'])); // Inject IP Address to Request Body

// Set API Main Entry Route
Server.use('/api', MainRouter); // Enable API Main Entry Route with Some Middlewares

// Start Server with Cluster Config
methods.ClusterCreator(Server, NumberKeys.PORT, NumberKeys.CPUCount); // Create cluster with Outers Package
