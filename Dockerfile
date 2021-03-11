FROM node:10-alpine as build-stage
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 8080