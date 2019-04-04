const Days = require("./days");
const TimeSlot = require("./timeSlot")
const Evaluator = require("./evaluator")

class Scheduler {
  constructor(locations, employees) {
    this.locations = locations;
    this.employees = employees;
    this.days = new Days().days;

    this.beginScheduling();
  }

  beginScheduling() {
    this.days.forEach(day => {
      while (!this.areSlotsForDayFilled(day)) {
        let slot = this.getEarliestSlot(day).slot; /* get slot with with earliest shift start time*/
        let workDay = slot.workDays[day]
        let shift = this.evaluate(workDay); /* evaluate empoyees and return the best shift */

        slot.workDays[day].addShift(shift.employee, shift.from, shift.to)
        shift.employee.addShift(slot.location, workDay, shift.from, shift.to)
      }
    });
  }

  // returns true if all slots have been filled to the best of their abilities
  areSlotsForDayFilled(day) {
    let b = true;
    let allUnfilledTimes = this.getUnfilledTimesDay(day);
    allUnfilledTimes.forEach(element => {
      if (element.unfilledTimes.length > 0) {
        b = false;
      }
    });

    return b;
  }

  //gets the times that have not been filled or evaluated yet per slot
  getUnfilledTimesDay(day) {
    let allUnfilledTimes = [];
    this.locations.forEach(location => {
      location.slots.forEach(slot => {
        let unfilledTimes = {
          day: day,
          location: location,
          slot: slot,
          unfilledTimes: this.getUnfilledTimesSlotDay(slot, day)
        };
        allUnfilledTimes.push(unfilledTimes);
      });
    });
    return allUnfilledTimes;
  }

  getUnfilledTimesSlotDay(slot, day) {
    if (slot.workDays[day] !== undefined) {
      return slot.workDays[day].unfilledIntervals;
    }
    return [];
  }

  // gets the slot with the earliest unfilled shift time
  getEarliestSlot(day) {
    let allUnfilledTimes = this.getUnfilledTimesDay(day);
    let earliestTime = "2400";
    let earliestLocationSlot = undefined;

    // get slots with unfilled times
    let unFilledSlots = allUnfilledTimes.filter(element => {
        return element.unfilledTimes.length > 0
    })

    unFilledSlots.forEach(element => {
      let thisEarliestTime = element.unfilledTimes[0];
      if (earliestTime !== this.earlierTime(earliestTime, thisEarliestTime)) {
          earliestTime = thisEarliestTime
          earliestLocationSlot = element
      }
    });

    return earliestLocationSlot
  }

  earlierTime(time1, time2) {
      return new TimeSlot().earlierTime(time1, time2)
  }

  //returns most suitable employee
  evaluate(workDay) {
      const evaluator= new Evaluator(workDay, this.employees)
      let shift = evaluator.getBestShift()
      return shift
  }
}

module.exports = Scheduler;
