"use client"

import { useRef, useEffect, useState } from "react"

export function ContactHeader() {
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const fullText = "Contact"

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
      { threshold: 0.1 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [fullText])

  return (
    <header className="w-full bg-black text-white font-sans pt-12 pb-16 px-3 lg:px-8">
      <div className="max-w-full mx-auto">
        <h1
          ref={titleRef}
          className="text-[72px] md:text-[90px] lg:text-[176px] font-regular tracking-tight overflow-hidden"
        >
          {fullText.split("").map((letter, index) => (
            <span
              key={index}
              style={{
                opacity: animatedLetters[index] ? 1 : 0,
                transform: animatedLetters[index] ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                display: "inline-block",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>
    </header>
  )
}
