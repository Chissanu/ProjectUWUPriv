var express = require('express');
var socket = require('socket.io');
const path = require('path');
const { spawn } = require('child_process');
var drinks = ['Pump:1', 'Pump:2', 'Pump:3', 'Pump:4', 'Pump:5'];
var amount = [0, 1, 2, 3, 4];

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('listening for requests on port 4000,');
});

app.set('view engine', 'pug')
app.use(express.static('views'))


app.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!!' });
});

app.get('/game', function(req, res) {
    res.render('lobby');
});

app.get('/custom', function(req, res) {
    res.render('customDrink');
});

app.get('/game/lobby', function(req, res) {
    res.render('gameLobby');
});

app.get('/game/lobby/create', function(req, res) {
    res.render('gameRoom');
});

app.get('/custom/drinks', function(req, res) {
    res.render('makeDrink', { name: drinks });
});

// app.get('/py', (req, res) => {
//     var dataToSend;
//     // spawn new child process to call the python script
//     const python = spawn('python', ['pump.py']);
//     // collect data from script

//     python.stdout.on('data', function(data) {
//         console.log('Running Python Script');
//         dataToSend = data.toString();
//     });

//     python.on('close', (code) => {
//         console.log('done');
//         res.send(dataToSend)
//     })

// })


app.get('/pyscript', (req, res) => {
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['python/pump.py', amount]);
    // collect data from script

    python.stdout.on('data', function(data) {
        console.log('Running Python Script');
        dataToSend = data.toString();
    });
    console.log('Run');
    // Send to file
    res.redirect('/');
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

    // Received drink names
    socket.on('drinks', function(data) {
        drinks = data.drinks;
    });

    // Receive signal from custom drinks
    socket.on('acceptBtn', function(data) {
        amount = data.amount;
        console.log('Received Data from drinks')

    });
    socket.on('homeBtn', function(data) {
        console.log('Going home');
    });
    socket.on('backBtn2', function(data) {
        console.log('backing');
    });

});