//Servidor de Express
const express = require("express");
//Creación del servidor
const http = require("http");
//Configuración del socket server
const socektio = require("socket.io");
const path = require("path");
const sockets = require("./sockets");


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socektio(this.server);
  }

  middlewares() {
    // Despliegue de directorio público
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configureSockets() {
    new sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    this.configureSockets();

    //Levantar el servidor
    this.server.listen(process.env.PORT, () => {
      const rainbowColors = ["🌈", "🦄", "🌟", "🎉", "🎈", "🌼"];
      const randomColor =
        rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
      const localhostAddress = `http://localhost:${process.env.PORT}`;
      console.log(
        `¡El servidor está listo para desplegar su magia en el puerto ${process.env.PORT}! Accede a través de ${localhostAddress} ${randomColor}`
      );
    });
  }
}

module.exports = Server;
