const WorkDay = require("./workday");
const Employee = require("./employee");
const Data = require("./data");
const Days = require("./days");
const Evaluator = require("./evaluator");

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
  let empData = data[emp];
  let employee = new Employee(
    empData.name,
    empData.requestedHours,
    empData.isCommuter
  );
  const days = new Days().days;
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

let wd = new WorkDay("monday", "0800", "1700");
let e = new Evaluator(wd, employees);

console.log();
