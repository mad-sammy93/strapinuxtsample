# Use an official Node.js runtime as a parent image
FROM node:18-alpine

WORKDIR /
COPY package.json ./
COPY yarn.lock ./

# Install dependencies for 'sharp' and build tools
# RUN apk add --no-cache \
#   g++ \
#   make \
#   python3 \
#   cairo-dev \
#   jpeg-dev \
#   pango-dev \
#   giflib-dev \
#   librsvg-dev \
#   vips-dev

# RUN apk add --no-cache vips-dev fftw-dev build-base gcc autoconf automake zlib-dev libpng-dev nasm bash make

# Install dependencies for 'sharp' and build tools
RUN apk add --no-cache vips-dev fftw-dev build-base gcc autoconf automake zlib-dev libpng-dev nasm bash sharp

# Install all dependencies including sharp
# RUN npm install --platform=linuxmusl --arch=x64
# RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp
RUN yarn install

# Copy the rest of the application
COPY . .
RUN yarn build

# Expose the Strapi port
EXPOSE 4500

# Start the Strapi server
CMD ["yarn", "develop"]
