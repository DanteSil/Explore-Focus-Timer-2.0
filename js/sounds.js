export function Sounds () {

  const ForestSound = new Audio("Sounds/Floresta.wav")
  const RainSound = new Audio("Sounds/Chuva.wav");
  const CoffePotSound = new Audio("Sounds/Cafeteria.wav")
  const FirePlaceSound = new Audio("Sounds/Lareira.wav")
  
  ForestSound.loop = true
  RainSound.loop = true
  CoffePotSound.loop = true
  FirePlaceSound.loop = true
    
  function forestSounds() {
    ForestSound.play()
    RainSound.pause()
    CoffePotSound.pause()
    FirePlaceSound.pause()
  }
  function rainSounds() {
    ForestSound.pause()
    RainSound.play()
    CoffePotSound.pause()
    FirePlaceSound.pause()
  }
  function coffeSounds() {
    ForestSound.pause()
    RainSound.pause()
    CoffePotSound.play()
    FirePlaceSound.pause()
  }
  function fireSounds() {
    ForestSound.pause()
    RainSound.pause()
    CoffePotSound.pause()
    FirePlaceSound.play()
  }

  return {
    forestSounds,
    rainSounds,
    coffeSounds,
    fireSounds
  }
}

