#!/bin/bash

set -eu

variables='${SERVER_PORT}
          ${API_DOMAIN}
          ${API_HOSTNAME}
          ${API_PORT}'

envsubst "$variables" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
