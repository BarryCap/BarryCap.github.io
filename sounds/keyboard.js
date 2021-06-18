let audioPlaying = {}

const key = async (url) => {
  audioPlaying[url] = new Audio(`harmonium/${url}.wav`)
  await audioPlaying[url].play()
}

const keyUp = async (url) => {
  if (audioPlaying[url]) {
    await audioPlaying[url].pause()
  }
}
