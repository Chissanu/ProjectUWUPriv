var express = require('express');
var socket = require('socket.io');
const path = require('path');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/game/game.html'));
});

app.get('/py', runPy);

function runPy(req, res) {
    var spawn = require('child_process').spawn;

    var process = spawn('python', ['./test.py']);

    process.stdout.on('data', function(data) {
        res.send(data.toString());
    });
}

// Socket setup & pass server
var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    })

    socket.on('gameBtn', function() {
        console.log('Running Game');
    })

    socket.on('customBtn', function() {
        console.log('Running Custom');
    })

    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data);
    });
});