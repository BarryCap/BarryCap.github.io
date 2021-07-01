// Chack if the browser supports CSS variables
if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
  // The browser supports CSS variables.
} else {
  alert('Your browser does not support CSS variables.\nPlease consider using an other browser to view BarryCap.com in all its potential. Some colors, fonts and cursors use variables to work.')
}
// ASCII art in console
console.log('██████  ██████  ██████  ██████  ██  ██    ██████  ██████  ██████\n██  ██  ██  ██  ██  ██  ██  ██  ██  ██    ██      ██  ██  ██  ██\n████    ██████  ████    ████    ██████    ██      ██████  ██████\n██  ██  ██  ██  ██  ██  ██  ██    ██      ██      ██  ██  ██\n██████  ██  ██  ██  ██  ██  ██    ██      ██████  ██  ██  ██')
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
      KeyC: '/contributing',
      KeyM: '/license',
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
// White theme
function changeTheme() {
  if (document.body.style.getPropertyValue('--c0') == '#fff') {
    document.body.style.setProperty('--c0', '#000')
    document.body.style.setProperty('--cc', '#ccc')
    document.body.style.setProperty('--cf', '#fff')
    document.body.style.setProperty('--clink', '#8ee')
    document.body.style.setProperty('--clink0', '#8ee8')
  } else {
    document.body.style.setProperty('--c0', '#fff')
    document.body.style.setProperty('--cc', '#666')
    document.body.style.setProperty('--cf', '#000')
    document.body.style.setProperty('--clink', '#08e')
    document.body.style.setProperty('--clink0', '#08e8')
  }
}
