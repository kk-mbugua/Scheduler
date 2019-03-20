const TimeSlot = require("./timeSlot")

class WorkDay {
  constructor(dayName, from, to) {
    this.dayName = dayName;
    this.timeSlot = new TimeSlot(from, to)
    this.isWorkingDay = true;
  }

  changeStartTime(time) {
    this.from = time;
  }
  changeEndTime(time) {
    this.to = time;
  }
  setIsWorkingDay(value) {
    this.isWorkingDay = value;
  }
  getTimeSlot() {
    return this.timeSlot;
  }

  getIsWorkingDay() {
    return this.isWorkingDay;
  }
  getWorkDayName() {
    return this.dayName;
  }

}

module.exports = WorkDay;
