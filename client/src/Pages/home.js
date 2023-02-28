import React,{useState} from "react";

function Home() {
    const [chatId, setChatId] = useState("");
    
    const createRoom = (e) => {
        console.log(`A room is created: ${chatId}`)
    }

    const joinRoom = (e) => {
        console.log(`You have joined a room: ${chatId}`);
    }

    return (
        <>
            <div className="myChat">
                <h1>Create Chat </h1>
                <input type="text" className="idBox" placeholder="Create Chat ID" onChange={(e) => {setChatId(e.target.value)}} />
                <div className="startbuttons">
                    <input type="button" value="Create Room" onClick={createRoom} />
                    <input type="button" value="Join Room" onClick={joinRoom} />
                </div>
            </div>
        </>
    )
}
export default Home;