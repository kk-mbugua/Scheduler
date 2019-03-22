const Slot = require("./slot");

class Slots {
  constructor(locationName, numOfSlots) {
    this.locationName = locationName;
    this.numOfSlots = numOfSlots;
    this.slots = this.populateSlots(numOfSlots);
  }

  getSlots() {
    return this.slots;
  }

  populateSlots(numOfSlots) {
    let slots = [];
    for (let i = 0; i < numOfSlots; i++) {
      const slot = new Slot(this.locationName, i);
      slots.push(slot); 
    }
    return slots;
  }
}

module.exports = Slots;