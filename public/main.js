// Make connection

var host = window.location.host; // Get the host name here

var socket = io.connect('http://' + host); //insert the http:// and :3000 here

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    gameBtn = document.getElementById('gameBtn'),
    customBtn = document.getElementById('customBtn'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
gameBtn.addEventListener('click', function() {
    socket.emit('gameBtn');
});

customBtn.addEventListener('click', function() {
    socket.emit('customBtn');
})

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', function(data) {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})