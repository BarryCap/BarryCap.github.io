const hue = (Math.floor(Math.random() * 360)) + 'deg'
document.documentElement.style.setProperty('--rnd-hue', hue)
function randomObj() {
  const vNum = 128
  const fNum = 128
  let OBJ = ''
  for (let i = 0; i <= vNum; i++) {
    const num1 = Math.round((Math.random() * 1024) - 512)
    const num2 = Math.round((Math.random() * 1024) - 512)
    const num3 = Math.round((Math.random() * 1024) - 512)
    OBJ += 'v ' + num1 + ' ' + num2 + ' ' + num3 + '\n'
  }
  for (let i = 0; i <= fNum; i++) {
    const num1 = Math.floor((Math.random() * vNum) + 1)
    const num2 = Math.floor((Math.random() * vNum) + 1)
    const num3 = Math.floor((Math.random() * vNum) + 1)
    OBJ += 'f ' + num1 + ' ' + num2 + ' ' + num3 + '\n'
  }
  const file = new File([OBJ], "rnd.obj", {type: "text/plain"})
  return window.URL.createObjectURL(file)
}
