const TimeSlot = require("./TimeSlot");
const Shift = require("./Shift");

class WorkDay {
  constructor(name, from, to, location) {
    this.location = location;
    this.name = name;
    this.from = from;
    this.to = to;
    this.unfilledIntervals = [];
    this.timeAsIntervals();
    this.shifts = [];
  }
  timeAsIntervals() {
    const t = new TimeSlot(this.from, this.to);
    t.intervals.forEach(interval => {
      this.unfilledIntervals.push(interval);
    });
  }

  updateUnfilledIntervals(from, to) {
    let takenTimes = new TimeSlot(from, to).intervals;
    if(to !== this.to){
      takenTimes.pop()
    }
    
    takenTimes.forEach(interval => {
      let index = this.unfilledIntervals.indexOf(interval);
      this.unfilledIntervals.splice(index, 1);
    });
  }

  addShift(employee, from, to) {
    const shift = new Shift(employee, this.location, this, from, to);
    this.shifts.push(shift);
    this.updateUnfilledIntervals(from, to);
  }
}

module.exports = WorkDay;
