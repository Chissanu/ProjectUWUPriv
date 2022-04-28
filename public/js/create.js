// Make connection
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
document.getElementById("roomNum").innerHTML = randomIntFromInterval(10000, 99999);