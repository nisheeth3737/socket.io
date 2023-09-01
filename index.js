import './style.css';

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

const express = require('express');
const socketio = require('socket.io');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi from Codedamn');
});

const server = app.listen(1337, () => {
  console.log('Server running!');
});

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New connection');
});
