import React, { useState } from "react";

import io from "socket.io-client";
const socket = io();


function Chatroom() {
    const [name, setName] = useState("")
    const [sms, setSms] = useState("")
    const [allSms, setAllSms] = useState([["...join room to start chat", "leftInfo", ""]]);
    const [room, setRoom] = useState("")

    const onSmsSend = () => {
        socket.emit("send-sms", sms, room,name);
        setAllSms([...allSms, [sms, "rightmsg", "you"]])
        setSms("");
    }
    const joinRoom = () => {
        if(room === "") {
            setAllSms([...allSms, [`you joined a public room.`, "leftInfo", ""]])
            socket.emit("join-room", room,name);
        } else {
            setAllSms([...allSms, [`you joined room: ${room}.`, "leftInfo", ""]])
            socket.emit("join-room", room,name);
        }
        
    }
    socket.on("recieve-sms", (data) => {
        setAllSms([...allSms, [data[0], "leftmsg",data[1] ]]);
    })
    socket.on("someone-joined", name => {
        setAllSms([...allSms, [`${name} joined the room`, "leftInfo", ""]])
    })

    const smsVal = sms;

    return (
        <>
            <div className="roomPage">
                <div className="roomDetails">
                    <input type="text" className="roomText" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="roomText" placeholder="Enter Room ID" onChange={(e) => setRoom(e.target.value)} />
                    <input type="button" className="roomJoinBtn" value="JOIN" onClick={joinRoom} />
                </div>
                <div className="chatBox">
                    {
                        allSms.length > 0 ? allSms.map((ele, idx) => (
                            <div key={idx} className={ele[1]}>{ele[0]} <sub style={{color:"rgb(207, 207, 207)"}}>{ele[2]}</sub>  </div>
                        )) : <div> </div>
                    }
                </div>
                <div className="typeAndSendBox">
                    <input type="text" className="typeChatBox" value={smsVal} onChange={(e) => setSms(e.target.value)} />
                    <input type="button" className="sendChatBox" value="Send" onClick={onSmsSend} />
                </div>

            </div>
        </>
    )
}
export default Chatroom;