FROM node:13-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

#necessario para nodemon ficar acessivel globalmente (-g faz isso)
RUN npm install nodemon -g

COPY . .

CMD ["npm", "dev"]

EXPOSE 3000