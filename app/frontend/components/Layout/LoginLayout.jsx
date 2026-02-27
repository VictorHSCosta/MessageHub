import { usePage } from '@inertiajs/react'
import { useEffect, useRef, useState } from 'react'

const LoginAndSignUpLayout = ({ children }) => {
  const { url } = usePage()
  const [currentView, setCurrentView] = useState(children)
  const [previousView, setPreviousView] = useState(null)
  const [direction, setDirection] = useState('forward')
  const [isAnimating, setIsAnimating] = useState(false)
  const previousUrlRef = useRef(url)
  const previousChildrenRef = useRef(children)
  const animationTimeoutRef = useRef(null)

  useEffect(() => {
    if (url === previousUrlRef.current) {
      previousChildrenRef.current = children
      return
    }

    let nextDirection = 'forward'

    if (typeof document !== 'undefined') {
      const { navDirection } = document.documentElement.dataset
      nextDirection = navDirection === 'backward' ? 'backward' : 'forward'
      delete document.documentElement.dataset.navDirection
    }
    setDirection(nextDirection)
    setPreviousView(previousChildrenRef.current)
    setCurrentView(children)
    setIsAnimating(true)

    animationTimeoutRef.current = setTimeout(() => {
      setPreviousView(null)
      setIsAnimating(false)
    }, 460)

    previousUrlRef.current = url
    previousChildrenRef.current = children

    return () => clearTimeout(animationTimeoutRef.current)
  }, [url, children])

  return (
    <main className="font-[Inter] page-transition-root">
      {previousView && (
        <article className={`page-layer previous ${direction} ${isAnimating ? 'animating' : ''}`}>
          {previousView}
        </article>
      )}
      <article className={`page-layer current ${direction} ${isAnimating ? 'animating' : ''}`}>
        {currentView}
      </article>
    </main>
  )
}

export default LoginAndSignUpLayout
