FROM node:20.9.0-alpine3.18

WORKDIR /todoapi-example/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]