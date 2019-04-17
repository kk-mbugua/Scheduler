const express = require("express")
const mongooose = require("mongoose")
const port = process.env.PORT || 5000;
const db_uri = "mongodb+srv://kk:p3rs0n4l@cluster0-b0nna.azure.mongodb.net/ut?retryWrites=true"

const app = express()
app.use(express.json())

mongooose.connect(db_uri, {useNewUrlParser: true})

app.get("/shifs")