# base image
FROM node:alpine

# set working directory
WORKDIR /src

# add `/src/node_modules/.bin` to $PATH
#ENV PATH /src/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /src
RUN npm config set unsafe-perm true
RUN npm install --silent
RUN npm install -g pm2

#RUN npm install react-scripts -g --silent

# start app
CMD ["npm", "run", "serve"]
