import './style.css';

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
