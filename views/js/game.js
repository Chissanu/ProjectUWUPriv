var host = window.location.host;
var socket = io.connect('http://' + host);
var num = 0;

var num = document.getElementById('totalMl'),
    newBtn = document.getElementById('newBtn');


socket.emit('new-connection', 'player')

newBtn.addEventListener('click', function() {
    socket.emit('new-game')
});


socket.on('disconnected', userName => {
    console.log('disconnected')
});


socket.on('num', function(data) {
    console.log(data);
    num = data;
    if (num == 0) {
        document.getElementById("title").innerHTML = "You are"
        document.getElementById("id").innerHTML = "King!";
        document.getElementById("id").style.color = "#ebb859";
        document.getElementById("img").style.display = "block";
        document.getElementById("newBtn").style.display = "flex";

    } else {
        document.getElementById("id").innerHTML = num;
        document.getElementById("img").style.display = "none";
        document.getElementById("newBtn").style.display = "none";
        document.getElementById("id").style.color = "#000000";
    }
})