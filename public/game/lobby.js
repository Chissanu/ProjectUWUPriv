// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    gameBtn = document.getElementById('gameBtn'),
    customBtn = document.getElementById('customBtn'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');