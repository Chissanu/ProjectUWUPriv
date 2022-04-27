// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

var pump1 = document.getElementById('pump1Btn'),
    pump2 = document.getElementById('pump2Btn'),
    pump3 = document.getElementById('pump3Btn'),
    pump4 = document.getElementById('pump4Btn'),
    pump5 = document.getElementById('pump5Btn');

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