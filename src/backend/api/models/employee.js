const mongooose = require("mongoose")
const Schema = mongooose.Schema
const days = require("./days")

const employeeSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    isCommuter: Boolean,
    days: [{
        day_name: {type: String, enum: days},
        times: [{
            from: String,
            to: String
        }]
    }]
})

module.exports = mongooose.model("employee", employeeSchema, "employees")

