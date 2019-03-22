const Location = require("./Location")
const Employee = require("./Employee")
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
        console.log("autoAdded")
    }
}

module.exports = Schedule
