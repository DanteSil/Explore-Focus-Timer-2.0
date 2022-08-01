export function Timer({
  minutesDisplay, 
  secondsDisplay, 
}) {

  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }
  
  function addMinutes() {
    updateMinutes((minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5));
    updateTimerDisplay(minutes, seconds)
  }
  
  function decraseMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes > 5) {
      updateMinutes((minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5));
  
    } else {
      alert('Não foi possivel diminuir o tempo para um valor ingual ou menor do que 0, tente adicionar mais tempo ao timer')
    }
    updateMinutes(minutes, seconds)
  }
  
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  
  function countDown() {
    timerTimeout = setTimeout(function () {   
  
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
    
      let isFinished = minutes <= 0 && seconds <= 0
  
      if(isFinished) {
        resetTimer()
        return
      }
  
      if(seconds <= 0) {   
        seconds = 60
        --minutes
      }
      
      
      updateTimerDisplay(minutes, String(seconds - 1))
      
      countDown()
     }, 1000)
  }
  
  function pauseTimer() {
    clearTimeout(timerTimeout)
  }


  return {
    countDown,
    decraseMinutes,
    addMinutes,
    resetTimer,
    pauseTimer,
  }
}



