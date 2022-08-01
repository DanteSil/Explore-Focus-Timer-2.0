export function cardBgChange ({
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace
}) {

  function forestBackOn() {
    buttonForest.classList.add('blue')
    buttonRain.classList.remove('blue')
    buttonCoffePot.classList.remove('blue')
    buttonFirePlace.classList.remove('blue')
  }
  function rainBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.add('blue')
    buttonCoffePot.classList.remove('blue')
    buttonFirePlace.classList.remove('blue')
  }
  function coffeBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.remove('blue')
    buttonCoffePot.classList.add('blue')
    buttonFirePlace.classList.remove('blue')
  }
  function fireBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.remove('blue')
    buttonCoffePot.classList.remove('blue')
    buttonFirePlace.classList.add('blue')
  }

  return {
    forestBackOn,
    rainBackOn,
    coffeBackOn,
    fireBackOn
  }
}
