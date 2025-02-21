// Stopwatch or Timer App:
// Scenario: Develop a stopwatch with "Start," "Stop," and "Reset" buttons that dynamically update the displayed time. Use JS DOM and event handing

let stopwatch = document.getElementById("stopwatch")
let startTimer = document.getElementById("startTimer")
let stopTimer = document.getElementById("stopTimer")
let resetTimer = document.getElementById("reserTimer")
let timer;
let elapsedtime = 0;
let running = false;

startTimer.addEventListener("click", function () {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedtime++;
            updateDisplay()

        }, 1000

        )

    }

})
function stopTimerFn() {
    running = false;
    clearInterval(timer)
}
stopTimer.addEventListener("click", stopTimerFn)
resetTimer.addEventListener("click", function () {
    elapsedtime =0;
    stopTimerFn();
    updateDisplay();

})



function updateDisplay() {
    let hrs = Math.floor(elapsedtime / 3600).toString().padStart(2, '0')
    let min = Math.floor(elapsedtime % 3600 / 60).toString().padStart(2, '0');
    let sec = (elapsedtime % 60).toString().padStart(2, '0');
    stopwatch.textContent = `${hrs} : ${min}:${sec}`;
}