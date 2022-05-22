const optionsActivation = {
  [GLOW]: {
    enabled: true,
    enable: enableGlow,
    disable: disableGlow,
  },
  [DIST]: {
    enabled: true,
    enable: enableDist,
    disable: disableDist,
  },
  [SOUND]: {
    enabled: true,
    enable: enableSounds,
    disable: disableSounds,
  },
}
let mainThemeAudio = null

function createAudio (...params) {
  if (optionsActivation[SOUND].enabled) {
    return createAudioFromFile(...params)
  }
  return new Audio()
}

function disableGlow () {
  $('tick-glow').setAttribute('opacity', 0)
  $('menu-top-page-white').removeAttribute('filter')
  $('menu-top-page-yellow').removeAttribute('filter')
  $('menu-top-page-cyan').removeAttribute('filter')
  $('menu-pages').setAttribute('filter', 'url(#dot-disp)')
  $('credits-page-yellow').removeAttribute('filter')
  $('credits-page-cyan').removeAttribute('filter')
  $('dot').removeAttribute('filter')
  $('dot1').removeAttribute('filter')
  $('dot2').removeAttribute('filter')
  $('count-down').removeAttribute('filter')
  $('menu').classList.add('bg-no-glow')
  $('board').classList.add('bg-no-glow')
}

function enableGlow () {
  $('tick-glow').setAttribute('opacity', 1)
  $('menu-top-page-white').setAttribute('filter', 'drop-shadow(0 0 20 #8ffc)')
  $('menu-top-page-yellow').setAttribute('filter', 'drop-shadow(0 0 20 #ff0)')
  $('menu-top-page-cyan').setAttribute('filter', 'drop-shadow(0 0 20 #0ff)')
  $('menu-pages').setAttribute('filter', 'drop-shadow(0 0 20 #8ffc) url(#dot-disp)')
  $('credits-page-yellow').setAttribute('filter', 'drop-shadow(0 0 20 #ff08)')
  $('credits-page-cyan').setAttribute('filter', 'drop-shadow(0 0 20 #0ff8)')
  $('dot').setAttribute('filter', 'drop-shadow(0 0 20 #8ff)')
  $('dot1').setAttribute('filter', 'drop-shadow(0 0 20 #ff0)')
  $('dot2').setAttribute('filter', 'drop-shadow(0 0 20 #0ff)')
  $('count-down').setAttribute('filter', 'drop-shadow(0 0 20 #8ff) drop-shadow(0 0 20 #8ff8)')
  $('menu').classList.remove('bg-no-glow')
  $('board').classList.remove('bg-no-glow')
}

function disableDist () {
  $('tick-dist').setAttribute('opacity', 0)
  $('dot-turb').setAttribute('baseFrequency', '0')
  $('body').classList.add('bg-no-dist')
  $('menu').classList.add('bg-no-dist')
  $('board').classList.add('bg-no-dist')
}

function enableDist () {
  $('tick-dist').setAttribute('opacity', 1)
  $('dot-turb').setAttribute('baseFrequency', '.01')
  $('body').classList.remove('bg-no-dist')
  $('menu').classList.remove('bg-no-dist')
  $('board').classList.remove('bg-no-dist')
}

function disableSounds () {
  $('tick-sounds').setAttribute('opacity', 0)
  mainThemeAudio.pause()
}

function enableSounds () {
  $('tick-sounds').setAttribute('opacity', 1)
  mainThemeAudio.play()
}
