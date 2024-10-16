# Frontend BASE
FROM node:20.16-alpine AS base-frontend
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
COPY frontend/package.json ./
RUN corepack enable

# Api BASE
FROM node:20.16-alpine AS base-strapi
RUN apk add --no-cache vips-dev fftw-dev build-base gcc autoconf automake zlib-dev libpng-dev nasm bash
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
COPY strapi/package.json ./
RUN corepack enable

# Frontend DEPS
FROM base-frontend AS frontend-deps
WORKDIR /app
ENV NODE_ENV=production
COPY frontend/package.json frontend/yarn.lock frontend/tsconfig.json frontend/.yarnrc.yml .
RUN yarn install

# Frontend BUILD
FROM base-frontend AS frontend-build
WORKDIR /app
COPY ./frontend .
COPY --from=frontend-deps /app/node_modules node_modules
RUN yarn build

# Frontend RUN
FROM node:20.16-alpine AS frontend-run

WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --chown=node:node --from=frontend-build /app/.output .output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

# API DEPS
FROM base-strapi AS strapi-deps
WORKDIR /app
ENV NODE_ENV=production
COPY strapi/package.json strapi/yarn.lock strapi/tsconfig.json strapi/.yarnrc.yml .
RUN yarn install

# API RUN
FROM base-strapi AS strapi-run

WORKDIR /app
RUN chown -R node:node /app
USER node

COPY --chown=node:node ./strapi .
COPY --from=api-deps /app/node_modules node_modules

RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]