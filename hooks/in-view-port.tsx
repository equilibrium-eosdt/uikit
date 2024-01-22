import { useEffect, useState } from 'react'

export const useInViewPort = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isInViewPort, setIsInViewPort] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIsInViewPort(entry.isIntersecting)
      }
    }, options)

    if (!ref.current) {
      return () => {}
    }

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isInViewPort
}
