const Shift = require("./shift");
const TimeSlot = require("./timeSlot");
const UnavailableTimes = require("./unavailableTimes");

class Employee {
  constructor(name) {
    this.name = name;
    this.unavailableTimes = new UnavailableTimes();
    this.shifts = [];
    this.monday = [];
    this.tuesday = []
    this.wednesday = []
    this.thursday = []
    this.friday = []
  }

  updateUnavailableTimes(day, from, to) {
    this.unavailableTimes.addUnavailableTime(day, from, to);
    
  }

  getAvailableTimesIntervals(day){
      day = day.toLowerCase()
      return this[day]
  }

  populateAvailableTimes() {
    let o = Object.getOwnPropertyNames(this);
    for (let i = 3; i < o.length; i++) {
      this[o[i]] = this.calcAvailableTimes(o[i]);
    }
  }

  calcAvailableTimes(day) {
    let unavail = this.unavailableTimes[day];

    let unavailTimesIntervals = [];
    unavail.forEach(u => {
      u.getIntervals().forEach(e => {
        unavailTimesIntervals.push(e);
      });
    });
   

    let t = new TimeSlot("0845", "2200");
    let allIntervals = t.intervals;

    let availableTimes = allIntervals.filter(
      interval => unavailTimesIntervals.indexOf(interval) < 0
    );
    
    return availableTimes;
  }
}

module.exports = Employee;
