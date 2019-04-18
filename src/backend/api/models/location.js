const mongooose = require("mongoose")
const Schema = mongooose.Schema

const locationSchema = new Schema({
    name: {type: String, required: true, unique: true},
    number_of_positions: {type: Number, required: false, unique: false},
})

exports.exports = mongooose.model("location", locationSchema, "locations")