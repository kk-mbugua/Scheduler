const mongooose = require("mongoose")
const Schema = mongooose.Schema

const positionSchema = new Schema({
    location: {location: Schema.Types.ObjectId, ref: "location"},
    from: {type: String, required: true},
    to: {type: String, required: true},
    shifts: [{
        shift: {type: Schema.Types.ObjectId, ref: "shift"}
    }]
})

exports.exports = mongooose.model("position", positionSchema, "positions")