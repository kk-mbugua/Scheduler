const mongooose = require("mongoose")
const Schema = mongooose.Schema

const shiftSchema = new Schema({   
        employee: {type: Schema.Types.ObjectId, ref: "employee"},
        location: {type: Schema.Types.ObjectId, ref: "location"},
        position: {type: Schema.Types.ObjectId, ref: "position"},
        from: {type: String, required: true},
        to: {type: String, require: true}
})

exports.exports = mongooose.model("shift", shiftSchema, "shifts")