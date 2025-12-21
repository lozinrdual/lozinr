"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { ScrollHeader } from "@/components/scroll-header"

export default function GalleryClientPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 400)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 700)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(timer)
    }
  }, [])

  const projects = [
    {
      id: "1",
      slug: "Finure-Health",
      title: "Finure Health",
      category: "Health Tech Branding",
      client: "Finure Health Inc.",
      year: "2024",
      services: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
      image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Thumbnail.jpg",
    },
    {
      id: "2",
      slug: "Trevora",
      title: "Trevora",
      category: "Trading Platform",
      client: "Trevora Trading",
      year: "2024",
      services: ["Logo Design", "Brand Strategy", "Digital Assets"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    },
    {
      id: "3",
      slug: "lozinr",
      title: "lOZ!NR",
      category: "Agency Branding",
      client: "Internal Project",
      year: "2023",
      services: ["Complete Rebrand", "Web Design", "Marketing"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    },
    {
      id: "4",
      slug: "rijq",
      title: "Rijq",
      category: "Food & Beverage",
      client: "Rijq Restaurant",
      year: "2023",
      services: ["Logo & Branding", "Packaging Design"],
      image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <DesktopScrollHeader />
      <ScrollHeader />

      {/* Loading Animation */}
      {isLoading && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-10 h-10">
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white animate-spin"
                style={{ animationDuration: "0.8s" }}
              />
              <div className="absolute inset-1.5 rounded-full border border-white/10" />
            </div>
          </div>
        </div>
      )}

      {/* Gallery Content with improved entrance */}
      <div
        className={`transition-all duration-500 ease-out ${
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="relative w-full aspect-[9/16] md:aspect-[4/6] lg:aspect-[16/9]">
          <img
            src={projects[0]?.image || "/placeholder.svg?height=1440&width=1080&query=featured project"}
            alt="Featured Project"
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => router.back()}
            className="absolute top-6 left-3 z-10 flex items-center gap-2 text-white px-4 py-2 rounded-lg backdrop-blur-md bg-black/20 hover:bg-black/40 transition-all duration-300 group border border-white/10"
            aria-label="Go back"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm lg:text-base font-medium">Back</span>
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-8">
            <div className="max-w-xl">
              <h2 className="text-[32px] md:text-5xl lg:text-7xl font-regular text-white leading-tight">
                {projects[0]?.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-2">{projects[0]?.category}</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 md:py-24 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(1).map((project, index) => (
                <Link
                  key={project.id}
                  href={`/gallery/${project.slug}`}
                  className="group cursor-pointer"
                  style={{
                    opacity: isLoading ? 0 : 1,
                    transform: isLoading ? "translateY(20px)" : "translateY(0)",
                    transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg?height=600&width=800&query=gallery project"}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{project.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 2).map((service, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-[#ff3b00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {project.client} • {project.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
