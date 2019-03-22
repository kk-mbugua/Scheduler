const Schedule = require("./Schedule")
class CreateSchedule {
    constructor(departmentName) {
        this.schedule = new Schedule(departmentName)
    }
}