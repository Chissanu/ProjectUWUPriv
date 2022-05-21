var host = window.location.host;
var socket = io.connect('http://' + host);
// Query DOM
var startBtn = document.getElementById('start'),
    users = document.getElementById('users');

// Emit events
startBtn.addEventListener('click', function() {
    socket.emit('start');
});

socket.on('player-join', function(data) {
    console.log(data.name);
    users.innerHTML += '\t' + data.name + '';
})