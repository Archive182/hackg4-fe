# build environment
FROM node:16-alpine as react-build

WORKDIR /app
COPY . ./

RUN npm install
RUN npm build

# server environment
FROM nginx:alpine

ENV NGINX=/etc/nginx/conf.d

COPY ngxin ${NGINX}
COPY nginx.conf ${NGINX}/configfile.template
COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0

EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"