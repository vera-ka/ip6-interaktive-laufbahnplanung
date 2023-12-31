# From https://blog.dsoderlund.consulting/react-nginx-docker-multistage
# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:14.18.1-alpine3.11 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# COPY src/ src/
# COPY tsconfig.json .
# COPY public/ public/
COPY build/ build/

# install node modules and build assets
#RUN npm run build

# nginx state for serving content
FROM nginx:1.21.1-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy nginx config
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage

COPY --from=builder /app/build .

# Expose the port for access
EXPOSE 80/tcp

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
