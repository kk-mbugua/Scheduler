const TimeSlot = require("./timeSlot")
class Shift {
  constructor(employee, location, workDay, from, to) {
    this.employee = employee
    this.location = location
    this.workDay = workDay
    this.from = from
    this.to = to
  }

  get duration() {
    const t = new TimeSlot(this.from, this.to)
    return t.duration
  }
}



module.exports = Shift;
