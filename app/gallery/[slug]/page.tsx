"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link"

const projectsData: {
  [key: string]: {
    title: string
    category: string
    client: string
    year: string
    services: string[]
    description: string
    results: { label: string; value: string }[]
    testimonial?: { quote: string; author: string; role: string }
    featuredImage: string
    images: string[]
  }
} = {
  "Finure-Health": {
    title: "Finure Health",
    category: "HEALTH TECH",
    client: "Finure Health Inc.",
    year: "2024",
    services: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
    description:
      "A comprehensive brand identity system for a revolutionary health technology platform. We created a modern, trustworthy brand that resonates with both medical professionals and patients.",
    results: [
      { label: "Brand Recognition", value: "+150%" },
      { label: "User Engagement", value: "+85%" },
      { label: "Platform Sign-ups", value: "+200%" },
    ],
    featuredImage: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Thumbnail.jpg",
    images: [
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Finure-Health-Logo-Variation.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Business%20Card.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Mobile%20App.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Profile.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Banner.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Typography-%26-color.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/instagram%20story.jpg",
    ],
  },
  Trevora: {
    title: "Trevora",
    category: "TRADING PLATFORM",
    client: "Trevora Trading",
    year: "2024",
    services: ["Logo Design", "Brand Strategy", "Digital Assets"],
    description:
      "A sophisticated branding solution for a next-generation trading platform. We developed a bold visual identity that conveys trust, innovation, and financial expertise.",
    results: [
      { label: "Platform Credibility", value: "+120%" },
      { label: "User Trust Score", value: "9.2/10" },
      { label: "Market Recognition", value: "+95%" },
    ],
    featuredImage: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    images: [
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2002.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2003.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2004.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2005.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2006.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2008.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2009.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2010.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2011.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2012.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2013.jpg",
    ],
  },
  lozinr: {
    title: "lOZ!NR",
    category: "BRANDING AGENCY",
    client: "Logo & Brading",
    year: "2023",
    services: ["Complete Rebrand", "Web Design", "Marketing"],
    description:
      "Our own brand evolution. A bold, modern identity that reflects our creative philosophy and commitment to innovative design solutions.",
    results: [
      { label: "Client Inquiries", value: "+180%" },
      { label: "Industry Recognition", value: "5 Awards" },
      { label: "Portfolio Views", value: "+250%" },
    ],
    featuredImage: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    images: [
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-02.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-03.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-04.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-05.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-07.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-08.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-09.jpg",
      "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-10.jpg",
    ],
  },
  rijq: {
    title: "Rijq",
    category: "FOOD & BEVERAGE",
    client: "Rijq Restaurant",
    year: "2023",
    services: ["Logo & Branding", "Packaging Design"],
    description:
      "An elegant brand identity for a premium restaurant experience. We crafted a sophisticated visual language that speaks to culinary excellence and cultural authenticity.",
    results: [
      { label: "Customer Footfall", value: "+140%" },
      { label: "Social Media Growth", value: "+220%" },
      { label: "Brand Recall", value: "92%" },
    ],
    featuredImage: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    images: [
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%202.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%203.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%204.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%205.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%206.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%207.jpg",
      "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%208.jpg",
    ],
  },
}

const allProjectKeys = Object.keys(projectsData)

