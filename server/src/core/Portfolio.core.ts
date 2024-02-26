import express, { Express } from 'express'; // Import express
import { methods } from 'outers'; // Import outers
import { NumberKeys } from './variables.core'; // Import Environment Variables

// Import Middlewares
import RateLimiterMiddleware from '../Middleware/RateLimiter.middleware'; // Import Rate Limiter Middleware

// create Express Instance
const Server: Express = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy

// Set APi Content Type and JSON Parsing
Server.use(express.json({ limit: '999mb' })); // Enable JSON Parsing
Server.use(express.urlencoded({ extended: true, limit: '999mb', parameterLimit: 2000 })); // Enable URL Encoded Parsing and Limit of 5GB

// Set Rate Limiter Middleware
Server.use(RateLimiterMiddleware); // Enable Rate Limiter Middleware

// Set API Main Entry Route
// Server.use('/api');

// Start Server with Cluster Config
methods.ClusterCreator(Server, NumberKeys.PORT, NumberKeys.CPUCount); // Create cluster with Outers Package
