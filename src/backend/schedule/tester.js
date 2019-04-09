const moment = require("moment")

let startTime = moment().set("hour", 8).set("minute", 45)
const endTime = moment().set("hour", 11).set("minute", 0)
console.log(endTime.format("hh:mm A") === startTime.format("hh:mm A"))