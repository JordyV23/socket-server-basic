const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [
      new Band("Rammstein"),
      new Band("MODA"),
      new Band("The Score"),
    ];
  }

  /**
   * Function to add a new band to the list
   * @param {*} name - The name of the band to add
   * @returns  The list of bands
   */
  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  /**
   * Function to remove a band from the list
   * @param {string} id - The id of the band to remove
   */
  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  /**
   * Function to get the list of bands
   * @returns The list of bands
   */
  getBands() {
    return this.bands;
  }

  /**
   * Function to increase the votes of a band
   * @param {*} id - The id of the band to increase the votes
   */
  incraseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes += 1;
      }
      return band;
    });
  }

  /**
   * Function to change the name of a band
   * @param {string} id - The id of the band to change the name
   * @param {string} newName - The new name of the band
   */
  changeBandName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}

module.exports = BandList;
