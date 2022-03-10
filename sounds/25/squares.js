let mouseDown = false
const randomButton = [false, false]
const randomPlay = {}
const soundType = []
let playbackRate = 1
let pitchLevel = 0
const maxPitchLevel = 9
const pitchSize = 2**(1/12)

function classList(id) {
  return document.getElementById(id)?.classList || {add: () => {}, remove: () => {}, contains: () => {}}
}

async function key(url, press) {
  if (mouseDown || press) {
    const cNum = Math.ceil(Math.random() * 6)
    classList(url).add(`color-${cNum}`)
    for (sound of soundType) {
      let audio = new Audio(`${sound}/${url}.wav`)
      audio.preservesPitch = false
      audio.playbackRate = playbackRate
      classList(url).add('pressed')
      await audio.play()
      audio.onended = () => {
        classList(url).remove('pressed')
        classList(url).remove(`color-${cNum}`)
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
    randomPlay[bNum] = setInterval(randomValue, 1000)
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

function changeQuality() {
  const func = classList('svg').contains('high-quality') ? 'remove' : 'add'
  classList('svg')[func]('high-quality')
  classList('high-quality-light')[func]('triggered')
}
