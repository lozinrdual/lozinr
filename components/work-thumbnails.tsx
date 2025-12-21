"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  industry: string
  image: string
  slug: string
  tags?: string[]
}

const allProjects: Project[] = [
  {
    id: "1",
    title: "Finure Health",
    category: "Logo & Branding",
    industry: "HEALTH & WELLNESS",
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
    slug: "Finure-Health",
    tags: ["Healthcare", "Branding", "Identity"],
  },
  {
    id: "2",
    title: "Trevora",
    category: "Logo & Branding",
    industry: "TECH",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    slug: "Trevora",
    tags: ["Finance", "Trading", "Digital"],
  },
  {
    id: "3",
    title: "lOZ!NR",
    category: "Logo & Branding",
    industry: "DESIGN",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    slug: "lozinr",
    tags: ["Agency", "Branding", "Creative"],
  },
  {
    id: "4",
    title: "Luvena",
    category: "Logo & Branding",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Beauty", "Logo", "Packaging"],
  },
  {
    id: "5",
    title: "Rijq",
    category: "Food & Bakery",
    industry: "BAKERY",
    image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    slug: "rijq",
    tags: ["Food", "Bakery", "Branding"],
  },
]

interface WorkThumbnailsProps {
  filteredProjects: Project[]
}

export function WorkThumbnails({ filteredProjects }: WorkThumbnailsProps) {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const projectRefsArray = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setVisibleProjects([])
    projectRefsArray.current = []

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefsArray.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleProjects((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    projectRefsArray.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <style>{`
        .work-thumbnail-hover {
          position: relative;
          overflow: hidden;
        }
        .work-thumbnail-hover::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: #ff3b00;
          transition: height 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          border-radius: inherit;
        }
        .work-thumbnail-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(255, 59, 0, 0.3);
          transition: height 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 0;
          border-radius: inherit;
        }
        .group:hover .work-thumbnail-hover::before {
          height: 100%;
        }
        .group:hover .work-thumbnail-hover::after {
          height: 100%;
        }
        .work-thumbnail-hover > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-17 max-w-full mx-auto overflow-hidden">
        {filteredProjects.map((project, index) => {
          const cardVisible = visibleProjects[index] || false

          return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefsArray.current[index] = el
              }}
              className={`group overflow-hidden transition-all duration-1000 transform flex flex-col cursor-pointer ${
                cardVisible ? "" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => (window.location.href = `/gallery/${project.slug}`)}
            >
              <div className="w-full overflow-hidden relative transition-all duration-100 aspect-16-13 work-thumbnail-hover rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div
                className={` pt-4 p-0 flex justify-between items-end transition-all duration-1000 transform ${
                  cardVisible ? "" : ""
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold lg:text-[20px]">{project.title}</h3>
                  <p className="text-white/80 font-regular lg:text-[14px] mb-2">{project.category}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-11 h-11 rounded-full bg-[#ff3b00] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { allProjects }
