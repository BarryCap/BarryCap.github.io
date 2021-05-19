(function cursor() {
  var follower, init, mouseX, mouseY, positionElement, printout, timer
  follower = document.getElementById('follower')
  mouseX = (event) => {
    return event.clientX
  }
  mouseY = (event) => {
    return event.clientY
  }
  positionElement = (event) => {
    var mouse
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    }
    follower.style.left = mouse.x + 'px'
    follower.style.top = mouse.y + 'px';
  }
  timer = false
  window.onmousemove = init = (event) => {
    var _event
    _event = event
    return timer = setTimeout(() => {
      return positionElement(_event)
    }, 1)
  }
}).call(this)