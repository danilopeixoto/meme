FROM nginx:1.18.0

LABEL description "Meme web server."
LABEL version "1.0.0"
LABEL maintainer "Danilo Peixoto and Willer Silva"

COPY docker-entrypoint.sh /usr/bin/server/
COPY nginx.conf.template /etc/nginx/

RUN chmod +x /usr/bin/server/docker-entrypoint.sh

ENTRYPOINT ["/usr/bin/server/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
