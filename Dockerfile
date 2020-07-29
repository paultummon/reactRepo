FROM node:latest
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn start
EXPOSE 9000
CMD ["yarn", "start"]

