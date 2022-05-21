// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var createBtn = document.getElementById('create'),
    joinBtn = document.getElementById('join'),
    userName = document.getElementById('name');

// Emit events
createBtn.addEventListener('click', function() {
    socket.emit('createBtn');
});

joinBtn.addEventListener('click', function() {
    socket.emit('joinBtn', {
        name: userName.value
    });
    userName.value = "";

});