import express, { Express } from 'express'; // Import express
import { methods } from 'outers'; // Import outers
import { NumberKeys } from './variables.core'; // Import Environment Variables

// Import Middlewares
import RateLimiterMiddleware from '../Middleware/RateLimiter.middleware'; // Import Rate Limiter Middleware

// create Express Instance
const Server: Express = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy

// Add Rate Limiter
Server.use(RateLimiterMiddleware); // Add rate limiter middleware

// Start Server with Cluster Config
methods.ClusterCreator(Server, NumberKeys.PORT, NumberKeys.CPUCount); // Create cluster with Outers Package
