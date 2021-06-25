function randomObj() {
  const vNum = 128
  const fNum = 128
  document.open()
  for (let i = 0; i <= vNum; i++) {
    const num1 = Math.round((Math.random() * 1024) - 512)
    const num2 = Math.round((Math.random() * 1024) - 512)
    const num3 = Math.round((Math.random() * 1024) - 512)
    document.writeln('v ' + num1 + ' ' + num2 + ' ' + num3)
  }
  for (let i = 0; i <= fNum; i++) {
    const num1 = Math.floor((Math.random() * vNum) + 1)
    const num2 = Math.floor((Math.random() * vNum) + 1)
    const num3 = Math.floor((Math.random() * vNum) + 1)
    const num4 = Math.floor((Math.random() * vNum) + 1)
    document.writeln('f ' + num1 + ' ' + num2 + ' ' + num3 + ' ' + num4)
  }
  /* Random color
  let hue
  hue = (Math.floor(Math.random() * 360)) + 'deg'
  document.documentElement.style.setProperty('--random-hue')
  */
  document.close()
}
