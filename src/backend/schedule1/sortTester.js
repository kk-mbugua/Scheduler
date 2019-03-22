
const Schedule = require("./schedule")
const UnavailableTimes = require("./unavailableTimes")
const Location = require("./location")
const Data = require("./data")
const AddShifts = require("./addShifts")
const Employee = require("./employee")

//schedule
let schedule = new Schedule()
let hd = new Location("help desk", 2)
let sc = new Location("service centre", 1)
let tl = new Location("telecom", 1)

let locations = [hd, sc, tl]

locations.forEach(location => {
    schedule.addLocation(location)
});

//employees
let data = new Data()
let one = data.advark
let two = data.tony
let three = data.lisa
let four = data.jenny
let five = data.peaches
let six = data.summer
let seven = data.scooter

const basicemp = [one, two, three, four, five, six, seven]
//const basicemp = [two]
const employees = []

basicemp.forEach(emp => {
    let employee = new Employee(emp["name"])
    let times = Object.getOwnPropertyNames(emp)
    for (let i = 1; i < times.length; i++){
        
        let day = times[i]
        let t = emp[day]
        t.forEach(n => {
            let from = n.split("-")[0]
            let to = n.split("-")[1]
            employee.unavailableTimes.addUnavailableTime(day, from, to)
            
        });
        employee.populateAvailableTimes()
    }
    employees.push(employee)
});

let e = employees[5]
e.populateAvailableTimes()
// const util = require('util')
// console.log(util.inspect(e.monday, { maxArrayLength: null }))
//sorter
let sorter = new AddShifts(schedule, employees)
sorter.addShifts()


console.log()
