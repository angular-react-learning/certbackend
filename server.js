const http = require("http");
const application = require("./application");
const db = require("./db");
const io = require('socket.io')

const server = http.createServer(application);

const socketio = io(server)

socketio.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});

server.listen(3005, () => {
    console.log("Application started at 3005")
})
