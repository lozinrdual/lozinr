"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Star, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer for initial animation
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

  // Mouse tracking for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-advance cards
  useEffect(() => {
    if (isDragging) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

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
    <section ref={sectionRef} className="min-h-screen bg-[#0b0b0b] py-20 md:py-32 relative overflow-hidden">
      {/* Animated background spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, ${testimonials[activeIndex].color}15, transparent 70%)`,
        }}
      />

      

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        

        {/* Main card deck container */}
        <div
          className={`relative h-[600px] md:h-[700px] mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {/* Stack of cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              // Calculate card position in stack
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
                  className="absolute w-full max-w-2xl transition-all duration-700 ease-out select-none"
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                    opacity,
                    cursor: isActive ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                >
                  {/* Card */}
                  <div
                    className="relative bg-[#111] border-2 rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      borderColor: `${testimonial.color}40`,
                      boxShadow: isActive ? `0 30px 90px ${testimonial.color}30` : "none",
                    }}
                  >
                    {/* Color accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-2"
                      style={{
                        background: `linear-gradient(90deg, ${testimonial.color}, ${testimonial.color}80)`,
                      }}
                    />

                    {/* Card content */}
                    <div className="p-8 md:p-12">
                      {/* Quote icon */}
                      <div
                        className="text-8xl md:text-9xl font-serif leading-none mb-6 opacity-20"
                        style={{ color: testimonial.color }}
                      >
                        "
                      </div>

                      {/* Quote text */}
                      <blockquote className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                        {testimonial.quote}
                      </blockquote>

                      {/* Divider */}
                      <div className="w-20 h-1 mb-8" style={{ backgroundColor: testimonial.color }} />

                      {/* Client info */}
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div
                            className="absolute inset-0 blur-xl opacity-50"
                            style={{ backgroundColor: testimonial.color }}
                          />
                          <img
                            src={testimonial.clientPhoto || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2"
                            style={{ borderColor: testimonial.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{testimonial.author}</h3>
                          <p className="text-white/70 text-base md:text-lg mb-3">
                            {testimonial.role} • {testimonial.company}
                          </p>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex gap-1">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4"
                                  style={{ fill: testimonial.color, color: testimonial.color }}
                                />
                              ))}
                            </div>
                            <span className="text-white/50 text-sm">{testimonial.rating}.0</span>
                          </div>
                          <p className="text-white/50 text-sm font-medium">{testimonial.projectDetails}</p>
                        </div>

                        {/* Project link */}
                        <Link
                          href={`/gallery/${testimonial.company.toLowerCase()}`}
                          className="group p-4 rounded-full transition-all duration-300 hover:scale-110"
                          style={{
                            backgroundColor: `${testimonial.color}20`,
                          }}
                        >
                          <ArrowUpRight
                            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            style={{ color: testimonial.color }}
                          />
                        </Link>
                      </div>
                    </div>

                    {/* Card number indicator */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white/50 text-sm font-medium">
                        {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        

        
    </section>
  )
}
