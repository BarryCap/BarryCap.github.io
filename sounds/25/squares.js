let mouseDown = false
let randomButton = [false, false]
let randomPlay = {}
let soundType = []
let playbackRate = 100

async function key(url, press) {
  if (mouseDown || press) {
    /* random colors */
    const cNum = Math.ceil(Math.random() * 6)
    document.getElementById(url)?.classList.add(`color-${cNum}`)
    /* end of random colors */
    for (sound of soundType) {
      let audio = new Audio(`${sound}/${url}.wav`)
      audio.preservesPitch = false
      audio.playbackRate = playbackRate / 100
      document.getElementById(url)?.classList.add('pressed')
      await audio.play()
      audio.onended = () => {
        document.getElementById(url)?.classList.remove('pressed')
        document.getElementById(url)?.classList.remove(`color-${cNum}`)
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
    document.getElementById(`r${bNum}-light`)?.classList.add('triggered')
  } else {
    randomButton[bNum] = false
    clearInterval(randomPlay[bNum])
    document.getElementById(`r${bNum}-light`)?.classList.remove('triggered')
  }
}

function changeSound(sType) {
  if (!soundType.includes(sType)) {
    soundType.push(sType)
    document.getElementById(`${sType}-light`)?.classList.add('triggered')
  } else {
    soundType.splice(soundType.indexOf(sType), 1)
    document.getElementById(`${sType}-light`)?.classList.remove('triggered')
  }
}

function changePitch() {
  if (playbackRate === 136) {
    document.getElementById('pitch-slider-part6')?.classList.add('triggered')
  }
  if (playbackRate === 130) {
    document.getElementById('pitch-slider-part6')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part5')?.classList.add('triggered')
  }
  if (playbackRate === 124) {
    document.getElementById('pitch-slider-part5')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part4')?.classList.add('triggered')
  }
  if (playbackRate === 118) {
    document.getElementById('pitch-slider-part4')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part3')?.classList.add('triggered')
  }
  if (playbackRate === 112) {
    document.getElementById('pitch-slider-part3')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part2')?.classList.add('triggered')
  }
  if (playbackRate === 106) {
    document.getElementById('pitch-slider-part2')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part1')?.classList.add('triggered')
  }
  if (playbackRate === 100) {
    document.getElementById('pitch-slider-part6')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part5')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part4')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part3')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part2')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part1')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-1')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-2')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-3')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-4')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-5')?.classList.remove('triggered')
    document.getElementById('pitch-slider-part-6')?.classList.remove('triggered')
  }
  if (playbackRate === 94) {
    document.getElementById('pitch-slider-part-1')?.classList.add('triggered')
    document.getElementById('pitch-slider-part-2')?.classList.remove('triggered')
  }
  if (playbackRate === 88) {
    document.getElementById('pitch-slider-part-2')?.classList.add('triggered')
    document.getElementById('pitch-slider-part-3')?.classList.remove('triggered')
  }
  if (playbackRate === 82) {
    document.getElementById('pitch-slider-part-3')?.classList.add('triggered')
    document.getElementById('pitch-slider-part-4')?.classList.remove('triggered')
  }
  if (playbackRate === 76) {
    document.getElementById('pitch-slider-part-4')?.classList.add('triggered')
    document.getElementById('pitch-slider-part-5')?.classList.remove('triggered')
  }
  if (playbackRate === 70) {
    document.getElementById('pitch-slider-part-5')?.classList.add('triggered')
    document.getElementById('pitch-slider-part-6')?.classList.remove('triggered')
  }
  if (playbackRate === 64) {
    document.getElementById('pitch-slider-part-6')?.classList.add('triggered')
  }
}
function changePitchPlus() {
  if (playbackRate < 136) {
    playbackRate += 6
    changePitch()
  }
}

function changePitchReset() {
  playbackRate = 100
  changePitch()
}

function changePitchMinus() {
  if (playbackRate > 64) {
    playbackRate += -6
    changePitch()
  }
}

function changeQuality() {
  if (document.getElementById('svg')?.classList.contains('high-quality')) {
    document.getElementById('svg')?.classList.remove('high-quality')
    document.getElementById('high-quality-light')?.classList.remove('triggered')
  } else {
    document.getElementById('svg')?.classList.add('high-quality')
    document.getElementById('high-quality-light')?.classList.add('triggered')
  }
}
