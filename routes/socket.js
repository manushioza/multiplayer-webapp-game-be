import { io } from "../index.js"

const socket = require("socket.io");

io.on('connection', (socket) => {
    console.log("Connection established")
})
