import express from 'express'; // Import express
import { methods } from 'outers'; // Import outers
import {NumberKeys} from './variables.core'; // Import Environment Variables

// create Express Instance
const Server = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy


// Start Server with Cluster Config
methods.ClusterCreator(Server, NumberKeys.PORT, NumberKeys.CPUCount); // Create cluster with Outers Package
