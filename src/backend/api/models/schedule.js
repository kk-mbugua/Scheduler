const mongooose = require("mongoose")
const Schema = mongooose.Schema

const scheduleSchema = new Schema({
    name: String,
    slots: [{
        slotNumber: Number,
        days: [{
            day_name: String,
            from: String,
            to: String,
            shifts: [{
                employee: Schema.Types.ObjectId,
                from: String,
                to: String
            }]
        }]
    }]
})

exports.exports = mongooose.model("schedule", scheduleSchema, "schedule")
