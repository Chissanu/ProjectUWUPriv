// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
document.getElementById("roomNum").innerHTML = randomIntFromInterval(10000, 99999);