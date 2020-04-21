const express = require("express");
const application = express();
const UserRoutes = require("./routes/users");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
application.use(bodyParser.json())

application.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

application.use("/users", UserRoutes)
module.exports = application;