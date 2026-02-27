const isDocumentAvailable = () => typeof document !== 'undefined'

export const markNavDirection = (direction) => {
  if (!isDocumentAvailable()) {
    return
  }

  const root = document.documentElement
  root.dataset.navDirection = direction

  if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(() => {
      if (root.dataset.navDirection === direction) {
        delete root.dataset.navDirection
      }
    })
    return
  }

  globalThis.setTimeout(() => {
    if (root.dataset.navDirection === direction) {
      delete root.dataset.navDirection
    }
  }, 0)
}

export const consumeNavDirection = () => {
  if (!isDocumentAvailable()) {
    return 'forward'
  }

  const root = document.documentElement
  const { navDirection } = root.dataset
  delete root.dataset.navDirection

  return navDirection === 'backward' ? 'backward' : 'forward'
}
