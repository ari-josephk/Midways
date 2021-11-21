FROM node:11
WORKDIR /docker-app
COPY package.json /docker-app/
RUN npm install
COPY . /docker-app/
RUN npm run install-client
RUN npm run install-server
RUN npm run client
CMD npm start
