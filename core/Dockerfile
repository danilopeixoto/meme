FROM node:14.15.0-alpine

LABEL description "Meme core API."
LABEL version "1.0.0"
LABEL maintainer "Danilo Peixoto and Willer Silva"

WORKDIR /usr/src/core/
COPY . .

EXPOSE 3001

RUN yarn install

CMD ["yarn", "start"]
