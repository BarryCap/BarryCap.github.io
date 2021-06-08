// Shortcuts
window.addEventListener('keyup', function(event) {
  if(! event.path.filter((node) => {return node.nodeName == 'FORM'}).length) {
    if (event.code == 'KeyB') {
      window.location = "/"
    }
    if (event.code == 'KeyR') {
      window.location = "/realizations"
    }
    if (event.code == 'KeyA') {
      window.location = "/about"
    }
    if (event.code == 'KeyN') {
      window.location = "/random"
    }
    if (event.code == 'KeyI') {
      window.location = "/realizations/images"
    }
    if (event.code == 'KeyV') {
      window.location = "/realizations/videos"
    }
    if (event.code == 'KeyS') {
      window.location = "/realizations/sounds"
    }
    if (event.code == 'KeyG') {
      window.location = "/realizations/games"
    }
    if (event.code == 'KeyD') {
      window.location = "/realizations/drawings"
    }
    if (event.code == 'Digit7') {
      window.location = "/realizations/Imaractères"
    }
    if (event.code == 'KeyL') {
      window.location = "/spotlight"
    }
    if (event.code == 'F22') {
      window.location = "/404"
    }
    if (event.code == 'KeyH') {
      window.location = "/help"
    }
    if (event.code == 'KeyE') {
      window.location = "/versions"
    }
  }
})
// Randomly moving background
const randomizer = function() {
  let x, y
  do {
    x = (Math.floor(Math.random() * 3) - 1) * 32 + 'px'
    y = (Math.floor(Math.random() * 3) - 1) * 32 + 'px'
  } while (x === '0px' && y === '0px')
  document.documentElement.style.setProperty('--random-position-x', x)
  document.documentElement.style.setProperty('--random-position-y', y)
}
randomizer()
setInterval(randomizer, 1000)
