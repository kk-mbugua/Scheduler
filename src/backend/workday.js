
class WorkDay {
  constructor(dayName) {
    this.day = dayName;
    this.from = "0800";
    this.to = "2200";
    this.isworkDay = true;
  }

  changeStartTime(time) {
    this.from = time;
  }
  changeEndTime(time) {
    this.to = time;
  }
  setIsWorkingDay(value) {
    this.isWorkingDay = value
  }
}

module.exports = WorkDay;