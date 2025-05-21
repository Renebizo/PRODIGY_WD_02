// script.js
let startTime, interval;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, "0");
  const seconds = String(time.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, "0");
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsedTime = 0;
  isRunning = false;
  updateDisplay();
  laps.innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = display.textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    laps.appendChild(li);
  }
}