# Meme

A meme service.

## Prerequisites

* [Docker Engine >=19.03.12](https://docs.docker.com/engine)
* [Docker Compose >=1.27.2](https://docs.docker.com/compose)

## Installation

Build and run services:

```
docker-compose up -d
```

Scale services:

```
docker-compose scale api=<replicas> core=<replicas>
```

## Copyright and license

Copyright (c) 2020, Danilo Peixoto and Willer Silva. All rights reserved.

Project developed under [BSD-3-Clause license](LICENSE.md).
