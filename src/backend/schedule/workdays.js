var WorkDay = require("./workday");

class WorkDays {
  constructor() {
    this.workDays = this.populate();
  }

  populate() {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    let workdays = [];
    days.forEach(day => {
      let workday = new WorkDay(day, "0845", "2200");
      //This is where i set Sat and Sun as not working days
      if (day == "Saturday" || day == "Sunday") {
        workday.setIsWorkingDay(false);
      }
      workdays.push(workday);
    });
    return workdays;
  }

  getWorkDay(day) {
    let theWorkDay = -1
    this.workDays.forEach(workDay => {
      if (workDay.getWorkDayName().toLowerCase() === day.toLowerCase()) {
        theWorkDay = workDay;
      }
    });
    return theWorkDay
  }

  setWorkHours(dayName, from, to) {
    let workday = this.getWorkDay(dayName)
    workday.changeStartTime(from)
    workday.changeEndTime(to)
  }

  totalWorkHours() {
    let sumOfHours = 0
    this.workDays.forEach(workDay => {
        sumOfHours += workDay.getTimeSlot().getDuration()
    });
    return sumOfHours;
  }

  getWorkDays() {
    return this.workDays
  }
}

module.exports = WorkDays;
