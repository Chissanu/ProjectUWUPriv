// Make connection
var host = window.location.host;
var socket = io.connect('http://' + host);

// Query DOM
var acceptBtn = document.getElementById('acceptBtn'),
    homeBtn = document.getElementById('homeBtn'),
    backBtn = document.getElementById('backBtn2');

let totalLq = 0;
var pump1Text = 0,
    pump2Text = 0,
    pump3Text = 0,
    pump4Text = 0,
    pump5Text = 0;

function addMl(pumpId, pumpText) {
    var num
    if (pumpText == 1) {
        pump1Text++;
        num = pump1Text;
    }
    if (pumpText == 2) {
        pump2Text++;
        num = pump2Text;
    }
    if (pumpText == 3) {
        pump3Text++;
        num = pump3Text;
    }
    if (pumpText == 4) {
        pump4Text++;
        num = pump4Text;
    }
    if (pumpText == 5) {
        pump5Text++;
        num = pump5Text;
    }
    totalLq = pump1Text + pump2Text + pump3Text + pump4Text + pump5Text;
    document.getElementById(pumpId).innerHTML = num;
    document.getElementById("totalMl").innerHTML = totalLq;
}

function minusMl(pumpId, pumpText) {
    var num
    if (pumpText == 1) {
        if (pump1Text > 1) {
            pump1Text--;
        }
        num = pump1Text;
    }
    if (pumpText == 2) {
        if (pump2Text > 1) {
            pump2Text--;
        }
        num = pump2Text;
    }
    if (pumpText == 3) {
        if (pump3Text > 1) {
            pump3Text--;
        }
        num = pump3Text;
    }
    if (pumpText == 4) {
        if (pump4Text > 1) {
            pump4Text--;
        }
        num = pump4Text;
    }
    if (pumpText == 5) {
        if (pump5Text > 1) {
            pump5Text--;
        }
        num = pump5Text;
    }
    totalLq = pump1Text + pump2Text + pump3Text + pump4Text + pump5Text;
    document.getElementById(pumpId).innerHTML = num;
    document.getElementById("totalMl").innerHTML = totalLq;
}


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