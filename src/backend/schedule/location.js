const Slot = require("./Slot")

class Location {
    constructor(name, numberOfSlots) {
        this.name = name
        this.numberOfSlots = numberOfSlots
        this.slots = []
        this.addSlots()
    }

    addSlots() {
        for (let i = 0; i < this.numberOfSlots; i++) {
            const slot = new Slot(i, this)
            this.slots.push(slot)
        }
    }
}

module.exports = Location
