const mongooose = require("mongoose")
const Schema = mongooose.Schema

const scheduleSchema = new Schema({
    department: {type: String, required: true, unique: true},
    positions: [{
        position:{type: Schema.Types.ObjectId, ref: "position"}
    }]
})

exports.exports = mongooose.model("schedule", scheduleSchema, "schedules")
