// // // const http = require('http');
// // const WorkDays = require('./workdays');
// // const Shift = require('./shift')
// // const Shifts = require('./shifts')
// const Location = require("./location")
// // // const TimeSlot = require("./timeSlot");
// // const Slot = require("./slot")
// // const WorkDay = require("./workday")

// // const shift1 = new Shift("peter", "0800", "1000")
// // const shift2 = new Shift("mary", "1000", "1230")
// // const shift3 = new Shift("joe", "1230", "2000")
// // const shift4 = new Shift("Lisa", "2000", "2200");
// // let shiftlist = [shift1, shift2, shift3, shift4];
// const location = new Location("Service Centre", 2)
// // const workdays = new WorkDays()
// // const workday = new WorkDay("Monday", "1800", "2000")

// // let shifts = new Shifts(location.getLocationName(), workday, 1)

// // shiftlist.forEach(shift => {
// //     shifts.addShift(shift)
// // });
// // let s = new Slot("hdhdh", 1)

// // console.log(s.unfilledWorkTimes("monday"))
// console.log()

//employees
const Data = require("./data")
const Employee = require("./employee")
const TimeSlot = require("./timeSlot")
let data = new Data()

// let two = data.tony


// //const basicemp = [one, two, three, four, five, six, seven]
// const basicemp = [two]
// const employees = []

// basicemp.forEach(emp => {
    
//     let employee = new Employee(emp["name"])
//     console.log(basicemp.length)
//     let times = Object.getOwnPropertyNames(emp)
//     for (let i = 1; i < times.length; i++){
//         let day = times[i]
//         let t = emp[day]
//         t.forEach(n => {
//             let from = n.split("-")[0]
//             let to = n.split("-")[1]
//             employee.unavailableTimes.addUnavailableTime(day, from, to)
//         });
//     }
//     employees.push(employee)
// });

let e = new Employee("Tom")
let t = new TimeSlot("0845", "2100")
e.unavailableTimes.monday.push()

console.log(e)
