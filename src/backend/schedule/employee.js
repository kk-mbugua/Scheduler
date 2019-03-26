const TimeSlot = require("./TimeSlot");
const Shift = require("./shift")

class Employee {
  constructor(name, requestedHours, isCommuter) {
    this.name = name
    this.requestedHours = requestedHours
    this.isCommuter = isCommuter
    this.availableTimes = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };
    this.shifts = []
  }

  addAvailableTime(day, from, to) {
    const t = new TimeSlot(from, to);
    const intervals = t.intervals
    intervals.forEach(interval => {
        this.availableTimes[day].push(interval)
    });
  }

  reduceAvailableTime(day, from, to) {
      let takenTimes = new TimeSlot(from, to).intervals
      takenTimes.forEach(interval => {
          let index = this.availableTimes[day].indexOf(interval)
          this.availableTimes[day].splice(index, 1)
      })
  }

  addShift(from, to) {
    const shift = new Shift(this, from, to)
    this.shifts.push(shift)
  }

  getTotalWorkTime() {
    let totalWorkTime = 0
    this.shifts.forEach(shift => {
      totalWorkTime += shift.duration
    })

    return totalWorkTime
  }

  
}

module.exports = Employee;
