var express = require('express');
var socket = require('socket.io');
const path = require('path');
const { spawn } = require('child_process');
var drinks = ['Pump:1', 'Pump:2', 'Pump:3', 'Pump:4', 'Pump:5'];
var amount = [0, 1, 2, 3, 4];
var userCount = 0;
var userArr = [];
var user = [];

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
    res.render('hostView');
});

app.get('/custom/drinks', function(req, res) {
    res.render('makeDrink', { name: drinks });
});

app.get('/loading', function(req, res) {
    res.render('waiting');
});

app.get('/king', function(req, res) {
    res.render('numberView');
});


function callPython(pump, time) {
    console.log(pump)
    console.log(time)
    const python = spawn('python', ['python/pump.py', pump, time]);
}

// app.get('/pyscript', (req, res) => {
//     var dataToSend;
//     intArr = amount.map(Number)

//     console.log(intArr)
//     for (var i = 0; i < intArr.length;i++) {
//         callPython(i,intArr[i])
//     }
//     res.redirect('/custom/drinks');

// }) delay(5000).then(() => console.log(('Run after 1 secs')));

app.get('/pyscript', (req, res) => {
    var intArr = amount.map(Number);
    var delayTime = [intArr[0], //0
        intArr[0] + intArr[1], //0 + 1
        intArr[0] + intArr[1] + intArr[2], // 0 + 1 + 1
        intArr[0] + intArr[1] + intArr[2] + intArr[3], //0 + 1 + 1 + 1
        intArr[0] + intArr[1] + intArr[2] + intArr[3] + intArr[4] // 0 + 1 + 1 + 1 + 1
    ];
    var funcTime = delayTime[0] + delayTime[1] + delayTime[2] + delayTime[3] + delayTime[4] + delayTime[5];
    console.log(intArr)
    console.log(delayTime);
    delay(delayTime[0] * 0).then(() => spawn('python', ['python/pump2.py', 14, intArr[0]]));
    delay(delayTime[1] * 1000).then(() => spawn('python', ['python/pump2.py', 15, intArr[1]]));
    delay(delayTime[2] * 1000).then(() => spawn('python', ['python/pump2.py', 18, intArr[2]]));
    delay(delayTime[3] * 1000).then(() => spawn('python', ['python/pump2.py', 23, intArr[3]]));
    delay(delayTime[4] * 1000).then(() => spawn('python', ['python/pump2.py', 24, intArr[4]]));

    delay(funcTime * 1000).then(() => res.redirect('/custom/drinks'));


})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function genNum() {
    for (var i = 0; i < userCount; i++) {
        userArr.push(String(i));
    }
}


// Socket setup & pass server
var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    socket.on('new-connection', userName => {
        user.push(socket.id)
        socket.broadcast.emit('connected', userName)
        console.log(user)
    })

    socket.on('disconnect', () => {
        delete user[socket.id];
    });

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
    socket.on('createBtn', function(data) {
        console.log("Room created");
        userCount = 0;
        user = [];
    });

    // Create Join Btn
    socket.on('joinBtn', function(data) {
        console.log('Joining Lobby...');
        console.log(data.name)
        io.sockets.emit('player-join', data)
        userCount++;
    });

    // Receive signal from host game
    socket.on('start', function(data) {
        index = 0
        for (var i = 0; i < userCount; i++) {
            userArr.push(String(i));
        }
        console.log('starting');
        io.sockets.emit('start', userCount);
        var iterator = user.values();
        for (let elements of iterator) {
            io.to(elements).emit('num', index)
            index++;
        }
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
        console.log(amount)
        console.log('Received Data from drinks')

    });
    socket.on('homeBtn', function(data) {
        console.log('Going home');
    });
    socket.on('backBtn2', function(data) {
        console.log('backing');
    });
});