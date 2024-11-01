setInterval(() => {
    document.getElementById('dc').innerHTML = new Date().toLocaleTimeString('en-GB')
}, 1000);


mhand = document.getElementById("hand");
shand = document.getElementById("hand2");
hhand = document.getElementById("hour");


// x = 70;
// mhand.style.transform = "rotate(" + x + "deg)";
// shand.style.transform = "rotate(50deg)";
// hhand.style.transform = "rotate(250deg)";

var date = new Date;

// var mili = date.getTime();
// var seconds = date.getSeconds();
// var minutes = date.getMinutes();
// var hour = date.getHours();
// console.log(seconds);

setInterval(() => {
    var date = new Date;

    var seconds = date.getSeconds() * 6;
    shand.style.transform = "rotate(" + seconds + "deg)";

    var minutes = date.getMinutes() * 6 + date.getSeconds() * 0.1;
    mhand.style.transform = "rotate(" + minutes + "deg)";

    var hour = date.getHours();
    var h = hour * 30 + date.getMinutes() * 0.5 + date.getSeconds() * 0.0083333333333333;
    hhand.style.transform = "rotate(" + h + "deg)";

}, 1000);