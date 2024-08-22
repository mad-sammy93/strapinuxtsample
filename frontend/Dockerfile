# Frontend (Nuxt) Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the Nuxt application
RUN yarn build

# Expose the Nuxt port
EXPOSE 4400

# Start the Nuxt server
CMD ["yarn", "dev"]