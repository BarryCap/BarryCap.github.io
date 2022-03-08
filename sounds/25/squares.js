let mouseDown = false
let randomButton = [false, false]
let randomPlay = {}
let soundType = []

async function key(url, press) {
  if (mouseDown || press) {
    /* random colors */
    const cNum = Math.ceil(Math.random() * 6)
    document.getElementById(url)?.classList.add(`color-${cNum}`)
    /* end of random colors */
    for (sound of soundType) {
      let audio = new Audio(`${sound}/${url}.wav`)
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

function changeSound(sNum) {
  if (!soundType.includes(sNum)) {
    soundType.push(sNum)
    document.getElementById(`${sNum}-light`)?.classList.add('triggered')
  } else {
    soundType.splice(soundType.indexOf(sNum), 1)
    document.getElementById(`${sNum}-light`)?.classList.remove('triggered')
  }
}
