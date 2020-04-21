const Router = require("express").Router();
const UserModel = require("../model/users");
// /user/register
// /user/login
// /user/profile

Router.post("/register", async (req, res) => {

    // Add Bcrypt for password hashing.

    const User = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    const inserted = await User.save();
    // return the inserted _id for user.
    res.send({
        message: "User successfully registered", inserted: {
            id: ""
        }
    })
})

Router.post("/login", (req, res) => {
    res.send("/login")
})

Router.get("/profile", (req, res) => {
    res.send("/profile")
})

module.exports = Router;