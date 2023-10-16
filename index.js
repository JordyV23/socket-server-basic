//Variables de entorno
require("dotenv").config();

//Servidor de Express
const express = require("express");
const app = express();

// Despliegue de directorio público
app.use(express.static(__dirname + "/public"));

//Servidor de Socket
const server = require("http").createServer(app);

//Configuración del socket server
const io = require("socket.io")(server);

io.on("connection", (socket) => {

    socket.on("message-from-client", (data) => {
        console.log(data);

        io.emit("message-from-server", data);
    });



});

server.listen(process.env.PORT, () => {
  const rainbowColors = ["🌈", "🦄", "🌟", "🎉", "🎈", "🌼"];
  const randomColor =
    rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  const localhostAddress = `http://localhost:${process.env.PORT}`;
  // const localhostAddress = `http://localhost:3003`;
  console.log(
    `¡El servidor está listo para desplegar su magia en el puerto ${process.env.PORT}! Accede a través de ${localhostAddress} ${randomColor}`
  );
});
