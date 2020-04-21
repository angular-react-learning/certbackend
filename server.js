const application = require("./application");
const db = require("./db");
application.listen(3003, ()=>{
    console.log("Application started at 3003")
})