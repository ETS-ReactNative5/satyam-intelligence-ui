# Let's get the base image of node14
FROM node:14-alpine3.12 as build-stage
# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
# Install app dependencies
RUN npm install
FROM nginx:1.15
# Bundle app source
COPY . .
# Binding port
EXPOSE 8080
# Command to run our app
CMD [ "npm", "start"]



