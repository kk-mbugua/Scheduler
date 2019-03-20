const TimeSlot = require("./timeSlot")

class Shift {
  constructor(employee, from, to) {
    this.employee = employee;
    this.timeSlot = new TimeSlot(from, to)
  }

  getTimeSlot() {
    return this.timeSlot;
  }

  getEmployeeName() {
    return this.employeeName;
  }
}

module.exports = Shift;
