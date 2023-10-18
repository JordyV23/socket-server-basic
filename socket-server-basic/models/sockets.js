class sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    //On connection event
    this.io.on("connection", (socket) => {
      //Escuchar el evento
      socket.on("message-from-client", (data) => {
        console.log(data);
        this.io.emit("message-from-server", data);
      });
    });
  }
}

module.exports = sockets;
