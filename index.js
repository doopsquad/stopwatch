let time = document.getElementById('time');
let green = document.getElementById('run');
let red = document.getElementById('stop');
let blue = document.getElementById('reset');

let isRunning = false;
let elapsedTime = 0;
let startTime = 0;
let timer = null;

function run() {

    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset() {
    elapsedTime = 0;
    time.innerHTML = "";
}

function update() {
 
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let ms = Math.floor(elapsedTime % 1000);


    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    ms = String(ms).padStart(2, "0");

    time.innerHTML = `${hours}:${minutes}:${seconds}:${ms}`;
}

green.addEventListener('click', run);
red.addEventListener('click', stop);
blue.addEventListener('click', reset);