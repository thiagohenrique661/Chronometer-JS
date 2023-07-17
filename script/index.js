let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;
interval = 0;

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function startChonometer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(watch, 1);
  }
}

function pauseChonometer() {
  clearInterval(interval);
  isRunning = false;
}

function stoppedChronometer() {
  clearInterval(interval);
  isRunning = false;
  miliseconds = 0;
  seconds = 0;
  minutes = 0;

  document.getElementById("time").innerText = "00:00:000";
}

function watch() {
  miliseconds++;
  if (miliseconds === 1000) {
    miliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  document.getElementById("time").innerText =
    twoDigits(minutes) +
    ":" +
    twoDigits(seconds) +
    ":" +
    twoDigits(miliseconds);
}
