FROM node:21.6.1

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn","run","start:dev"]
