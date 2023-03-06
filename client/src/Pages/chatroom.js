import React,{useState, useEffect} from "react";

const io = require("socket.io-client")
const socket = io("http://192.168.1.36:5000")


function Chatroom() {
    const [sms, setSms] = useState("")
    const [allSms, setAllSms] = useState([["...chat started", "leftmsg"]]);
    const [room, setRoom] = useState("")

    const onSmsSend = () => {
        socket.emit("send-sms", sms, room);
        setAllSms([...allSms, [sms, "rightmsg"]])
        setSms("");
    }
    socket.on("recieve-sms", (message, room) => {
        setAllSms([...allSms, [message, "leftmsg"]]);
    })

    useEffect(() => {
        let roomname = window.location.pathname.slice(6);
        setRoom(roomname);
        socket.emit("join-room", roomname)
    },[])

    const smsVal = sms;
    
    return (
        <>
            <div className="roomPage">
                <h1>Chat-Room </h1>
                <div className="chatBox">
                    {
                        allSms.length > 0 ? allSms.map((ele, idx) => (
                            <div key={idx} className={ele[1]}> {ele[0]} </div>
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