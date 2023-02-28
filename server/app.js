const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://172.20.10.13:3000",
        methods: ["GET", "POST"]
    }
});

server.listen(5000, () => {
    console.log("Server is running.")
})