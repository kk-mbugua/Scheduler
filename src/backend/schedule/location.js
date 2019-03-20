const Slots = require("./slots");
const Shift = require("./shift")

class Location {
  constructor(locationName, numOfSlots) {
    this.locationName = locationName;
    this.numOfSlots = numOfSlots;
    this.slots = new Slots(locationName, numOfSlots);
  }

  getLocationName() {
    return this.locationName;
  }

  getNumOfSlots() {
    return this.slots;
  }

  getSlot(slotNumber) {
    const slot = this.slots
      .getSlots()
      .filter(slot => slotNumber == slot.getSlotNumber());
    return slot[0];
  }

  addShift(slotNum, employee, day, from, to) {
    let slot = this.getSlot(slotNum);
    
    let shifts = slot
      .getShiftss()
      .filter(shifts => shifts.getWorkDay().getWorkDayName().toLowerCase() == day.toLowerCase())[0];
    shifts.addShift(employee, from, to)
  }
}

module.exports = Location;
