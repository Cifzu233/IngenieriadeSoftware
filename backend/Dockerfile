# Utiliza una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del backend al contenedor
COPY package*.json ./
RUN npm install

COPY . .

# Expone el puerto donde corre el backend
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
