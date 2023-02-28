import React, { useState } from "react";
const io = require('socket.io-client');
const socket = io('http://172.20.10.13:8000');

function Home() {
    const [isConnected, setIsConnected] = useState("Not connected");
    const [chatId, setChatId] = useState("");

    const createRoom = (e) => {
        console.log(`A room is created: ${chatId}`)
    }

    const joinRoom = async () => {
        await socket.emit('user-joined', () => {
            setIsConnected(`new user has joined.`);
        });
    }

    

    return (
        <>
            <div className="myChat">
                <h1>Create Chat </h1>
                <h2>{isConnected}</h2>
                <input type="text" className="idBox" placeholder="Create Chat ID" onChange={(e) => { setChatId(e.target.value) }} />
                <div className="startbuttons">
                    <input type="button" value="Create Room" onClick={createRoom} />
                    <input type="button" value="Join Room" onClick={joinRoom} />
                </div>
            </div>
        </>
    )
}
export default Home;