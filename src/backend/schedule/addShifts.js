const Schedule = require("./schedule");
const Employee = require("./employee");
const Shift = require("./shift");
const TimeSlot = require("./timeSlot");

class AddShifts {
  constructor(schedule, employees) {
    this.schedule = schedule;
    this.employees = employees;
  }

  addShifts() {
    let locations = this.schedule.locations;
    this.addShiftsToLocation(locations);
  }

  addShiftsToLocation(locations) {
    locations.forEach(location => {
      console.log("------------------");
      console.log(" ");
      console.log(location.locationName);
      let slots = location.slots.slots;
      slots.forEach(slot => {
        this.addShiftToSlot(slot);
      });
    });
  }

  addShiftToSlot(slot) {
    console.log(" ");
    console.log("Slot", slot.slotNumber);
    let shiftss = slot.shiftss;
    shiftss.forEach(shifts => {
      this.addShiftsToDay(shifts);
    });
  }

  addShiftsToDay(shifts) {
    let workDay = shifts.workDay;
    let workDayIntervals = workDay.timeSlot.intervals;

    while (workDayIntervals.length != 0) {
      let earliestTime = workDayIntervals[0];
      let selectedEmployee = this.selectEmployee(
        earliestTime,
        workDay.getWorkDayName()
      );
      let emp = selectedEmployee[0];
      let from = earliestTime;
      let to = selectedEmployee[1];
      shifts.addShift(emp, from, to);
      console.log(workDay.getWorkDayName(), emp.name, from, to);
      //update filled work times
      let t = new TimeSlot(from, to);
      let shiftIntervals = t.intervals;
      let updatedIntervals = shiftIntervals.filter(
        si => workDayIntervals.indexOf(si) > 0
      );
      workDayIntervals = updatedIntervals;
    }

    // apend to shifts.shifts)
  }

  selectEmployee(earliestTime, day) {
    let employees = this.employees;
    let theEmployee = new Employee("Can't Fill");
    let timeUntil = earliestTime;
    let duration = 1;

    employees.forEach(employee => {
      let empIntervals = employee.getAvailableTimesIntervals(day);
      let i = empIntervals.indexOf(earliestTime);
      if (i >= 0) {
        let startTime = empIntervals[i];
        let endTime = empIntervals[i];
        for (; i < empIntervals.length; i++) {
          if (this.hasTimeSkip(endTime, empIntervals[i])) {
            break;
          }
          endTime = empIntervals[i];
        }
        let t = new TimeSlot(startTime, endTime);
        let thisDuration = t.duration;

        if (thisDuration >= duration) {
          duration = thisDuration;
          timeUntil = endTime;
          theEmployee = employee;
        }
      }
    });
    theEmployee.updateUnavailableTimes(day, earliestTime, timeUntil);
    if (theEmployee.name != "Can't Fill") {
      theEmployee.populateAvailableTimes();
    }

    console.log;
    return [theEmployee, timeUntil, duration];
  }

  hasTimeSkip(oldTime, newTime) {
    let b = false;
    let t = new TimeSlot(oldTime, newTime);
    if (t.duration > 1) {
      b = true;
    }
    return b;
  }
}

module.exports = AddShifts;
