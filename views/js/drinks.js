// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var acceptBtn = document.getElementById('acceptBtn'),
    homeBtn = document.getElementById('homeBtn'),
    backBtn = document.getElementById('backBtn2');

acceptBtn.addEventListener('click', function() {
    socket.emit('acceptBtn');
});
homeBtn.addEventListener('click', function() {
    socket.emit('homeBtn');
    location.replace('http://' + host);
});
backBtn.addEventListener('click', function() {
    socket.emit('backBtn2');
    location.replace('http://' + host + '/custom');
});