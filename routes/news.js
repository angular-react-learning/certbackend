const Router = require("express").Router();
// create and add new news model and import here.

// /user/register
// /user/login
// /user/profile

Router.get("/", async (req, res) => {
    // Use mongooose find to get news from DB.
    res.send([])
})
/// this will be used admin dashboard and frontend page.


Router.post("/add", (req, res) => {
    // create mongo model instance similar to login routes and store in DB.
})

Router.delete("/delete/:id", (req, res) => {
    // id is recieved as req.params.id;
    // use mongoose model delete method to delete record by id.
})

module.exports = Router;