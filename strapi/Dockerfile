# Use an official Node.js runtime as a parent image
FROM node:18-alpine

WORKDIR /app/strapi
COPY package.json ./
COPY yarn.lock ./

# Install dependencies for 'sharp' and build tools
RUN apk add --no-cache vips-dev fftw-dev build-base gcc autoconf automake zlib-dev libpng-dev nasm bash 
RUN yarn add sharp

# Install all dependencies including sharp
RUN yarn install

# Copy the rest of the application
COPY . .
RUN yarn build

# Expose the Strapi port
EXPOSE 4500

# Start the Strapi server
CMD ["yarn", "develop"]
