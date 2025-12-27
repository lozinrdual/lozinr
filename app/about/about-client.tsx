"use client"
import { WorkHeader } from "@/components/work-header"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

export default function AboutClient() {
  const imageRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const [imageAnimated, setImageAnimated] = useState(false)
  const [animatedLines, setAnimatedLines] = useState<boolean[]>([])
  const agencyRef = useRef<HTMLDivElement>(null)
  const agencyTextRef = useRef<HTMLDivElement>(null)
  const [agencyAnimated, setAgencyAnimated] = useState(false)
  const founderImageRef = useRef<HTMLDivElement>(null)
  const founderTextRef = useRef<HTMLDivElement>(null)
  const [founderImageAnimated, setFounderImageAnimated] = useState(false)
  const [founderTextAnimated, setFounderTextAnimated] = useState<boolean[]>([])
  const [studioLinesAnimated, setStudioLinesAnimated] = useState<boolean[]>([])
  const [valuesAnimated, setValuesAnimated] = useState(false)
  const [statsAnimated, setStatsAnimated] = useState(false)
  const [teamAnimated, setTeamAnimated] = useState(false)
  const [timelineAnimated, setTimelineAnimated] = useState(false)
  const [awardsAnimated, setAwardsAnimated] = useState(false)
  const valuesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !imageAnimated) {
          setImageAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [imageAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animatedLines.length === 0) {
          const lines = [
          "lOZINR was built on a simple belief that great design isn't",
          "just something you see, it's something you feel. We work",
          "closely with founders, startups and global teams to build",
          "brands that are bold in thinking and refined in execution.",
          "Our process is hands-on and collaborative, combining",
          "clear strategy with creative instinct to create work that's",
          "thoughtful, lasting and truly you.",
        ];

          setAnimatedLines(new Array(lines.length).fill(false))

          lines.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedLines((prev) => {
                const newLines = [...prev]
                newLines[index] = true
                return newLines
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current)
    }

    return () => observer.disconnect()
  }, [animatedLines.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !agencyAnimated) {
          setAgencyAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (agencyRef.current) {
      observer.observe(agencyRef.current)
    }

    return () => observer.disconnect()
  }, [agencyAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !founderImageAnimated) {
          setFounderImageAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (founderImageRef.current) {
      observer.observe(founderImageRef.current)
    }

    return () => observer.disconnect()
  }, [founderImageAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && founderTextAnimated.length === 0) {
          const lines = [
            "Design should feel like clarity not noise. At lOZ!NR, we don't just design brands, we shape identities that speak without shouting, and last without forcing.",
          ]

          setFounderTextAnimated(new Array(lines.length).fill(false))

          lines.forEach((_, index) => {
            setTimeout(() => {
              setFounderTextAnimated((prev) => {
                const newLines = [...prev]
                newLines[index] = true
                return newLines
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (founderTextRef.current) {
      observer.observe(founderTextRef.current)
    }

    return () => observer.disconnect()
  }, [founderTextAnimated.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && studioLinesAnimated.length === 0) {
          setStudioLinesAnimated(new Array(4).fill(false))

          for (let i = 0; i < 4; i++) {
            setTimeout(() => {
              setStudioLinesAnimated((prev) => {
                const newLines = [...prev]
                newLines[i] = true
                return newLines
              })
            }, i * 100)
          }
        }
      },
      { threshold: 0.3 },
    )

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current)
    }

    return () => observer.disconnect()
  }, [studioLinesAnimated.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !valuesAnimated) {
          setValuesAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (valuesRef.current) {
      observer.observe(valuesRef.current)
    }

    return () => observer.disconnect()
  }, [valuesAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [statsAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !teamAnimated) {
          setTeamAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (teamRef.current) {
      observer.observe(teamRef.current)
    }

    return () => observer.disconnect()
  }, [teamAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timelineAnimated) {
          setTimelineAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [timelineAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !awardsAnimated) {
          setAwardsAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (awardsRef.current) {
      observer.observe(awardsRef.current)
    }

    return () => observer.disconnect()
  }, [awardsAnimated])

  return (
    <PageLoader>
      <main className="bg-[#0b0b0b] text-primary transition-colors duration-300 lg:px-0">
        {/* Removed UnifiedHeader component */}
        <WorkHeader title="About Us" showFilters={false} />

        <section className="py-20 px-0 md:px-4 lg:px-8 border-b border-white/30">
          <div className="max-w-full mx-auto">
            <div ref={imageRef} className="relative w-full aspect-[16/9] overflow-hidden">
              <Image src="/images/design-mode/img2.avif" alt="lOZ!NR Studio Team" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b]">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="text-4xl md:text-5xl lg:text-[36px] text-white tracking-tight font-medium">
                Studio Story
              </div>

              <div ref={descriptionRef} className="space-y-6">
                <div
                  style={{
                    opacity: studioLinesAnimated[0] ? 1 : 0,
                    transform: studioLinesAnimated[0] ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <p className="text-lg md:text-xl lg:text-[30px] tracking-tight leading-relaxed text-white font-medium">
                    lOZ!NR was built on a simple belief that great design isn't just something you see, it's something
                    you feel.
                  </p>
                </div>
                <div
                  style={{
                    opacity: studioLinesAnimated[1] ? 1 : 0,
                    transform: studioLinesAnimated[1] ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <p className="text-lg md:text-xl lg:text-[30px] tracking-tight leading-relaxed text-white font-medium">
                    We work closely with founders, startups and global teams to build brands that are bold in thinking
                    and refined in execution.
                  </p>
                </div>
                <div
                  style={{
                    opacity: studioLinesAnimated[2] ? 1 : 0,
                    transform: studioLinesAnimated[2] ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <p className="text-lg md:text-xl lg:text-[30px] text-white tracking-tight leading-relaxed font-medium">
                    Our process is hands-on and collaborative, combining clear strategy with creative instinct to create
                    work that's thoughtful, lasting and truly you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={valuesRef} className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b] border-t border-white/30">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[36px] text-white tracking-tight font-medium mb-16">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bold Thinking",
                  description:
                    "We believe brands should challenge norms, not follow them. Every project is an opportunity to push creative boundaries.",
                },
                {
                  title: "Lasting Impact",
                  description:
                    "Great design transcends trends. We create identities that remain relevant, powerful, and meaningful for years to come.",
                },
                {
                  title: "Collaborative Spirit",
                  description:
                    "Your vision drives our work. We partner closely with you to ensure every decision reflects your goals and values.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  style={{
                    opacity: valuesAnimated ? 1 : 0,
                    transform: valuesAnimated ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                  className="border border-white/20 p-8"
                >
                  <h3 className="text-2xl text-white font-medium mb-4">{value.title}</h3>
                  <p className="text-white/80 text-[16px] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={statsRef} className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b] border-t border-white/30">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[36px] text-white tracking-tight font-medium mb-16">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "200+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    opacity: statsAnimated ? 1 : 0,
                    transform: statsAnimated ? "scale(1)" : "scale(0.8)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">{stat.number}</div>
                  <p className="text-white/70 text-[14px] md:text-[16px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={teamRef} className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b] border-t border-white/30">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[36px] text-white tracking-tight font-medium mb-16">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Brand Strategist",
                  image: "/professional-woman-headshot.jpg",
                },
                {
                  name: "Marcus Johnson",
                  role: "Lead Designer",
                  image: "/business-executive-asian-man.jpg",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Creative Director",
                  image: "/professional-businesswoman.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  style={{
                    opacity: teamAnimated ? 1 : 0,
                    transform: teamAnimated ? "translateY(0)" : "translateY(40px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative w-full aspect-square mb-6 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-2">{member.name}</h3>
                  <p className="text-white/70 text-[16px]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={timelineRef} className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b] border-t border-white/30">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[36px] text-white tracking-tight font-medium mb-16">
              Our Journey
            </h2>
            <div className="space-y-12">
              {[
                {
                  year: "2019",
                  title: "Foundation",
                  description: "lOZ!NR was founded with a vision to create timeless brand identities.",
                },
                {
                  year: "2020",
                  title: "First Major Project",
                  description: "Completed our first enterprise branding project for a Fortune 500 company.",
                },
                {
                  year: "2022",
                  title: "Global Expansion",
                  description: "Expanded our services to international markets and opened new office.",
                },
                {
                  year: "2024",
                  title: "Industry Recognition",
                  description: "Received multiple design awards and recognition from leading industry bodies.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  style={{
                    opacity: timelineAnimated ? 1 : 0,
                    transform: timelineAnimated ? "translateX(0)" : "translateX(-40px)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                  className="flex gap-8 items-start"
                >
                  <div className="text-4xl md:text-5xl text-white/30 font-bold min-w-[120px]">{milestone.year}</div>
                  <div className="flex-1 border-l-2 border-white/20 pl-8">
                    <h3 className="text-2xl text-white font-medium mb-3">{milestone.title}</h3>
                    <p className="text-white/70 text-[16px] leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b] border-t border-white/30">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div
                ref={agencyRef}
                className="relative w-full aspect-square overflow-hidden order-2 md:order-1"
                style={{
                  opacity: agencyAnimated ? 1 : 0,
                  transform: agencyAnimated ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <Image
                  src="/images/design-mode/Logo%20sckatch(1).png"
                  alt="lOZ!NR Agency Team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-[16px]  font-medium mb-4 text-white">[] Our Agency</h2>
                <h3 className="text-[16px]  font-medium mb-8 text-white">Where creativity meets technology.</h3>

                <div ref={agencyTextRef} className="space-y-6">
                  {[
                    "At lOZ!NR, we create brand experiences that are timeless, scalable and built to connect. Through thoughtful design systems, we help founders bring their ideas to life with clarity, emotion and intention.",
                    "We believe great design should move with meaning. Our vision is to build brands that lead. By bringing together strategy, motion and craft, we aim to shape the next wave of iconic identities that push culture and business forward.",
                  ].map((line, index) => (
                    <p
                      key={index}
                      className="text-[16px] leading-relaxed font-medium text-white"
                      style={{
                        opacity: agencyAnimated ? 1 : 0,
                        transform: agencyAnimated ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mt-8 inline-block relative group">
                  <Link href="/contact" className="flex items-center gap-2 text-white text-[14px] font-regular">
                    <span className="relative">
                      Contact Us
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-[45deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 px-3 md:px-4 lg:px-8 bg-[#0b0b0b]">
          <div className="absolute top-0 lg:left-8 lg:right-8 right-3 left-3  h-16 bg-white"></div>

          <div className="max-w-full mx-auto pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="text-[16px] font-medium text-pblack">Our founder</div>

              <div
                ref={founderImageRef}
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  opacity: founderImageAnimated ? 1 : 0,
                  transform: founderImageAnimated ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <Image
                  src="/images/design-mode/adnan%20akif(1).jpg"
                  alt="Founder Portrait"
                  fill
                  className="object-cover"
                />
              </div>

              <div ref={founderTextRef} className="space-y-6">
                {[
                  "Design should feel like clarity not noise. At lOZ!NR, we don't just design brands, we shape identities that speak without shouting, and last without forcing.",
                ].map((line, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-relaxed text-white"
                    style={{
                      opacity: founderTextAnimated[index] ? 1 : 0,
                      transform: founderTextAnimated[index] ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {line}
                  </p>
                ))}

                <div className="space-y-3 pt-4">
                  <p className="text-white font-medium text-[16px]">Adnan Akif</p>
                  <p className="text-white text-[14px]">Founder & Creative Director</p>
                </div>

                <div className="flex flex-col gap-3 pt-6">
                  {[
                    { name: "Instagram", href: "https://www.instagram.com/adnanakifdesign/" },
                    { name: "Facebook", href: "https://web.facebook.com/brandzinr" },
                    { name: "Youtube", href: "https://www.youtube.com/@adnanakifdesign" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white text-[14px] flex items-center gap-2 relative group"
                    >
                      <span className="relative inline-block">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-background transition-all duration-300 group-hover:w-full"></span>
                      </span>

                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-[45deg]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoader>
  )
}
