const TimeSlot = require("./TimeSlot");
class Employee {
  constructor(name) {
    this.name = name
    this.availableTimes = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };
  }

  addAvailableTime(day, from, to) {
    const t = new TimeSlot(from, to);
    const intervals = t.intervals
    intervals.forEach(interval => {
        this.availableTimes[day].push(interval)
    });
  }

  updateAvailableTime(day, from, to) {
      let takenTimes = new TimeSlot(from, to).intervals
      takenTimes.forEach(interval => {
          let index = this.availableTimes[day].indexOf(interval)
          this.availableTimes[day].splice(index, 1)
      })
  }

  
}

module.exports = Employee;
