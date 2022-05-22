/** Init dots */
const dot = {
  node: null,
  pos: [initDotPosX, initDotPosY]
}
const dot1 = {
  node: null,
  pos: [initDot1PosX, initDot1PosY],
  dead: false
}
const dot2 = {
  node: null,
  pos: [initDot2PosX, initDot2PosY],
  dead: false
}
const dots = [dot, dot1, dot2]
setTimeout(() => {
  dot.node = $('dot')
  dot1.node = $('dot1')
  dot2.node = $('dot2')
})

/** Init game values */
let highScore = 0
let currentTime = 0
let currentEvilDotIndex = 1
let timeBetweenSpawns = initTimeBetweenSpawns
let creationTimeout = null
let evilDotsMove = null
let timerInterval = null
let evilDots = []

let selection = initMenuSelection
let optionSelected = initOptionSelection

/** Splash screen */
document.onkeydown = endSplashScreen
function endSplashScreen () {
  splashScreenToMenu()
  mainThemeAudio = createAudio(AUDIO_MAIN_THEME, 1, true)
  mainThemeAudio.play()
  createAudio(AUDIO_CLICK).play()
  document.onkeydown = menuSelection
}

/** Choose menu options */
function menuSelection ({ key }) {
  if (menuMoveKeys.includes(key)) {
    createAudio(AUDIO_DOT_MOVE, .25).play()
    selection = menuNavigation[selection][menuMoveXKeys.includes(key) ? 'x' : 'y']
    chooseMenuOption($('menu-selection'), selection, menuOptions)

    if ([ONE_PLAYER, TWO_PLAYER].includes(selection)) {
      changeMenuPlayers(selection == TWO_PLAYER)
    }
  }

  if (menuSelectKeys.includes(key)) {
    createAudio(AUDIO_CLICK).play()
    const selectedOptionsActions = {
      [ONE_PLAYER]: launchGame,
      [TWO_PLAYER]: launchGame2p,
      [CREDITS]: () => {
        menuToCredits()
        document.onkeydown = escapeMenu
      },
      [OPTIONS]: () => {
        menuToOptions()
        document.onkeydown = optionsSelection
      }
    }
    selectedOptionsActions[selection]()
  }
}

function escapeMenu ({ key }) {
  if (menuEscape.includes(key)) {
    createAudio(AUDIO_DEATH, .5, false, 3).play()
    optionsToMenu()
    document.onkeydown = menuSelection
  }
}

function optionsSelection ({ key }) {
  escapeMenu({ key })

  if (menuMoveYKeys.includes(key)) {
    createAudio(AUDIO_DOT_MOVE, .25).play()
    optionSelected = optionMenuNavigation[optionSelected][menuMoveUpKeys.includes(key) ? 'up' : 'down']
    chooseMenuOption($('options-selection'), optionSelected, optionMenuOptions)
  }

  if (menuSelectKeys.includes(key)) {
    onActivation = optionsActivation[optionSelected]
    onActivation.enabled ? onActivation.disable() : onActivation.enable()
    onActivation.enabled = !onActivation.enabled
    createAudio(AUDIO_CLICK).play()
  }
}

/** Generate an evil dot's random spawn position */
function createPos () {
  const possiblePositions = [
    () => [-9, Math.floor((Math.random() * 15) - 7)],
    () => [9, Math.floor((Math.random() * 15) - 7)],
    () => [Math.floor((Math.random() * 19) - 9), -7],
    () => [Math.floor((Math.random() * 19) - 9), 7],
  ]
  return possiblePositions[Math.floor(Math.random() * possiblePositions.length)]()
}

/** Generate an evil dot's movement direction based on its spawn position */
function createMove (pos) {
  let possibleMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  if (pos[0] >= 7) {
    possibleMoves = possibleMoves.filter((move) => !(move[0] >= 0))
  }
  if (pos[0] <= -7) {
    possibleMoves = possibleMoves.filter((move) => !(move[0] <= 0))
  }
  if (pos[1] >= 5) {
    possibleMoves = possibleMoves.filter((move) => !(move[1] >= 0))
  }
  if (pos[1] <= -5) {
    possibleMoves = possibleMoves.filter((move) => !(move[1] <= 0))
  }
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
}

/** Create evil dots */
function evilDotSpawn () {
  createAudio(AUDIO_EVIL_DOT_SPAWN).play()
  const evilDot = createEvilDot(currentEvilDotIndex, optionsActivation[GLOW].enabled, optionsActivation[DIST].enabled)

  evilDot.pos = createPos()
  evilDot.move = createMove(evilDot.pos)
  replaceDot(evilDot)
  evilDots.push(evilDot)

  if (currentEvilDotIndex <= nbEvilDots) {
    currentEvilDotIndex++
    timeBetweenSpawns *= .99
    creationTimeout = setTimeout(evilDotSpawn, timeBetweenSpawns)
  }
}

/** Moves the evil dots and return the new state */
function updateEvilDot (evilDots) {
  const deadDots = []
  evilDots.forEach(({ node, group, pos, move }, index) => {
    // Remove dots going beyond the game's limits 
    if (Math.abs(pos[0]) > 9 || Math.abs(pos[1]) > 7) {
      $('evil-dots').removeChild(group)
      deadDots.push(index)
      return
    }
    pos[0] += move[0]
    pos[1] += move[1]
    setTransform(node, pos)
  })
  return evilDots.filter((_, index) => !deadDots.includes(index))
}

