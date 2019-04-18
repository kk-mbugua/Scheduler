const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const router = express.Router();
const Location = mongoose.model("location", )
const db_uri =
  "mongodb+srv://kk:p3rs0n4l@cluster0-b0nna.azure.mongodb.net/ut22?retryWrites=true";

//configure app
const app = express();
app.use(express.json());

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log("Something is happening.");
  next(); // make sure we go to the next routes and don't stop here
});
//test router
router.get("/", (req, res) => {
  res.json({ message: "Welcome to your api" });
});

//other routes go here
router.route("/location").post((req, res) => {
  const location = new Location({
    name: req.body.name,
    number_of_position: req.body.number_of_position
  });

  location.save(err => {
    if (err) res.send(err);
    res.json({ message: "Bear created!" });
  });
});

// register routes. they will be prefixed with /api
app.use("/api", router);

// mongoose.connect(db_uri, { useNewUrlParser: true }, (err)=> {
//     if (err) {
//         console.log("Connection to database UNSUCCESSFUL")
//         throw(err)
//     }
//     console.log("Connection to database SUCCESSFUL")
// });

// app.get("/", (req, res) => {});

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
