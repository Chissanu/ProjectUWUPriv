// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var pump1name = document.getElementById('pump1Name');



// socket.on('test', function(data) {
//     drinks = data;
//     pump1Name.innerHTML = "TEST";
//     console.log(drinks[0])
// });