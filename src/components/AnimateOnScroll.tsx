"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(12px)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
