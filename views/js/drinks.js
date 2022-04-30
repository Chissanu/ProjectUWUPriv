// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var pump1name = document.getElementById('pump1Name'),
    pump2name = document.getElementById('pump2Name'),
    pump3name = document.getElementById('pump3Name'),
    pump4name = document.getElementById('pump4Name'),
    pump5name = document.getElementById('pump5Name');



// socket.on('test', function(data) {
//     drinks = data;
//     pump1Name.innerHTML = "TEST";
//     console.log(drinks[0])
// });