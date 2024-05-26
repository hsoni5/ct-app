# Use a base image with Node.js for building the React app
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . . 

# Build the React app for production
RUN npm run build

# Use a lightweight base image for the final image
FROM nginx:alpine

# Copy the built React app from the previous stage to the nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]