const { Schema, model } = require("mongoose");

const NewsSchema = new Schema({
    title : String,
    description : String,
    createdOn : {}, // Default Date using date.now(),
    editor : String
})
