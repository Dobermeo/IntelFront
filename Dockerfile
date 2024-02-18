FROM node:16-alpine AS build
WORKDIR /usr/src/app

# Copia el archivo package.json para fijar las versiones de las dependencias
COPY package*.json ./
RUN npm install

# Copia todo el código fuente y construye la aplicación
COPY . .
RUN npm run build --prod

RUN ls -alt

FROM nginx:1.17.1-alpine


# Copia los archivos build de la aplicación Angular al directorio raíz de Nginx
COPY --from=build /usr/src/app/dist/biblioteca-valle-frond-end/ /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expuesta la configuración de Nginx para el puerto 80
EXPOSE 80

# Inicia el servidor Nginx con la configuración específica
CMD ["nginx", "-g", "daemon off;"]


