let mouseDown = false
const randomButton = [false, false]
const randomPlay = {}
let randomInterval = 1000
const soundType = []
let playbackRate = 1
let pitchLevel = 0
const maxPitchLevel = 9
const pitchSize = 2**(1/12)
let recordingInProgress = false
let playingInProgress = false
let recordingBuffer = []
let recording = []
let currentRecordedNote = 0
let startTime = new Date
let playingTimeout = null
let randomColor = true

function classList(id) {
  return document.getElementById(id)?.classList || {add: () => {}, remove: () => {}, contains: () => {}}
}

async function key(url, press) {
  if ((mouseDown || press) && soundType.length) {
    if (recordingInProgress) {
      const newTime = new Date
      recordingBuffer.push({key: url, delay: newTime - startTime})
      startTime = newTime
    }
    const cNum = Math.ceil(Math.random() * 6)
    if (randomColor) {
      classList(`k${url}`).add(`color-${cNum}`)
    } else {
      classList(`k${url}`).add('colored')
    }
    for (sound of soundType) {
      let audio = new Audio(`${sound}/${url}.wav`)
      audio.preservesPitch = false
      audio.playbackRate = playbackRate
      classList(`k${url}`).add('pressed')
      await audio.play()
      audio.onended = () => {
        classList(`k${url}`).remove('pressed')
        classList(`k${url}`).remove('colored')
        if (cNum) {
          classList(`k${url}`).remove(`color-${cNum}`)
        }
      }
    }
  }
}

document.firstChild.onmousedown = () => {
  mouseDown = true
}

document.firstChild.onmouseup = () => {
  mouseDown = false
}

function randomValue() {
  const url = ('00' + Math.ceil(Math.random() * 25)).slice(-2)
  key(url, true)
}

function randomNotes(bNum) {
  if (!randomButton[bNum]) {
    randomButton[bNum] = true
    randomValue()
    randomPlay[bNum] = setInterval(randomValue, randomInterval)
    classList(`r${bNum}-light`).add('triggered')
  } else {
    randomButton[bNum] = false
    clearInterval(randomPlay[bNum])
    classList(`r${bNum}-light`).remove('triggered')
  }
}

function changeSound(sType) {
  if (!soundType.includes(sType)) {
    soundType.push(sType)
    classList(`${sType}-light`).add('triggered')
  } else {
    soundType.splice(soundType.indexOf(sType), 1)
    classList(`${sType}-light`).remove('triggered')
  }
}

function changePitch() {
  for (let i = -maxPitchLevel; i <= maxPitchLevel; i++) {
    const func = Math.abs(i) <= Math.abs(pitchLevel) && pitchLevel*i > 0 ? 'add' : 'remove'
    classList(`pitch-slider-part${i}`)[func]('triggered')
  }
}

function changePitchPlus() {
  if (pitchLevel < maxPitchLevel) {
    playbackRate *= pitchSize
    pitchLevel += 1
    changePitch()
  }
}

function changePitchReset() {
  playbackRate = 1
  pitchLevel = 0
  changePitch()
}

function changePitchMinus() {
  if (pitchLevel > -maxPitchLevel) {
    playbackRate *= 1/pitchSize
    pitchLevel -= 1
    changePitch()
  }
}

function startRecording() {
  if (recordingInProgress) {
    recordingInProgress = false
    if (recordingBuffer.length) {
      recording = recordingBuffer
      recording[0].delay = new Date - startTime
      if (playingInProgress) {
        playRecording()
      }
    }
    classList('record-light').remove('triggered')
  } else {
    recordingInProgress = true
    startTime = new Date
    recordingBuffer = []
    classList('record-light').add('triggered')
  }
}

function playRecordedNote () {
  key(recording[currentRecordedNote].key, true)
  currentRecordedNote += 1
  if (currentRecordedNote >= recording.length) {
    currentRecordedNote = 0
  }
  playingTimeout = setTimeout(playRecordedNote, recording[currentRecordedNote].delay -10)
}

function playRecording() {
  if (playingInProgress) {
    playingInProgress = false
    currentRecordedNote = 0
    clearTimeout(playingTimeout)
    classList('record-play-light').remove('triggered')
  } else {
    playingInProgress = true
    playRecordedNote()
    classList('record-play-light').add('triggered')
  }
}

function changeQuality() {
  const func = classList('svg').contains('high-quality') ? 'remove' : 'add'
  classList('svg')[func]('high-quality')
  classList('high-quality-light')[func]('triggered')
}

function colorInvert() {
  const func = classList('svg').contains('invert') ? 'remove' : 'add'
  classList('svg')[func]('invert')
  classList('color-invert-light')[func]('triggered')
}

function colorBehavior() {
  randomColor = !randomColor
  const func = classList('color-behavior-light').contains('triggered') ? 'remove' : 'add'
  classList('color-behavior-light')[func]('triggered')
}
