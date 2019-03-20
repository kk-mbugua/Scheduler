class Schedule {
  constructor() {
    this.locations = [];
    this.schedule;
  }

  addLocation(location) {
    this.locations.push(location);
  }

  getLocation(locationName) {
    return this.locations.filter(
      location => location.getLocationName() == locationName
    )

  }

  addEmployee() {}

  getEmployeeSchedule() {}

  getLocationDaySchedule() {}

  getLocationWeekSchedule() {}

  getDaySchedule() {}
}

module.exports = Schedule;
