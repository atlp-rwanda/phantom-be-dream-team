FROM node:16

WORKDIR /phantom-be-dream-team

COPY package.json .
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]