#!/bin/sh

set -eu

variables='${SERVER_PORT}
          ${API_HOSTNAME}
          ${API_PORT}
          ${API_DOMAIN}
          ${CORE_HOSTNAME}
          ${CORE_PORT}
          ${CORE_VERSION}'

envsubst "$variables" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
