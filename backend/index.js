const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

var db = require('./Database')

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/API/ScheduleTable', require('./API/ScheduleTable'));


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

db.query("Select * from users", (err,res) => {
if (err.error)
    return console.log(err.error);
console.log(`PostgreSQL connected, users table queried successfully.`)
});

module.exports = app;