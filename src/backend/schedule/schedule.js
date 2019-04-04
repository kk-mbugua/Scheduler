
const Scheduler = require("./scheduler")

class Schedule {
    constructor(department) {
        this.department = department 
        this.locations = []
        this.employees = []
    }

    addLocation(location){
        this.locations.push(location)
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    autoAddShifts(preferences) {
        new Scheduler(this.locations, this.employees)
    }
}

module.exports = Schedule
