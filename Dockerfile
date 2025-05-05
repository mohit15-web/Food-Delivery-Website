# 1. Use the official Node image as a build environment
FROM node:20 AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy rest of the app and build it
COPY . .
RUN npm run build

# 5. Use a lightweight web server to serve the app
FROM nginx:alpine

# 6. Copy built files from builder to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 7. Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
