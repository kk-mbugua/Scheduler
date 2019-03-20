const TimeSlot = require("./timeSlot");

class UnavailableTimes {
  constructor() {
    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
  }

  addUnavailableTime(day, from, to) {
    day = day.toLowerCase();
    const timeSlot = new TimeSlot(from, to);
    this[day].push(timeSlot)
  }


}


module.exports = UnavailableTimes;
