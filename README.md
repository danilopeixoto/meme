## :computer: Project

Meme is a college work that aims to be a service based on a microservice architecture that will manage the content of meme generators.

## :rocket: Built with

This project was developed with the following technologies:

-   [Node.js](https://nodejs.org/) - As the Javascript runtime
-   [Restify](http://restify.com/) - As a web service framework
-   [Axios](https://github.com/axios/axios) - To do HTTP calls
-   [Mongoose](https://mongoosejs.com/) - To do connection with MongoDB
-   [Typescript](https://www.typescriptlang.org/) - To add types to the Javascript
-   [Docker](https://www.docker.com/) - To manage and scale the project
-   [Nginx](https://www.nginx.com/) - As a reverse proxy and load balance

## :information_source: How to run

### Prerequisites

* [Docker Engine >=19.03.12](https://docs.docker.com/engine)
* [Docker Compose >=1.27.2](https://docs.docker.com/compose)

### Installation

With the magic of Docker and Docker Compose, to build and run services just do it:

```
docker-compose up -d
```

And to scale services:

```
docker-compose scale api=<replicas> core=<replicas>
```

## :memo: Copyright and license

Copyright (c) 2020, Danilo Peixoto and Willer Silva. All rights reserved.

Project developed under [BSD-3-Clause license](LICENSE.md).

---

Made with :coffee: and ❤️ by Danilo Peixoto and Willer Silva.
