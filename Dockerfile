FROM node:21

WORKDIR /src/styles.scss

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "sass" ]