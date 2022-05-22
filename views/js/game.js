var host = window.location.host;
var socket = io.connect('http://' + host);
var num = 0;

var num = document.getElementById('totalMl'),
    customBtn = document.getElementById('customBtn');


socket.emit('new-connection', 'player')

socket.on('disconnected', userName => {
    console.log('disconnected')
});


socket.on('start', function(data) {
    console.log("Game started");
})


socket.on('num', function(data) {
    console.log('here')
    console.log(data);
    num = data;
    if (num == 0) {
        document.getElementById("title").innerHTML = "You are"
        document.getElementById("id").innerHTML = "King!";
        document.getElementById("id").style.color = "#ebb859";
        document.getElementById("img").style.display = "block";
        document.getElementById("customBtn").style.display = "flex";

    } else {
        document.getElementById("id").innerHTML = num;
    }
})