function check2pCollision (dotMoving, move, dotPosStatic) {
  if (dotMoving.pos[0] + move[0] == dotPosStatic[0] && dotMoving.pos[1] + move[1] == dotPosStatic[1]) {
    createAudio(AUDIO_DOT_BLOCKED).play()
    setTransform(dotMoving.node, dotMoving.pos.map((v, i) => v + move[i] * .5))
    setTimeout(() => replaceDot(dotMoving), 200)
    return false
  }
  return true
}

/** Moves the dot according to the key pressed and the keyboard layout */
function moveDot (key, layout, dot, otherDotPos) {
  directions.forEach((direction) => {
    if (layout[direction].includes(key) && isMoveAllowed[direction](dot.pos)) {
      if (!otherDotPos || check2pCollision(dot, possibleMoves[direction], otherDotPos)) {
        createAudio(AUDIO_DOT_MOVE, .25).play()
        dot.pos = dot.pos.map((v, i) => v + possibleMoves[direction][i])
        replaceDot(dot)
      }
    }
  })
}

function resetGame () {
  $('high-score').innerHTML = highScore
  $('dot-disp-map').setAttribute('scale', 256)

  clearTimeout(creationTimeout)
  clearInterval(evilDotsMove)
  clearInterval(timerInterval)
  document.onkeydown = null

  setTimeout(() => {
    evilDots = []
    currentEvilDotIndex = 1
    timeBetweenSpawns = initTimeBetweenSpawns
    currentTime = 0
    dot.pos = [initDotPosX, initDotPosY]
    dot1.pos = [initDot1PosX, initDot1PosY]
    dot2.pos = [initDot2PosX, initDot2PosY]
    dots.forEach((dot) => {
      dot.dead = false
      dot.node.setAttribute('opacity', 1)
      dot.node.classList.remove('ghost')
      dot.node.classList.remove('dead')
    })
    gameToMenu()
    document.onkeydown = menuSelection
  }, 600)
}

function initialSetup () {
  menuToGame()
  dots.forEach((dot) => replaceDot(dot))
  creationTimeout = setTimeout(evilDotSpawn, timeBetweenSpawns)
  timerInterval = setInterval(() => {
    $('count-down').innerHTML = ++currentTime
    if (currentTime > highScore) highScore = currentTime
  }, 1000)
}

function checkCollision (twoPlayers) {
  if (twoPlayers) {
    function killDotIfCollide (dot, score) {
      if (!dot.dead && evilDots.some(({ pos }) => dot.pos[0] == pos[0] && dot.pos[1] == pos[1])) {
        $(score).innerHTML = currentTime
        if (!dot1.dead && !dot2.dead) {
          createAudio(AUDIO_GHOST).play()
        }
        dot.node.classList.add('dead')
        setTimeout(() => dot.node.classList.add('ghost'), 100)
        return true
      }
      return dot.dead
    }
    dot1.dead = killDotIfCollide(dot1, 'p1-score')
    dot2.dead = killDotIfCollide(dot2, 'p2-score')

    if (dot1.dead && dot2.dead) {
      createAudio(AUDIO_DEATH).play()
      resetGame()
    }
  } else {
    if (evilDots.some(({ pos }) => dot.pos[0] == pos[0] && dot.pos[1] == pos[1])) {
      $('last-score').innerHTML = currentTime
      createAudio(AUDIO_DEATH).play()
      dot.node.classList.add('dead')
      resetGame()
    }
  }
}

function checkDistance (twoPlayers) {
  if (optionsActivation[DIST].enabled) {
    evilDots.forEach(({ feDisplacementMap, pos }) => {
      let distance = Infinity
      if (twoPlayers) {
        const distance1 = !dot1.dead && calcDistance(pos, dot1.pos) || Infinity
        const distance2 = !dot2.dead && calcDistance(pos, dot2.pos) || Infinity
        distance = Math.min(distance1, distance2)
      } else {
        distance = calcDistance(pos, dot.pos)
      }
      feDisplacementMap.setAttribute('scale', dispScaleFromDistance(distance))
    })
  }
}

function launchGame () {
  initialSetup()
  dot1.node.setAttribute('opacity', 0)
  dot2.node.setAttribute('opacity', 0)
  document.onkeydown = move

  function move ({ key }) {
    moveDot(key, layoutMovement1p, dot)
    checkCollision()
    checkDistance()
  }

  evilDotsMove = setInterval(() => {
    evilDots = updateEvilDot(evilDots)
    checkCollision()
    checkDistance()
  }, evilDotsSpeed)
}

function launchGame2p () {
  initialSetup()
  dot.node.setAttribute('opacity', 0)
  document.onkeydown = move

  function move ({ key }) {
    moveDot(key, layoutMovement2p1, dot1, dot2.pos)
    moveDot(key, layoutMovement2p2, dot2, dot1.pos)
    checkCollision(true)
    checkDistance(true)
  }

  evilDotsMove = setInterval(() => {
    evilDots = updateEvilDot(evilDots)
    checkCollision(true)
    checkDistance(true)
  }, evilDotsSpeed)
}

let gamepadIndex
window.addEventListener('gamepadconnected', (event) => {
  gamepadIndex = event.gamepad.index
})

let splashScreen = true
setInterval(() => {
  if (gamepadIndex !== undefined) {
    const myGamepad = navigator.getGamepads()[gamepadIndex]
    myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
      if (isPressed) {
        console.log(buttonIndex)
      }
      if (isPressed && splashScreen) {
        endSplashScreen()
        splashScreen = false
      }
    })
  }
}, 10)
