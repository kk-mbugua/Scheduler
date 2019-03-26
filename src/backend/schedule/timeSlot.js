class TimeSlot {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get interval(){
    return 5
  }

  get intervals() {
    const interval = this.interval;

    const from = this.from;
    let intervals = [this.from];
    const to = this.to;
    let fromTime = this.getHoursMinutes(from);
    let toTime = this.getHoursMinutes(to);

    while (
      !(fromTime.hour == toTime.hour && fromTime.minute == toTime.minute)
    ) {
      fromTime.minute += interval;
      if (fromTime.minute == 60) {
        fromTime.hour += 1;
        fromTime.minute = 0;
      }
      intervals.push(this.timeToString(fromTime.hour, fromTime.minute));
    }
    return intervals;
  }

  get duration() {
    return this.intervals.length * this.interval;
  }

  timeToString(hour, minute) {
    let strHour = hour.toString();
    let strMin = minute.toString();
    if (strHour.length < 2) {
      strHour = "0" + strHour;
    }
    if (strMin.length < 2) {
      strMin = "0" + strMin;
    }
    return strHour + strMin;
  }

  getHoursMinutes(time) {
    const hour = parseInt(time[0] + time[1]);
    const minute = parseInt(time[2] + time[3]);
    return { hour, minute };
  }

  earlierTime(time1, time2) {
    const time1Hour = parseInt(time1[0]+time1[1])
    const time2Hour = parseInt(time2[0]+time2[1])
    const time1Minute = parseInt(time1[2]+time1[3])
    const time2Minute = parseInt(time2[2]+time2[3])
    let earlierTime = ""

    if (time1Hour < time2Hour) {
      earlierTime = time1
    } else if (time1Hour > time2Hour) {
      earlierTime = time2
    } else {
      if (time1Minute < time2Minute) {
        earlierTime = time1
      } else if (time1Minute > time2Minute) {
        earlierTime = time2
      } else {
        return -1
      }

    }

    return earlierTime
  }
}


module.exports = TimeSlot;
