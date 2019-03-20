const Shifts = require("./shifts");
const WorkDays = require("./workdays");

class Slot {
  constructor(locationName, slotNumber) {
    this.locationName = locationName;
    this.workDays = new WorkDays().getWorkDays();
    this.slotNumber = slotNumber;
    this.shiftss = this.populateShiftss();
  }

  getShiftss() {
    return this.shiftss;
  }
  getSlotNumber() {
    return this.slotNumber;
  }

  populateShiftss() {
    let shiftss = [];
    const workingDays = this.workDays.filter(
      workday => workday.getIsWorkingDay() == true
    );

    workingDays.forEach(workday => {
      const shifts = new Shifts(this.locationName, workday, this.slotNumber);
      shiftss.push(shifts);
    });
    return shiftss;
  }



  unfilledWorkTimes(day) {
    let unfilledWorkTimes = [];
    
    const dayShiftsList = this.shiftss.filter(
      shifts =>
        day.toLowerCase() ==
        shifts
          .getWorkDay()
          .getWorkDayName()
          .toLowerCase()
    );
    const dayShifts = dayShiftsList[0]
    
    const dayShiftsIntervals = dayShifts.allShiftTimeIntervals();
    const workTimeIntervals = dayShifts
      .getWorkDay()
      .getTimeSlot()
      .getIntervals();
    const diff = workTimeIntervals.filter(interval => 
      dayShiftsIntervals.indexOf(interval) == -1
    );
    return diff
  }
}

module.exports = Slot;
