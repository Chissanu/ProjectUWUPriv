var host = window.location.host;
var socket = io.connect('http://' + host);

var num = document.getElementById('id');


document.getElementById("id").innerHTML = "2";

function genNum() {
    console.log('here')
}