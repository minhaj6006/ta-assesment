# Use a lightweight Node.js image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json package-lock.json tsconfig.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port on which the app runs
EXPOSE 3000

# Start the backend server
CMD ["node", "dist/index.js"]
