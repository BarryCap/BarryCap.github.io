/** Basic utils functions */
const $ = (id) => document.getElementById(id)
const setTransform = (node, [x, y]) => node.setAttribute('transform', `translate(${x * scaleFactor} ${y * scaleFactor})`)
const replaceDot = ({ node, pos }) => setTransform(node, pos)
const createNS = (type) => document.createElementNS('http://www.w3.org/2000/svg', type)
const calcDistance = (pos1, pos2) => ((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2) ** .5

/**
 * Change the menuElement object according to an option defined in
 * the menuOptions constant.
 * @param menuElement the dom element which will be transformed
 * @param option the key of the "menuOptions" to use
 * @param menuOptions the object containing attributes to update
 */
function chooseMenuOption (menuElement, option, menuOptions) {
  Object.entries(menuOptions[option]).forEach(([key, value]) => {
    menuElement.setAttribute(key, value)
  })
}

/**
 * Create an audio element
 * @param file path to the audio file
 * @param volume desired volume
 * @param loop should the audio loop
 * @param playbackRate rate of play
 */
function createAudioFromFile (file, volume = 1, loop = false, playbackRate = 1) {
  const audio = new Audio(file)
  audio.loop = loop
  audio.playbackRate = playbackRate
  audio.volume = volume
  return audio
}
