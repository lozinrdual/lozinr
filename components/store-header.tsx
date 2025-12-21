"use client"

import { useEffect, useRef, useState } from "react"

interface StoreHeaderProps {
  title?: string
  subtitle?: string
}

export function StoreHeader({ title = "Store", subtitle }: StoreHeaderProps) {
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const fullText = title

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedLetters([])
          fullText.split("").forEach((_, index) => {
            setTimeout(() => {
              setAnimatedLetters((prev) => [...prev, true])
            }, index * 80)
          })
        } else {
          setAnimatedLetters(new Array(fullText.length).fill(false))
        }
      },
      { threshold: 0.2 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [fullText])

  return (
    <div className="bg-[#0b0b0b] text-white font-sans pt-25 lg:pt-10 pb-8 px-1 px-3 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Title with Animation */}
        <div className="flex justify-start mb-4">
          <div className="flex-1">
            <h1
              ref={titleRef}
              className="text-[72px] md:text-[90px] lg:text-[176px] font-regular tracking-none overflow-hidden max-w-full"
            >
              {fullText.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block ${index === 3 ? "mr-1" : ""}`}
                  style={{
                    opacity: animatedLetters[index] ? 1 : 0,
                    transform: animatedLetters[index] ? "translateY(0)" : "translateY(24px)",
                    transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        {subtitle && <p className="text-lg md:text-xl text-text/70 max-w-2xl font-light">{subtitle}</p>}
      </div>
    </div>
  )
}
