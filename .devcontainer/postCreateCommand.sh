#!/bin/bash

sudo apt-get update -y # Update apt-get cache
sudo apt-get install -y neofetch # Install curl

# Install Dependencies
npm install --force # Install All Dependencies
npm run build # Build CSS

# Setup Docker Containers
docker-compose up -d # Start Docker Containers in detached mode mention  in docker-compose.yml