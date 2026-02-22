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

  useEffect(() => {
    if (url === previousUrlRef.current) return

    const nextDirection =
      document.documentElement?.dataset.navDirection === 'backward' ? 'backward' : 'forward'

    setDirection(nextDirection)
    setPreviousView(previousChildrenRef.current)
    setCurrentView(children)
    setIsAnimating(true)

    const timeout = globalThis.setTimeout(() => {
      setPreviousView(null)
      setIsAnimating(false)
    }, 460)

    previousUrlRef.current = url
    previousChildrenRef.current = children

    return () => globalThis.clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `children` is intentionally omitted; JSX elements create new references each render, causing unnecessary effect runs. The correct children are captured via closure when `url` changes.
  }, [url])

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
