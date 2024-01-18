FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build-step /app/dist/biblioteca-valle-frond-end /usr/share/nginx/html

EXPOSE 4200


