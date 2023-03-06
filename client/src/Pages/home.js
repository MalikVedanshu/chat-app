import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
const io = require('socket.io-client');
const socket = io('http://172.20.10.14:5000');

function Home() {
    const navigate = useNavigate();
    
    const [chatId, setChatId] = useState("");

    const joinRoom = async () => {
        navigate(`/room/${chatId}`)
    }

    

    return (
        <>
            <div className="myChat">
                <h1>Create Chat </h1>
                
                <input type="text" className="idBox" placeholder="Create Chat ID" onChange={(e) => { setChatId(e.target.value) }} />
                <div className="startbuttons">
                    <input type="button" value="Join Room" onClick={joinRoom} />
                </div>
            </div>
        </>
    )
}
export default Home;