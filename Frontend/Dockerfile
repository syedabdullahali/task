# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./ 

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port for React dev server
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
