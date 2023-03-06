const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://192.168.1.36:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on("send-sms", (msg, room) => {
        socket.to(room).emit("recieve-sms", msg);
    })
    socket.on('join-room', room => {
        socket.join(room)
    })
})


server.listen(5000, () => {
    console.log("Server is running.")
})

