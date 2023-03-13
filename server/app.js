const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://172.20.10.14:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on("send-sms", (msg, room,name) => {
        if(name === "") {
            socket.to(room).emit("recieve-sms", [msg, "someone"]);
        } else {
            socket.to(room).emit("recieve-sms", [msg, name]);
        }
        
    })
    socket.on('join-room', (room,name )=> {
        socket.join(room);
        if(name === "") {
            socket.to(room).emit("someone-joined", "Someone");
        } else {
            socket.to(room).emit("someone-joined", name);
        }
        
    })
})


server.listen(5000, () => {
    console.log("Server is running.")
})

