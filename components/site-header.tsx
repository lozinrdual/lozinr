"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Handle animation state
  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true)
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/work", label: "WORK" },
    { href: "/contact", label: "CONTACT" },
    { href: "/store", label: "STORE" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b] border-b border-white/20">
        <div className="flex items-center justify-between px-5 md:px-6 lg:px-8 py-2 md:py-3">
          {/* Logo - Left Side */}
          <Link href="/" className="flex-shrink-0">
            <svg
              viewBox="0 0 864.88 213.87"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-4.5 w-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M10.89,201.34V11.21h37.07v190.13H10.89Z" fill="#FFFFFF" />
              <path
                d="M68.25,106.02c0-54.65,40.67-94.81,93.29-94.81s93.79,40.16,93.79,94.81-40.92,95.32-93.79,95.32-93.29-40.67-93.29-95.32ZM215.42,106.02c0-33.55-20.33-60.24-53.89-60.24s-53.63,26.69-53.63,60.24,20.33,60.75,53.63,60.75,53.89-27.2,53.89-60.75Z"
                fill="#FFFFFF"
              />
              <path
                d="M261.4,201.34v-31.78l97.18-123.66h-96.92V11.21h146.44v32.31l-97.71,123.14h100.89v34.69h-149.88Z"
                fill="#FFFFFF"
              />
              <path
                d="M460.78,202.66c-14.56,0-25.42-10.06-25.42-24.1s10.59-24.36,25.42-24.36,25.42,10.33,25.42,24.36-10.86,24.1-25.42,24.1ZM446.75,144.14l-9.27-132.93h46.61l-9.53,132.93h-27.8Z"
                fill="#FFFFFF"
              />
              <path
                d="M547.09,68.67v132.67h-36.81V11.21h43.43l82.88,126.05V11.21h37.07v190.13h-39.46l-87.12-132.67Z"
                fill="#FFFFFF"
              />
              <path
                d="M697.75,201.34V11.21h74.41c47.93,0,75.73,22.24,75.73,61.7,0,25.69-15.89,46.08-42.9,55.08l48.99,73.35h-47.93l-42.9-67.26h-25.16v67.26h-40.25ZM738,100.98h32.31c24.36,0,37.34-9.53,37.34-28.07s-12.97-28.33-37.34-28.33h-32.31v56.4Z"
                fill="#FFFFFF"
              />
            </svg>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 group"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-3.5 md:w-5 md:h-3.5">
              <span
                className={`absolute left-0 h-[1.9px] bg-white transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
                  ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45 w-full" : "top-0 w-full group-hover:w-3/5"}`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.9px] bg-white transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
                  ${isMenuOpen ? "w-0 opacity-0" : "w-full opacity-100 group-hover:w-4/5 group-hover:translate-x-1"}`}
              />
              <span
                className={`absolute left-0 h-[1.9px] bg-white transition-all duration-1200 ease-[cubic-bezier(0.76,0,0.24,1)]
                  ${isMenuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45 w-full" : "bottom-0 w-full group-hover:w-2/5"}`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-hidden ${isAnimating || isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Background curtain panels - reveal from bottom on open, exit to top on close */}
        <div className="absolute inset-0 flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-1 bg-white transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isMenuOpen ? "scale-y-100 origin-bottom" : "scale-y-0 origin-top"}`}
              style={{
                transitionDuration: "1500ms",
                transitionDelay: isMenuOpen ? `${i * 50}ms` : `${(4 - i) * 30}ms`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col justify-between px-4 md:px-5 lg:px-6 pt-20 pb-8 md:pb-10">
          {/* Main Navigation */}
          <nav className="flex-1 flex items-center">
            <ul className="flex flex-col gap-0">
              {navLinks.map((link, index) => (
                <li key={link.href} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className={`block text-[70px] md:text-[89px] lg:text-[101px] tracking-tight font-regular leading-[0.95]
                      transition-colors duration-100 ease-in-out
                      ${isActive(link.href) ? "text-[#ff3b00]" : "text-black/70 hover:text-[#ff3b00]"}`}
                    style={{
                      transform: isMenuOpen ? "translateY(0)" : "translateY(120%)",
                      opacity: isMenuOpen ? 1 : 0,
                      transitionDuration: "1500ms",
                      transitionDelay: isMenuOpen ? `${400 + index * 80}ms` : `${(navLinks.length - index) * 40}ms`,
                      transitionProperty: "transform, opacity",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section - Social links on right */}
          <div className="flex items-end justify-end">
            <div
              className="flex items-center gap-2 md:gap-2"
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(100%)",
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: isMenuOpen ? "1500ms" : "0ms",
              }}
            >
              <a
                href="https://instagram.com/adnanakifdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 text-[16px] font-bold tracking-tight hover:text-[#ff3b00] transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/brandzinr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 text-[16px] font-bold tracking-tight hover:text-[#ff3b00] transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40px] md:h-[48px]" />
    </>
  )
}
