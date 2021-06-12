// Shortcuts
window.addEventListener('keyup', function(event) {
  if(event.path && !event.path.filter((node) => {return node.nodeName == 'FORM'}).length) {
    const shortcuts = {
      KeyO: '/',
      KeyB: '/home',
      KeyR: '/realizations',
      KeyA: '/about',
      KeyN: '/random',
      KeyI: '/realizations/images',
      KeyV: '/realizations/videos',
      KeyS: '/realizations/sounds',
      KeyG: '/realizations/games',
      KeyD: '/realizations/drawings',
      Digit7: '/realizations/Imaractères',
      KeyL: '/spotlight',
      F22: '/404',
      KeyH: '/help',
      KeyE: '/versions',
    }
    shortcuts[event.code] ? window.location = shortcuts[event.code] : ''
  }
})
// Randomly moving background
if (window.location.href.indexOf('random') > -1) {
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
}
// Make cookie pop up disappear on cross click
function cookieButton() {
  document.getElementsByClassName('cookie-container')[0].style.bottom = '-25vh'
}
// Script for the email form
let submitButton = document.getElementById("submit_form")
let form = document.getElementById("email_form")
if (form) {
    form.addEventListener("submit", function() {
    setTimeout(function() {
      submitButton.value = "Sending…"
      submitButton.disabled = true
    }, 1)
  })
}
