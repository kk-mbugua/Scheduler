const TimeSlot = require("./TimeSlot");
const Shift = require("./Shift");
const Employee = require("./Employee");
const WorkDay = require("./WorkDay");
const Slot = require("./Slot");
const Location = require("./Location");
const Schedule = require("./Schedule");
const Data = require("./data");

function sorter(schedule) {
  //days of the week
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];
  const worktimes = [
    "0845-2200",
    "0845-2200",
    "0845-2200",
    "0845-2200",
    "0845-1700",
    "0000-0000",
    "0000-0000"
  ];

  //locations and work days
  let hd = new Location("Help Desk", 2);
  let sc = new Location("Service Center", 1);
  let tl = new Location("Telecom", 1);
  let locations = [hd, sc, tl];

  locations.forEach(location => {
    location.slots.forEach(slot => {
      days.forEach((day, index) => {
        let fromTo = worktimes[index].split("-");
        let from = fromTo[0];
        let to = fromTo[1];
        slot.addWorkDay(day, from, to);
      });
    });
  });

  schedule.addLocation(hd);
  schedule.addLocation(sc);
  schedule.addLocation(tl);

  //employees
  let employessName = [
    "advark",
    "tony",
    "lisa",
    "jenny",
    "peaches",
    "summer",
    "scooter"
  ];
  let employees = [];
  let data = new Data();
  employessName.forEach(emp => {
    let employee = new Employee(emp);
    let empData = data[emp];
    days.forEach(day => {
      empData[day].forEach(d => {
        let time = d.split("-");
        const from = time[0];
        const to = time[1];
        employee.addAvailableTime(day, from, to);
      });
    });
    employees.push(employee);
  });

  employees.forEach(employee => {
    schedule.addEmployee(employee);
  });

    schedule.autoAddShifts()
  return schedule;
}

//schedule
let schedule = new Schedule("University Technology");
let sorted = sorter(schedule);

