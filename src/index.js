<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database')
const app = express()
const port = 3000
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './frontend/page/index.css';
import App from './frontend/page/App';
import * as serviceWorker from './frontend/page/serviceWorker';
//import Tester from "./frontend/page/compTester"
>>>>>>> 701f4c800f48793ce158a5630c63468a20dc69d5

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

<<<<<<< HEAD


app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
=======
ReactDOM.render(<App />, document.getElementById('table'));
serviceWorker.unregister();
>>>>>>> 701f4c800f48793ce158a5630c63468a20dc69d5
