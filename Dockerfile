FROM node:alpine

WORKDIR /user/app

COPY package.json .
COPY package-lock.json ./
RUN npm install
RUN npm migrate
COPY . .
EXPOSE 4000
CMD ["npm","run","dev:start"]
