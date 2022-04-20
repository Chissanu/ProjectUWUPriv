var express = require('express');
var socket = require('socket.io');
const path = require('path');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public/pages'));

app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/pages/lobby.html'));
});

app.get('/game/lobby', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/pages/gameLobby.html'));
});


app.get('/py', runPy);

function runPy(req, res) {
    var spawn = require('child_process').spawn;

    var python = spawn('python', ['./test.py'], { detached: true, stdio: 'ignore' });

    res.redirect('https://google.com');

}

// Socket setup & pass server
var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    socket.on('gameBtn', function() {
        console.log('Running Game');
    })

    socket.on('customBtn', function() {
        console.log('Running Custom');
    })

    // King Game Btn
    socket.on('kingBtn', function() {
        console.log('Pressing King Game');
    });

    // Truth or Dare Btn
    socket.on('truthBtn', function() {
        console.log('Pressing Truth or Dare');
    });

    // Other Btn
    socket.on('otherBtn', function() {
        console.log('Pressing Other');
    });

    // Create Room Btn
    socket.on('createBtn', function() {
        console.log('Creating Lobby...');
    });

    // Create Join Btn
    socket.on('joinBtn', function() {
        console.log('Joining Lobby...');
    });
});