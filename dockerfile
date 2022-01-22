FROM node:12.18-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
# WORKDIR /usr/src/app
COPY . . 
WORKDIR /public/assets/js/
# COPY /public/assets/js/package*.json ./
RUN npm install

WORKDIR /usr/src/app
EXPOSE 8080
CMD [ "node", "server.js" ]