let audioPlaying = {}

function key(url) {
  audioPlaying[url] = new Audio(`harmonium/${url}.wav`)
  audioPlaying[url].play()
}

function keyUp(url){
  audioPlaying[url].pause()
}
