let mouseDown = false

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
