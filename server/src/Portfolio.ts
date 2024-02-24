import express from 'express'; // Import express
import { methods } from 'outers'; // Import outers

// create Express Instance
const Server = express(); // Initialize express

// Set Trust Proxy
Server.set('trust proxy', () => true); // Enable trust proxy

// Before Lessening Functions
const Consoler = () => console.log('Vag Bakchod, Abhi Start ngi hui'); // Console Log
const Complete = () => console.log('Chal Bakchod, Abhi Complete ho gayi'); // Console Log

methods.ClusterCreator(Server, 3000, 3, [Consoler], [Complete]); // Create cluster with Outers Package
