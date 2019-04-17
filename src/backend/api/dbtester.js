const mongoose = require("mongoose")
const employee = require("./models/employee")

const uri = "mongodb+srv://kk:p3rs0n4l@cluster0-b0nna.azure.mongodb.net/ut22?retryWrites=true/ut"

mongoose.connect(uri, { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", ()=>{
    console.log("connection succeded")

})

const e = new employee({
    first_name: "Nemo",
    last_name:"Castelano",
    email: "email@address",
    isCommuter: true, 
    days: [{day_name: "monday", times: [{from: "0800", to: "1300"}]}]
})

e.save(err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("saved")
})


