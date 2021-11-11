// 
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import socketIo from "socket.io-client";
import { useEffect } from 'react';
const ENDPOINT = "localhost:5000";
let socket;

function App() {


  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      alert('Connected');

    })
    console.log(socket);
    socket.emit('joined', { user: 'zee' })

    socket.on('welcome', (data) => {
      console.log(data.user, data.message);
    })

    socket.on('userJoined', (data) => {
      console.log(data.user, data.message);
    })

    socket.on('leave', (data) => {
      console.log(data.user, data.message)
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [])

  return (


    <>
    </>

  );
}

export default App;
