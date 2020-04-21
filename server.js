const application = require("./application");
const db = require("./db");
application.listen(3005, ()=>{
    console.log("Application started at 3005")
})