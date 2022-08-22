
FROM node:14.17.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add --update python make g++ \
   && rm -rf /var/cache/apk/*
COPY . .
RUN yarn install
RUN yarn build


# production environment
FROM nginx:stable-alpine as nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
