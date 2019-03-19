var WorkDay = require("./workday");

class WorkDays {
  constructor() {
    this.WorkDays = this.populate();
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
      let workday = new WorkDay(day);
      //This is where i set Sat and Sun as not working days
      if (day == "Saturday" || day == "Sunday") {
        workday.setIsWorkingDay(false);
      }
      workdays.push(workday);
    });
    return workdays;
  }
}

module.exports = WorkDays;
