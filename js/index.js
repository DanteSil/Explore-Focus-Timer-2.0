import { Timer } from "./timer.js"
import {cardBgChange} from "./cardsBg.js"
import { Sounds } from "./sounds.js"
import {   
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeAdd,
  buttonTimeLess,
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay } from "./elements.js"




const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 

 })

 const sounds = Sounds()

 const cardBg = cardBgChange({
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace
 })


buttonPlay.addEventListener('click', function() {
  timer.countDown()
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
  timer.pauseTimer()
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function() {
  timer.resetTimer()
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonTimeAdd.addEventListener('click', function() {
  timer.addMinutes()
})
buttonTimeLess.addEventListener('click', function() {
  timer.decraseMinutes()
})

buttonForest.addEventListener('click', function() {
  cardBg.forestBackOn() 
  sounds.forestSounds()
})

buttonRain.addEventListener('click', function() {
  cardBg.rainBackOn()
  sounds.rainSounds()
})

buttonCoffePot.addEventListener('click', function() {
  cardBg.coffeBackOn()
  sounds.coffeSounds()
})

buttonFirePlace.addEventListener('click', function() {
  cardBg.fireBackOn()
  sounds.fireSounds()
})