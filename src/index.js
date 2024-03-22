const path = require('path');
const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//stactic files
app.use(express.static(path.join(__dirname, "public")));

//start server
const server = app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});

const SocketID = require('socket.io');
const io = SocketID(server);
io.on('connection', () => {
    console.log('new Connection');
});

require('./sockets')(io);
//db conection
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/chat-database')
.then(db => console.log('db is connected'))
.catch(err => console.log(err));