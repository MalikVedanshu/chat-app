import React, { useEffect, useState } from "react";
const io = require('socket.io-client');
const socket = io('http://192.168.1.33:5000');

function Combined() {

    const [chatId, setChatId] = useState("");
    const [chats,setChats] = useState([]);

    const createRoom = (e) => {
        console.log(e.target.value);
    }

    const joinRoom = async () => {
        console.log("you joined a room");
    }

    useEffect(() => {

    }, [])



    return (
        <>
            <div className="myChat">
                <h1>Create Chat </h1>

                <div className="roomPage">
                    <h1>Chat-Room </h1>
                    <div className="chatBox">
                        {
                            chats.length > 0 ? chats.map((ele, idx) => (
                                <div>{ele} </div>
                            )) : <div> </div>
                        }
                    </div>
                </div>

                <input type="text" className="idBox" placeholder="Enter Chat ID" onChange={(e) => { setChatId(e.target.value) }} />
                <div className="startbuttons">
                    <input type="button" value="Create Room" onClick={createRoom} />
                    <input type="button" value="Join Room" onClick={joinRoom} />
                </div>
            </div>
        </>
    )
}
export default Combined;