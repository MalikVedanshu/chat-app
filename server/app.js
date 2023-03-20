import express from 'express';
const app = express();
import http from "http";
import { Server } from 'socket.io';
// const path = require('path');
// const cors = require("cors");

let port = 5000;

// app.use(express.static(path.join(__dirname, 'build')));

// app.use(cors())

const server = http.createServer(app);

const io = new Server(server);

// const io = new Server(server, {
//     cors: {
//         origin: "http://172.20.10.4:3000",
//         methods: ["GET", "POST"]
//     }
// });

io.on('connection', socket => {
    
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


server.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})


