FROM node:14.15.0-alpine

LABEL description "Meme gateway API."
LABEL version "1.0.0"
LABEL maintainer "Danilo Peixoto and Willer Silva"

WORKDIR /usr/src/api/
COPY . .

EXPOSE 3000

RUN yarn install

CMD ["yarn", "start"]
