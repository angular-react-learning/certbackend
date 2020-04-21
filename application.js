const express = require("express");
const application = express();
const UserRoutes = require("./routes/users");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
application.use(bodyParser.json())

application.use("/users", UserRoutes)
module.exports = application;