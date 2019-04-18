const mongooose = require("mongoose")
const Schema = mongooose.Schema
const days = require("./days")

const employeeSchema = new Schema({
    first_name: {type: String, required: true, unique: false},
    last_name: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    isCommuter: {type: Boolean, required: false, unique: false},
    days: [{
        day_name: {type: String, enum: days, required: true},
        times: [{
            from: {type: String, required: true, unique: true},
            to: {type: String, required: true, unique: true}
        }]
    }]
})

module.exports = mongooose.model("employee", employeeSchema, "employees")

