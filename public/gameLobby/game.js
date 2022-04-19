// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var createBtn = document.getElementById('createBtn'),
    joinBtn = document.getElementById('joinBtn'),
    name = document.getElementById('name'),
    roomID = document.getElementById('roomID');

// Emit events
createBtn.addEventListener('click', function() {
    socket.emit('createBtn');
});
joinBtn.addEventListener('click', function() {
    socket.emit('joinBtn');
});