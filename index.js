var express = require('express');
var socket = require('socket.io');
const path = require('path');
const { spawn } = require('child_process');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));


app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/lobby.html'));
});

app.get('/custom', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/customDrink.html'));
});

app.get('/game/lobby', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/gameLobby.html'));
});

app.get('/game/lobby/create', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/gameRoom.html'));
});

app.get('/py', (req, res) => {

    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['python\\pump.py', '2']);
    // collect data from script

    python.stdout.on('data', function(data) {
        console.log('Running Python Script');
        dataToSend = data.toString();
    });
    console.log('Run');
    // Send to file
    res.sendFile(path.join(__dirname, 'public/lobby.html'));
})



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

    // Send signal to Python
    socket.on('pump1Btn', function() {
        console.log('Pumping 1');
    });
    socket.on('pump2Btn', function() {
        console.log('Pumping 2');
    });
    socket.on('pump3Btn', function() {
        console.log('Pumping 3');
    });
    socket.on('pump4Btn', function() {
        console.log('Pumping 4');
    });
    socket.on('pump5Btn', function() {
        console.log('Pumping 5');
    });

});