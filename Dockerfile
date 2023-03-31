FROM node:16.10.0

# Az alábbi sorral beállítjuk a WORKDIR-t a /app mappára
WORKDIR /usr/src/app

# Másoljuk át az alkalmazás forrásfájljait a konténerbe
COPY . .

RUN apt-get update && apt-get install -y nano
RUN npm install

# Futtatjuk az alkalmazást
#CMD ["node", "app.js

# A következő sorral megadjuk, hogy a konténer ne álljon le automatikusan
CMD tail -f /dev/null
