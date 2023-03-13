import React from "react";
import Chatroom from './Pages/chatroom.js';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chatroom />} />
      </Routes>
    </>
  )
}
export default App;