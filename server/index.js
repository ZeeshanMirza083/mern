const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('join', function (room) {
        let game = new Game();
        console.log('new game created....');
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

class Game {
    arr = [null, null, null, null, null, null]
}