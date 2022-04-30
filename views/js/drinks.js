// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var acceptBtn = document.getElementById('acceptBtn'),
    homeBtn = document.getElementById('homeBtn'),
    backBtn = document.getElementById('backBtn2');

acceptBtn.addEventListener('click', function() {
    let amount = [
        document.querySelector('#mlPump1').innerHTML,
        document.querySelector('#mlPump2').innerHTML,
        document.querySelector('#mlPump3').innerHTML,
        document.querySelector('#mlPump4').innerHTML,
        document.querySelector('#mlPump5').innerHTML
    ];
    socket.emit('acceptBtn', { amount });
});
homeBtn.addEventListener('click', function() {
    socket.emit('homeBtn');
});
backBtn.addEventListener('click', function() {
    socket.emit('backBtn2');
    location.replace('http://' + host + '/custom');
});