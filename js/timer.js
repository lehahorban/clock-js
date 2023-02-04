// Timer field
const hourElement = document.querySelector(".timer_hour");
const minuteElement = document.querySelector(".timer_minute");
const secondElement = document.querySelector(".timer_second");
const milisecondElement = document.querySelector(".timer_milisecond");
const timerResult = document.querySelector(".result");

// Buttons
const startBtn = document.querySelector(".btn_start");
const pauseBtn = document.querySelector(".btn_pause");
const stopBtn = document.querySelector(".btn_stop");
const intervalBtn = document.querySelector(".btn_interval");
const resultResetBtn = document.querySelector(".result_reset");

// Variables
let hour = 00;
let minute = 00;
let second = 00;
let milisecond = 00;
let interval;

// Listners
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
});
intervalBtn.addEventListener("click", () => {
  clearInterval(interval);
  const block = document.createElement("div");
  block.innerText = `Time: ${hour}: ${minute}: ${second}: ${milisecond}`;
  block.classList.add("block");
  timerResult.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
resultResetBtn.addEventListener("click", () => {
  timerResult.innerText = "";
});

function startTimer() {
  milisecond += 1;
  // Miliseconds
  if (milisecond < 9) {
    milisecondElement.innerText = "0" + milisecond;
  }
  if (milisecond > 9) {
    milisecondElement.innerText = milisecond;
  }

  if (milisecond > 99) {
    second += 1;
    secondElement.innerText = "0" + second;
    milisecond = 0;
    milisecondElement.innerText = "0" + milisecond;
  }

  // Seconds
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute += 1;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + milisecond;
  }

  //Minute

  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour += 1;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
  }

  //Hour
  if (hour > 9) {
    hourElement.innerText = hour;
  }
  if (hour > 23) {
    hour = 0;
    hourElement.innerText = "0" + hour;
  }
}

function clearFields() {
  hour = 00;
  minute = 00;
  second = 00;
  milisecond = 00;
  milisecondElement.innerText = "00";
  secondElement.innerText = "00";
  minuteElement.innerText = "00";
  hourElement.innerText = "00";
}
