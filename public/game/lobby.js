// Make connection
var socket = io.connect('http://localhost:4000');

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