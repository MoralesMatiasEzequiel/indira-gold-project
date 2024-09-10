# Usar una imagen base de Node.js
FROM node:20.17-alpine3.20

# Crear directorio de la app en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto donde corre el servidor Express
EXPOSE 3001

# Comando para correr el servidor
CMD ["npm", "start"]