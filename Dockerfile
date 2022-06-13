FROM node:alpine

WORKDIR /phantom-be-dream-team

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]