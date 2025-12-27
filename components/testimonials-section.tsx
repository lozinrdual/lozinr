"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  clientPhoto: string
  rating?: number
  projectDetails?: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted a brand that felt Italian at heart but modern in spirit — and Lozinr delivered perfectly. The Luvena identity captures our story, our values, and our passion for food beautifully.",
    author: "Sarah Johnson",
    role: "Founder & Creative Director",
    company: "Luvena",
    clientPhoto: "/luvena-founder.png",
    rating: 5,
    projectDetails: "Brand Identity & Visual System",
    color: "#ff3b00",
  },
  {
    quote: "A modern identity rooted in meaning — RIJQ finally feels like the brand we imagined.",
    author: "Michael Chen",
    role: "Founder",
    company: "Rijq",
    clientPhoto: "/rijq-founder.jpg",
    rating: 5,
    projectDetails: "Brand Identity & Visual System",
    color: "#00a8ff",
  },
  {
    quote: "Professional, innovative, and results-driven. They delivered exactly what we needed to stand out.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Stellar Fitness",
    clientPhoto: "/fitness-entrepreneur-woman.jpg",
    rating: 5,
    projectDetails: "Brand Identity & Marketing Materials",
    color: "#00ff87",
  },
  {
    quote: "Their strategic approach to branding helped us launch successfully in a highly competitive market.",
    author: "David Williams",
    role: "Co-Founder",
    company: "Nova Financial",
    clientPhoto: "/businessman-professional.jpg",
    rating: 5,
    projectDetails: "Financial Services Branding",
    color: "#ffd700",
  },
  {
    quote: "Creative excellence combined with business acumen. They understand both design and strategy perfectly.",
    author: "Priya Patel",
    role: "Founder",
    company: "EcoWare Solutions",
    clientPhoto: "/indian-businesswoman.png",
    rating: 5,
    projectDetails: "Sustainable Product Branding",
    color: "#ff1493",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isDragging) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const offset = e.clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      } else {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }
    }
    setDragOffset(0)
  }

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#0b0b0b] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${testimonials[activeIndex].color} 0%, transparent 70%)`,
          left: `${50 + mousePos.x * 10}%`,
          top: `${50 + mousePos.y * 10}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${testimonials[activeIndex].color} 0%, transparent 70%)`,
          left: `${30 - mousePos.x * 15}%`,
          top: `${70 - mousePos.y * 15}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center perspective-1000">
          {testimonials.map((testimonial, index) => {
            const offset = index - activeIndex
            const isActive = index === activeIndex
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length
            const isNext = index === (activeIndex + 1) % testimonials.length

            let zIndex = 0
            let translateX = 0
            let translateY = 0
            let scale = 0.85
            let rotate = 0
            let opacity = 0

            if (isActive) {
              zIndex = 50
              translateX = isDragging ? dragOffset : 0
              translateY = 0
              scale = 1
              rotate = isDragging ? dragOffset * 0.02 : 0
              opacity = 1
            } else if (isPrev) {
              zIndex = 40
              translateX = -120
              translateY = 20
              scale = 0.9
              rotate = -8
              opacity = 0.5
            } else if (isNext) {
              zIndex = 40
              translateX = 120
              translateY = 20
              scale = 0.9
              rotate = 8
              opacity = 0.5
            } else if (offset < 0) {
              zIndex = 30 - Math.abs(offset)
              translateX = -200
              translateY = 40
              scale = 0.8
              rotate = -12
              opacity = 0
            } else {
              zIndex = 30 - Math.abs(offset)
              translateX = 200
              translateY = 40
              scale = 0.8
              rotate = 12
              opacity = 0
            }

            return (
              <div
                key={index}
                ref={isActive ? cardRef : null}
                className="absolute w-full max-w-2xl transition-all duration-700 ease-out select-none px-4 sm:px-0"
                style={{
                  zIndex,
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg) ${
                    isActive ? `rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)` : ""
                  }`,
                  opacity,
                  cursor: isActive ? (isDragging ? "grabbing" : "grab") : "default",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                  <div
                    className="absolute top-0 left-0 right-0 h-1 overflow-hidden"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    <div
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </div>

                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(600px circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, ${testimonial.color}15, transparent 40%)`,
                      }}
                    />
                  )}

                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative">
                    <div
                      className="text-5xl sm:text-6xl md:text-7xl font-serif leading-none mb-4 md:mb-6 opacity-10 text-white animate-float-slow"
                      style={{ animationDelay: "0.5s" }}
                    >
                      "
                    </div>

                    <blockquote className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed mb-8 md:mb-10 lg:mb-12">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="relative group/avatar">
                        <div
                          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover/avatar:opacity-50 transition-opacity duration-300"
                          style={{ backgroundColor: testimonial.color }}
                        />
                        <img
                          src={testimonial.clientPhoto || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 transition-all duration-300 group-hover/avatar:scale-110 group-hover/avatar:border-opacity-100"
                          style={{ borderColor: testimonial.color }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-1 truncate">
                          {testimonial.author}
                        </h3>
                        <p className="text-white/60 text-xs sm:text-sm md:text-base mb-2 truncate">
                          {testimonial.role} • {testimonial.company}
                        </p>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-white/80 text-white/80 animate-scale-in"
                              style={{
                                animationDelay: `${i * 0.1}s`,
                                filter: `drop-shadow(0 0 2px ${testimonial.color})`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/gallery/${testimonial.company.toLowerCase()}`}
                        className="hidden sm:flex items-center gap-2 text-white/50 hover:text-white text-xs md:text-sm transition-all duration-300 group/link"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span
                      className="text-white/30 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.color}20, transparent)`,
                        border: `1px solid ${testimonial.color}30`,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-6">
        <button
          onClick={prevCard}
          className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group overflow-hidden"
          aria-label="Previous testimonial"
        >
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${testimonials[activeIndex].color}30, transparent 70%)`,
            }}
          />
          <ChevronLeft className="relative w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5" />
        </button>

        <div className="flex gap-2 md:gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 sm:w-10 md:w-12 h-1.5 md:h-2"
                  : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {index === activeIndex && (
                <>
                  <div className="absolute inset-0 animate-progress" style={{ backgroundColor: testimonial.color }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextCard}
          className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group overflow-hidden"
          aria-label="Next testimonial"
        >
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${testimonials[activeIndex].color}30, transparent 70%)`,
            }}
          />
          <ChevronRight className="relative w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  )
}
