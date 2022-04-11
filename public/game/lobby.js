// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var kingBtn = document.getElementById('b1'),
    truthBtn = document.getElementById('b2'),
    otherBtn = document.getElementById('b3');

// Emit events
kingBtn.addEventListener('click', function() {
    socket.emit('kingBtn');
});
truthBtn.addEventListener('click', function() {
    socket.emit('truthBtn');
});
otherBtn.addEventListener('click', function() {
    socket.emit('otherBtn');
});