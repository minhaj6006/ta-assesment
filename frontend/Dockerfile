# Stage 1: Build the Angular app
FROM node:18-alpine as build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code and build the app in production mode
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
# Copy the production build from the previous stage
COPY --from=build /app/dist/frontend /usr/share/nginx/html
# Expose port 80 for the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
