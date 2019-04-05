const WorkDay = require("./WorkDay")

class Slot {
    constructor(slotNumber, location) {
        this.slotNumber = slotNumber
        this.location = location
        this.workDays = {
        }
    }
    addWorkDay(day, from, to) {
        this.workDays[day] = new WorkDay( day, from, to, this.location)
    }
}

module.exports = Slot
