import React from "react";
import Home from './Pages/home.js';
import Chatroom from './Pages/chatroom.js';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Chatroom />} />
      </Routes>
    </>
  )
}
export default App;