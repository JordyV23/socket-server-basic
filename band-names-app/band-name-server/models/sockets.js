const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Client connected:" + new Date().toTimeString());

      // Emit to the client the list of bands
      // Senden Sie die Liste der Bänder an den Kunden
      socket.emit("current-bands", this.bandList.getBands());

      // Emit from the client to increase the votes
      socket.on("votar-banda", (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      // Emit from the client to delete a band
      socket.on("borrar-banda", (id) => {
        this.bandList.removeBand(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      // Emit from the client to change de band name
      socket.on("cambiar-nombre-banda", (id, nombre) => {
        this.bandList.changeBandName(id, nombre);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      // Emit from the client to create a new band
      socket.on("crear-banda", (nombre) => {
        this.bandList.addBand(nombre);
        this.io.emit("current-bands", this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
