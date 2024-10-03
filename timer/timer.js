const minutesInput = document.querySelector('#number');
const startButton = document.querySelector('#start');
const setButton = document.querySelector('#set');


const mainTimerDisplay = document.querySelector('#main-timer-display');
const timerDisplay = document.querySelector('#minutes');

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

let countdownInterval;

function updateTimerDisplay(timeInSeconds) {

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = timeString;
  mainTimerDisplay.textContent = timeString;
};

setButton.addEventListener('click', () => {
  clearInterval(countdownInterval);
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    timerDisplay.textContent = ("Please enter a valid positive number")
    return;
  }
  let timeInSeconds = timeInMinutes * 60;
  updateTimerDisplay(timeInSeconds);
  modal.style.display = "none";
})

startButton.addEventListener('click', () => {
  clearInterval(countdownInterval);
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    return;
  }

  let timeInSeconds = timeInMinutes * 60;

  countdownInterval = setInterval(() => {

    updateTimerDisplay(timeInSeconds);
    timeInSeconds--;
    if (timeInSeconds < 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = '00:00:00';
      mainTimerDisplay.textContent = "TIME'S UP";
    }

  }, 1000);
});

// Modal
openBtn.onclick = function () {
  modal.style.display = "block";
}

//  close modal when click on "X"
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// close modal whene click outside this
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}