FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/bimrooms
WORKDIR /usr/src/bimrooms

# Install app dependencies
COPY package.json /usr/src/bimrooms/
RUN npm install

# Bundle app source
COPY . /usr/src/bimrooms

EXPOSE 8080

CMD [ "npm", "start" ]
