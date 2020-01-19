FROM node:13-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g --save

COPY . .

CMD ["npm", "start"]

EXPOSE 3000