/** Technical constants */
const scaleFactor = 80
const dispScaleFromDistance = (dist) => 128 / (dist || .75)

/** Game constants */
const nbEvilDots = 8096
const initDotPosX = 0
const initDotPosY = 0
const initDot1PosX = -2
const initDot1PosY = 0
const initDot2PosX = 2
const initDot2PosY = 0
const initTimeBetweenSpawns = 1000
const evilDotsSpeed = 400

/** Keyboard layout */
const menuMoveUpKeys = ['w', 'z', 'ArrowUp']
const menuMoveDownKeys = ['s', 'ArrowDown', 'Tab']
const menuMoveXKeys = ['a', 'd', 'q', 'ArrowLeft', 'ArrowRight', 'Tab']
const menuMoveYKeys = [...menuMoveUpKeys, ...menuMoveDownKeys]
const menuMoveKeys = [...menuMoveXKeys, ...menuMoveYKeys]
const menuSelectKeys = [' ', 'Enter']
const menuEscape = ['Escape', 'Backspace', 'Home']
const layoutMovement1p = {
  up: ['w', 'z', 'ArrowUp'],
  down: ['s', 'ArrowDown'],
  left: ['a', 'q', 'ArrowLeft'],
  right: ['d', 'ArrowRight']
}
const layoutMovement2p1 = {
  up: ['w', 'z'],
  down: ['s'],
  left: ['a', 'q'],
  right: ['d']
}
const layoutMovement2p2 = {
  up: ['ArrowUp'],
  down: ['ArrowDown'],
  left: ['ArrowLeft'],
  right: ['ArrowRight']
}

/** Main menu constants */
const ONE_PLAYER = '1p'
const TWO_PLAYER = '2p'
const CREDITS = 'credits'
const OPTIONS = 'options'
const initMenuSelection = ONE_PLAYER
/** Attributes to set when changing options on the menu */
const menuOptions = {
  [ONE_PLAYER]: { x: 320, y: 712, width: 240, height: 160 },
  [TWO_PLAYER]: { x: 720, y: 712, width: 240, height: 160 },
  [CREDITS]: { x: 100, y: 852, width: 120, height: 120 },
  [OPTIONS]: { x: 1060, y: 852, width: 120, height: 120 }
}
const menuNavigation = {
  [ONE_PLAYER]: { x: TWO_PLAYER, y: CREDITS },
  [TWO_PLAYER]: { x: ONE_PLAYER, y: OPTIONS },
  [CREDITS]: { x: OPTIONS, y: ONE_PLAYER },
  [OPTIONS]: { x: CREDITS, y: TWO_PLAYER }
}

/** Option menu constants */
const GLOW = 'glow'
const DIST = 'dist'
const SOUND = 'sounds'
const initOptionSelection = GLOW
/** Attributes to set when changing options on the menu */
const optionMenuOptions = {
  [GLOW]: { y: 350 },
  [DIST]: { y: 510 },
  [SOUND]: { y: 670 }
}
const optionMenuNavigation = {
  [GLOW]: { up: SOUND, down: DIST },
  [DIST]: { up: GLOW, down: SOUND },
  [SOUND]: { up: DIST, down: GLOW }
}
/** Audio constants */
const AUDIO_MAIN_THEME = 'audio/main-theme.mp3'
const AUDIO_DOT_MOVE = 'audio/dot-move.mp3'
const AUDIO_DOT_BLOCKED = 'audio/dot-blocked.mp3'
const AUDIO_EVIL_DOT_SPAWN = 'audio/evil-dot-spawn.mp3'
const AUDIO_GHOST = 'audio/ghost.mp3'
const AUDIO_DEATH = 'audio/death.mp3'
const AUDIO_CLICK = 'audio/click.mp3'

/** Movement contants */
const directions = ['up', 'down', 'left', 'right']
const possibleMoves = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
}
const isMoveAllowed = {
  up: ([, y]) => y >= -5,
  down: ([, y]) => y <= 5,
  left: ([x]) => x >= -7,
  right: ([x]) => x <= 7,
}