export default function ProjectGalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [relatedIndex, setRelatedIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  const projectData = projectsData[slug]
  const projectKeys = Object.keys(projectsData)
  const currentIndex = projectKeys.indexOf(slug)
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null
  const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null

  const relatedProjects = allProjectKeys.filter((key) => key !== slug)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, relatedProjects.length - itemsPerView)

  const handlePrevRelated = () => {
    setRelatedIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNextRelated = () => {
    setRelatedIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(relatedIndex)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (startX - x) / 200
    const newIndex = Math.round(scrollLeft + walk)
    setRelatedIndex(Math.max(0, Math.min(maxIndex, newIndex)))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setRelatedIndex(0)
  }, [slug])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: projectData.title,
          text: projectData.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      setShowShareMenu(!showShareMenu)
    }
  }

  if (!projectData) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-regular mb-4">Project not found</h1>
          <button onClick={() => router.back()} className="px-4 py-2 text-black">
            Go Back
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <div className="absolute inset-1 rounded-full border border-white/10" />
            </div>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {/* Full width hero image with back button overlay */}
        <div className="relative w-full aspect-[9/16] md:aspect-[4/6] lg:aspect-[16/9]">
          <img
            src={projectData.featuredImage || "/placeholder.svg?height=1440&width=1080&query=featured project"}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => router.back()}
            className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white"
            aria-label="Go back"
          >
            <ArrowLeft size={20} className="transition-transform duration-300" />
            <span className="text-sm lg:text-[16px] font-medium"> Go Back</span>
          </button>

          <div className="absolute bottom-8 left-7 right-0">
            <h1 className="text-white text-3xl md:text-5xl lg:text-[96px] font-regular">{projectData.title}</h1>
          </div>
        </div>

        <div className="bg-black">
          <div className="max-w-full mx-auto px-4 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-3">
                <h3 className="text-white/40 text-[20px] tracking-tight font-medium mb-3">THE PROJECT SUMMARY :</h3>
                <p className="text-white text-[16px] md:text-[18px] leading-relaxed mb-8">{projectData.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-white/40 text-[20px] tracking-tight font-medium mb-3">WHAT WE DID :</p>
                    <p className="text-white text-[16px] md:text-[18px]">{projectData.client}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-white/40 text-[20px] tracking-tight font-medium mb-3">CATEGORY</p>
                    <div className="flex flex-wrap gap-2">
                      {projectData.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-[16px] md:text-[18px] px-3 py-1 rounded-full text-white border border-white/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-16">
              {projectData.images.map((image, index) => (
                <div key={index} className="overflow-hidden group cursor-pointer rounded-lg">
                  <div className="w-full aspect-auto overflow-hidden bg-muted">
                    <img
                      src={image || "/placeholder.svg?height=800&width=1200&query=project image"}
                      alt={`${projectData.title} - Image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {projectData.testimonial && (
              <div className="bg-white/5 rounded-2xl p-8 md:p-12 mb-16 border border-white/10">
                <blockquote className="text-white text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
                  "{projectData.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff3b00] flex items-center justify-center text-white font-bold">
                    {projectData.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{projectData.testimonial.author}</p>
                    <p className="text-white/60 text-sm">{projectData.testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="py-0 md:py-0 pb-6 lg:pb-6 bg-black">
          <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
            {/* Header with navigation */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white text-[24px] md:text-3xl lg:text-4xl font-medium tracking-tight">
                Related Projects
              </h3>
              <div className="flex items-center gap-1">
                <button
  onClick={handlePrevRelated}
  disabled={relatedIndex === 0}
  className={`lg:w-8 lg:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 ${
    relatedIndex === 0
      ? "bg-white text-black cursor-pointer"
      : "hover:bg-white/60 hover:text-black/60 cursor-pointer"
  }`}
  aria-label="Previous projects"
>
  <ArrowLeft size={22} strokeWidth={1.8} />
</button>
<button
  onClick={handleNextRelated}
  disabled={relatedIndex >= maxIndex}
  className={`lg:w-8 lg:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 ${
    relatedIndex >= maxIndex
      ? "bg-white text-black cursor-pointer"
      : "hover:bg-white/60 hover:text-black/60 cursor-pointer"
  }`}
  aria-label="Next projects"
>
  <ArrowRight size={22} strokeWidth={1.8} />
</button>
              </div>
            </div>

            {/* Carousel */}
            <div
              ref={carouselRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{
                  transform: `translateX(calc(-${relatedIndex} * (${100 / itemsPerView}% + ${(24 * (itemsPerView - 1)) / itemsPerView}px)))`,
                }}
              >
                {relatedProjects.map((key, index) => (
                  <Link
                    key={key}
                    href={`/gallery/${key}`}
                    className="group flex-shrink-0 select-none"
                    style={{
                      width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`,
                    }}
                    draggable={false}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden mb-5 bg-white/5">
                      <img
                        src={projectsData[key].featuredImage || "/placeholder.svg"}
                        alt={projectsData[key].title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  )
}
