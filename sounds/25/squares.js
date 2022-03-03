let mouseDown = false
let randomButton = [false, false]
let randomPlay = {}

async function key(url, press) {
  if (mouseDown || press) {
    let audio = new Audio(`sound/${url}.wav`)
    document.getElementById(url)?.classList.add('pressed')
    await audio.play()
    audio.onended = () => document.getElementById(url)?.classList.remove('pressed')
  }
}

document.firstChild.onmousedown = () => {
  mouseDown = true
}

document.firstChild.onmouseup = () => {
  mouseDown = false
}

function randomNess() {
  const url = ('00' + Math.ceil(Math.random() * 25)).slice(-2)
  key(url, true)
}

function randomNotes(bNum) {
  if (!randomButton[bNum]) {
    randomButton[bNum] = true
    randomNess()
    randomPlay[bNum] = setInterval(randomNess, 1000)
    document.getElementById(`b${bNum}-light`)?.classList.add('triggered')
  } else {
    randomButton[bNum] = false
    clearInterval(randomPlay[bNum])
    document.getElementById(`b${bNum}-light`)?.classList.remove('triggered')
  }
}
