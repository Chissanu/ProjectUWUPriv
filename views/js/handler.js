var host = window.location.host;
var socket = io.connect('http://' + host);

var playerCount = 0;
var player = [];

function genNum(num) {
    for (var i = 0; i < num; i++) {
        player.push(i);
    }
    console.log(player);

}
socket.on('start', function(data) {
    console.log("Game started");
    console.log(data);
    playerCount = data;
    genNum(data);
})