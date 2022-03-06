let mouseDown = false
let randomButton = [false, false]
let randomPlay = {}

async function key(url, press) {
  if (mouseDown || press) {
    let audio = new Audio(`square/${url}.wav`)
    document.getElementById(url)?.classList.add('pressed')
/* random colors */
    const cNum = Math.ceil(Math.random() * 6)
    document.getElementById(url)?.classList.add(`color-${cNum}`)
/* end of random colors */
    await audio.play()
    audio.onended = () => {
      document.getElementById(url)?.classList.remove('pressed')
      document.getElementById(url)?.classList.remove(`color-${cNum}`)
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
    document.getElementById(`b${bNum}-light`)?.classList.add('triggered')
  } else {
    randomButton[bNum] = false
    clearInterval(randomPlay[bNum])
    document.getElementById(`b${bNum}-light`)?.classList.remove('triggered')
  }
}
