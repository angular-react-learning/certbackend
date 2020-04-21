const express = require("express");
const application = express();
const UserRoutes = require("./routes/users");

application.use("/users", UserRoutes)
module.exports = application;