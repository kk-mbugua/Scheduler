class Shift {
  constructor(employeeName, from, to) {
    this.employeeName = "";
    this.timeSlot = {
      from: "",
      to: ""
    };
  }
  getStartTime() {
    return this.timeSlot.from
  }

  getEndTime() {
    return this.timeSlot.to
  }

  getEmployeeName() {
    return this.employeeName
  }
}
