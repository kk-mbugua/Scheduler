class TimeSlot {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.timeSlotInterval = 1;
    this.duration = 0;
    this.intervals = [];
    this.getDurationAndIntervals();
  }
  getStartTime() {
    return this.from;
  }
  getEndTime() {
    return this.to;
  }
  getDuration() {
    return this.duration;
  }
  getIntervals() {
    return this.intervals;
  }

  getHoursAndMinutesAsString(time) {
    const list = [time[0] + time[1], time[2] + time[3]];
    return list;
  }

  getHoursMinutesMilli(hours, mins) {
    hours = parseInt(hours);
    mins = parseInt(mins);
    return hours * 60 * 60 * 1000 + mins * 60 * 1000;
  }

  getTimeFromTo() {
    const from = this.getHoursAndMinutes(this.from);
    const fromMili = this.getHoursMinutesMilli(from[0], from[1]);
    const to = this.getHoursAndMinutes(this.to);
    const toMili = this.getHoursMinutesMilli(to[0], to[1]);

    const timeFrom = new Date();
    timeFrom.setTime(0);
    timeFrom.setTime(fromMili);
    const timeTo = new Date();
    timeTo.setTime(0);
    timeTo.setTime(toMili);

    return [timeFrom, timeTo];
  }

  addMinutes(time, mins) {
    const hoursAndMinutes = this.getHoursAndMinutesAsString(time);
    let hours = parseInt(hoursAndMinutes[0]);
    let minutes = parseInt(hoursAndMinutes[1]);
    const minsToAdd = mins % 60;
    const hoursToAdd = Math.floor(mins / 60);
    hours += hoursToAdd;
    minutes += minsToAdd;
    if (minutes == 60) {
      hours += 1;
      minutes = 0;
    }
    let hoursAsString = hours.toString();
    let minutesAsString = minutes.toString();
    if (hoursAsString.length == 1) {
      hoursAsString = "0" + hoursAsString;
    }
    if (minutesAsString.length == 1) {
      minutesAsString = "0" + minutesAsString;
    }
    const finalTimeString = hoursAsString + minutesAsString;
    return finalTimeString;
  }

  getDurationAndIntervals() {
    let intervals = [];
    let from = this.from;
    let to = this.to;
    let mins = 0;
    while (from != to) {
      intervals.push(from);
      mins += 1;
      from = this.addMinutes(from, 1);
    }
    intervals.push(from)
    this.duration = mins;
    this.intervals = intervals;
  }
}

module.exports = TimeSlot;
