var hourPara = document.getElementById("hours");
var minPara = document.getElementById("min");
var secPara = document.getElementById("sec");
var msPara = document.getElementById("ms");
var hours = 0;
var min = 0;
var sec = 0;
var ms = 0;
var interval;
function timer() {
    ms++;
    msPara.innerHTML = ms;
    if (ms == 100) {
        sec++;
        secPara.innerHTML = sec;
        ms = 0;

    } else if (sec == 60) {
        min++;
        minPara.innerHTML = min;
        sec = 0
    } else if (min == 60) {
        hours++;
        hourPara.innerHTML = hours;
        min = 0;
    }


}
function start() {
    var start = document.getElementById("startbtn");
    var stop = document.getElementById("stopbtn");
    var reset = document.getElementById("resetbtn");       
    interval = setInterval(timer, 10)
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;  
   

}
function stop() {
    var start = document.getElementById("startbtn");
    var stop = document.getElementById("stopbtn");
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true
}
function reset() {
    hourPara.innerHTML = 0;
    minPara.innerHTML = 0;
    secPara.innerHTML= 0;
    msPara.innerHTML = 0;
    hours = 0;
    min = 0;
    sec = 0;
    ms = 0;
    clearInterval(interval);
    var start = document.getElementById("startbtn");
    start.disabled = false;
    var stop = document.getElementById("stopbtn");
    stop.disabled = true;
    var reset = document.getElementById("resetbtn");
    reset.disabled = true;  


}
function initialDisplay(){
    var stop = document.getElementById("stopbtn");
    stop.disabled = true;
    var reset = document.getElementById("resetbtn");
    reset.disabled = true;  
}
initialDisplay();