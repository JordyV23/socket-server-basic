
//Variables de entorno
require('dotenv').config()

//Servidor de Express
const app = require('express')();

//Servidor de Socket
const server = require('http').createServer(app);

//Configuración del socket server
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });

server.listen(process.env.PORT, () => {
    const rainbowColors = ["🌈", "🦄", "🌟", "🎉", "🎈", "🌼"];
    const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    const localhostAddress = `http://localhost:${process.env.PORT}`;
    console.log(`¡El servidor está listo para desplegar su magia en el puerto ${process.env.PORT}! Accede a través de ${localhostAddress} ${randomColor}`);
});
