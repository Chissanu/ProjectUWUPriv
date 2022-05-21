var host = window.location.host;
var socket = io.connect('http://' + host);


socket.on('start', function(data) {
    console.log("Game started");
    console.log(data);
    location.replace('http://' + host + '/king');
})