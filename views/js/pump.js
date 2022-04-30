// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

var pump1 = document.getElementById('pump1'),
    pump2 = document.getElementById('pump2'),
    pump3 = document.getElementById('pump3'),
    pump4 = document.getElementById('pump4'),
    pump5 = document.getElementById('pump5'),
    nextBtn = document.getElementById('nextBtn'),
    backBtn = document.getElementById('backBtn');

function saveDrink() {
    document.querySelector('#pump1Text').innerHTML = 'Hide';
}

// Emit events
pump1.addEventListener('click', function() {
    socket.emit('pump1Btn');
});
pump2.addEventListener('click', function() {
    socket.emit('pump2Btn');
});
pump3.addEventListener('click', function() {
    socket.emit('pump3Btn');
});
pump4.addEventListener('click', function() {
    socket.emit('pump4Btn');
});
pump5.addEventListener('click', function() {
    socket.emit('pump5Btn');
});
nextBtn.addEventListener('click', function() {
    let drinks = [
        document.querySelector('#pump1Text').innerHTML,
        document.querySelector('#pump2Text').innerHTML,
        document.querySelector('#pump3Text').innerHTML,
        document.querySelector('#pump4Text').innerHTML,
        document.querySelector('#pump5Text').innerHTML
    ];
    socket.emit('drinks', { drinks });
});

backBtn.addEventListener('click', function() {
    socket.emit('backBtn');
    location.replace('http://' + host);
});