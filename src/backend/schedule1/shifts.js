const Shift = require("./shift");
class Shifts {
  constructor(locationName, workDay, slotNumber) {
    this.locationName = locationName;
    this.workDay = workDay;
    this.slotNumber = slotNumber;
    this.shifts = [];
  }

  addShift(employee, from, to) {
    const shift = new Shift(employee, from, to)
    this.shifts.push(shift);
  }

  totalShiftHours() {
    let sumOfHours = 0;
    this.shifts.forEach(shift => {
      sumOfHours += shift.getTimeSlot().getDuration();
    });
    return sumOfHours;
  }

  allShiftTimeIntervals() {
    let intervals = [];
    this.shifts.forEach(shift => {
      let shiftIntervals = shift.getTimeSlot().getIntervals();
      shiftIntervals.forEach(interval => {
        intervals.push(interval);
      });
    });
    return intervals;
  }

  getWorkDay() {
    return this.workDay;
  }
  getSlotNumver() {
    return this.slotNumber;
  }
}

module.exports = Shifts;
