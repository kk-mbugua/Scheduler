const TimeSlot = require("./TimeSlot")
const Shift = require("./Shift")
const Employee = require("./Employee")
const WorkDay = require("./WorkDay")
const Slot = require("./Slot")
const Location = require("./Location")
const Schedule = require("./Schedule")

let t = new TimeSlot("0800", "1100")
let s = new Shift("0800", "1100")
let e = new Employee
let w = new WorkDay("monday", "0800", "1100")
let sl = new Slot()
let l = new Location("Help Desk", 2)
let sc = new Schedule("University Technology")

sl.addWorkDay("monday", "0800", "1100")
sl.addWorkDay("tuesday", "0800", "2200")
e.addAvailableTime("monday", "0800", "1100")
e.updateAvailableTime("monday", "0900", "1100")
w.addShift(e, "0800", "0900")
sc.addLocation("HelpDesk", 4)
sc.autoAddShifts()


console.log(sc.locations)
