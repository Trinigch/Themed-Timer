const minutesInput = document.querySelector('#number');
const startButton = document.querySelector('#start');
const timerDisplay = document.querySelector('#minutes');
const setButton = document.querySelector('#set');

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
let countdownInterval;
function updateTimerDisplay(timeInSeconds) {

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600)/ 60) ;
  const seconds = timeInSeconds % 60;
timerDisplay.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

setButton.addEventListener('click', () => {
  clearInterval(countdownInterval);
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }
  let timeInSeconds = timeInMinutes * 60;
  updateTimerDisplay(timeInSeconds);
})

startButton.addEventListener('click', () => {
  clearInterval(countdownInterval);
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  let timeInSeconds = timeInMinutes * 60;
  
 // clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    
      updateTimerDisplay(timeInSeconds);
      timeInSeconds--;
      if (timeInSeconds < 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = '00:00:00';
        alert('Time is up!');
      }

      }, 1000); 
    });



// Modal
openBtn.onclick = function() {
    modal.style.display = "block";
}

//  close modal when click on "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// close modal whene click outside this
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}