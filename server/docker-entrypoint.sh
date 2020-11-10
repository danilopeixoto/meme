#!/bin/bash

set -eu

variables='${SERVER_PORT}
          ${API_HOSTNAME}
          ${API_PORT}
          ${API_DOMAIN}'

envsubst "$variables" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
