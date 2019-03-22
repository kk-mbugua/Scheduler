const WorkDay = require("./WorkDay")
class Slot {
    constructor(slotNumber) {
        this.slotNumber = slotNumber
        this.workDays = {
        }
    }
    addWorkDay(day, from, to) {
        this.workDays[day] = new WorkDay(day, from, to)
    }
}

module.exports = Slot
