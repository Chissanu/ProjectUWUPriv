var host = window.location.host;
var socket = io.connect('http://' + host);
// Query DOM
var backBtn = document.getElementById('backBtn3');

// Emit events
backBtn.addEventListener('back', function() {
    socket.emit('backBtn3');
    location.replace('http://' + host);
});