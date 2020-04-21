const Router = require("express").Router();

// /user/register
// /user/login
// /user/profile

Router.post("/register", (req, res) => {
    res.send("/register")
})

Router.post("/login", (req, res) => {
    res.send("/login")
})

Router.get("/profile", (req, res) => {
    res.send("/profile")
})

module.exports = Router;