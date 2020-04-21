const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username : String,
    email : String,
    password : String
})

const UserModel = new model("user", UserSchema, "users");

module.exports = UserModel;