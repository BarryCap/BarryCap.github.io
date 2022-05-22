function splashScreenToMenu () {
  $('splash-screen-overlay').remove()
  $('splash-screen').remove()
  $('menu-intro-rect').classList.add('menu-intro')
}

function menuToCredits () {
  $('menu-top-page').setAttribute('opacity', 0)
  $('credits-page').setAttribute('opacity', 1)
}

function menuToOptions () {
  $('menu-top-page').setAttribute('opacity', 0)
  $('options-page').setAttribute('opacity', 1)
}

function optionsToMenu () {
  $('menu-top-page').setAttribute('opacity', 1)
  $('credits-page').setAttribute('opacity', 0)
  $('options-page').setAttribute('opacity', 0)
}

function gameToMenu () {
  $('evil-dots').innerHTML = ''
  $('count-down').innerHTML = ''
  $('evil-dots-filters').innerHTML = ''
  $('menu').setAttribute('opacity', 1)
  $('count-down').classList.remove('count-down')
  $('dot-disp-map').setAttribute('scale', 8)
}

function menuToGame () {
  $('menu').setAttribute('opacity', 0)
  $('count-down').classList.add('count-down')
  $('dot-disp-map').setAttribute('scale', 256)
  setTimeout(() => $('dot-disp-map').setAttribute('scale', 8), 200)
}

function changeMenuPlayers (twoPlayers) {
  $('hyphen').setAttribute('opacity', +twoPlayers)
  $('left-menu-title').setAttribute('opacity', +!twoPlayers)
  $('right-menu-title').setAttribute('opacity', +!twoPlayers)
  $('last-score').setAttribute('opacity', +!twoPlayers)
  $('high-score').setAttribute('opacity', +!twoPlayers)
  $('p1-score').setAttribute('opacity', +twoPlayers)
  $('p2-score').setAttribute('opacity', +twoPlayers)
}

function createEvilDotDisplacementMap (index) {
  const filter = createNS('filter')
  filter.setAttribute('id', `evil-dot-disp${index}`)

  const feTurbulence = createNS('feTurbulence')
  feTurbulence.setAttribute('type', 'fractalNoise')
  feTurbulence.setAttribute('baseFrequency', .1)
  feTurbulence.setAttribute('numOctaves', 16)
  feTurbulence.setAttribute('result', 'fractal')

  const feDisplacementMap = createNS('feDisplacementMap')
  feDisplacementMap.setAttribute('in', 'SourceGraphic')
  feDisplacementMap.setAttribute('in2', 'fractal')
  feDisplacementMap.setAttribute('yChannelSelector', 'G')
  feDisplacementMap.setAttribute('scale', 8)

  const animateTurbulence = createNS('animate')
  animateTurbulence.setAttribute('attributeName', 'seed')
  animateTurbulence.setAttribute('values', '1;1800')
  animateTurbulence.setAttribute('dur', 60)
  animateTurbulence.setAttribute('repeatCount', 'indefinite')

  $('evil-dots-filters').appendChild(filter)
  filter.appendChild(feTurbulence)
  filter.appendChild(feDisplacementMap)
  feTurbulence.appendChild(animateTurbulence)

  return feDisplacementMap
}

function createEvilDot (currentEvilDotIndex, shouldGlow, shouldDist) {
  const evilDot = {}
  if (shouldDist) {
    evilDot.feDisplacementMap = createEvilDotDisplacementMap(currentEvilDotIndex)
  }

  evilDot.group = createNS('g')
  if (shouldGlow) {
    evilDot.group.setAttribute('filter', 'drop-shadow(0 0 20 #f00)')
  }
  if (shouldDist) {
    evilDot.group.setAttribute('filter', `url(#evil-dot-disp${currentEvilDotIndex})`)
  }
  if (shouldGlow && shouldDist) {
    evilDot.group.setAttribute('filter', `drop-shadow(0 0 20 #f00) url(#evil-dot-disp${currentEvilDotIndex})`)
  }

  evilDot.node = createNS('circle')
  evilDot.node.setAttribute('id', `evil-dot${currentEvilDotIndex}`)
  evilDot.node.setAttribute('fill', '#f00')
  evilDot.node.setAttribute('r', 40)
  evilDot.node.setAttribute('cx', '50%')
  evilDot.node.setAttribute('cy', '50%')

  $('evil-dots').appendChild(evilDot.group)
  if (shouldDist) {
    const effectFixer = createNS('circle')
    effectFixer.setAttribute('r', 160)
    effectFixer.setAttribute('cx', '50%')
    effectFixer.setAttribute('cy', '50%')
    effectFixer.setAttribute('fill', '#f0f0')
    evilDot.group.appendChild(effectFixer)
  }
  evilDot.group.appendChild(evilDot.node)

  return evilDot
}
