// Random CSS values
const bgcolor = '#' + Math.floor(Math.random()*16777215).toString(16)
document.documentElement.style.setProperty('--rnd-bgcolor', bgcolor)
const fill = '#' + Math.floor(Math.random()*16777215).toString(16)
document.documentElement.style.setProperty('--rnd-fill', fill)
const dash = Math.floor(Math.random()*8192)
document.documentElement.style.setProperty('--rnd-dash', dash)
const time = 'very-long-draw ' + Math.floor(Math.random()*16) + 's linear infinite'
document.documentElement.style.setProperty('--rnd-time', time)

// Random path generator
let path = document.getElementById('path')
path.setAttribute('d', randomSVG())

function randomSVG() {
  const lNum = 8192
  let path = 'm 16 16 '
  for (let i = 0; i <= lNum; i++) {
    const ax = Math.floor(Math.random() * 32 - 15.5) / 8
    const ay = Math.floor(Math.random() * 32 - 15.5) / 8
    const bx = Math.floor(Math.random() * 32 - 15.5) / 8
    const by = Math.floor(Math.random() * 32 - 15.5) / 8
    const cx = Math.floor(Math.random() * 32 - 15.5) / 8
    const cy = Math.floor(Math.random() * 32 - 15.5) / 8
    path += 'c' + ax + ' ' + ay + ' ' + bx + ' ' + by + ' ' + cx + ' ' + cy
  }
  return path
}
