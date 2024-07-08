import './App.css'

function App() {
    // Select HTML elements
  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const pauseButton = document.getElementById("pause");
  const timer = document.getElementById("timer");
  
  //Initiliaze Timer
  let minutes = 25;
  let seconds = 0;
  timer.innerHTML = "25m:00s";
  
  //CountDown

  function updateTimer(){
      if(minutes == 0 && seconds == 0){
          clearInterval(currentInterval);
          timer.innerHTML = "00:00"
          window.alert("Good Job! Pomdoro session finished!");
          return;
      } else if(seconds == 0){
          seconds = 60;
          minutes--;
      }
      seconds--;


      timer.innerHTML = minutes + 'm :' + seconds + 's';
  }
  
  //update timer every 1 second.

  let currentInterval;

  //functions

  function startTimer(){
      currentInterval = setInterval(updateTimer,1000);
      resetButton.style.display = "inline-block";
      pauseButton.style.display = "inline-block";
      startButton.style.display = "none";
  }

  function pauseTimer(){
      clearInterval(currentInterval);
      startButton.style.display = "inline-block";
      pauseButton.style.display = "none";
      startButton.innerHTML = "Resume"; 
  }

  function resetTimer(){
      clearInterval(currentInterval);
      minutes = 25;
      seconds = 0;
      timer.innerHTML = "25m:00s";
      startButton.innerHTML = "Start"; 
      resetButton.style.display = "none";
      pauseButton.style.display = "none";
      startButton.style.display = "inline-block";
  }
  

  //adding event listeners to the buttons

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);
  pauseButton.addEventListener('click', pauseTimer);
  
  return (
    <>
    <h1>TomatoQuest</h1>
    <h2>Timer</h2>
    <p id="timer">time</p>

    <div class="buttonContainer">
        <button id="start" class="button">Start</button>
        <button id="pause" class="button">Pause</button>
        <button id="reset" class="button">Reset</button>
    </div> 
    </>
  )
}

export default App
