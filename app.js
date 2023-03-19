// importing express
const express = require("express");

// init
const app = express();

// middleware
// /users 
app.use("/users", (req, res, next) => {
  console.log("Calling /user route");
  res.send("Response from /users ");
});

// /
app.use("/", (req, res, next) => {
  console.log("Calling / route");
  res.send("Response from / ");
});

// running server
app.listen(3000);
