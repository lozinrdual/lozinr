"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DesktopScrollHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
    { name: "STORE", href: "/store" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isMenuOpen
            ? "bg-transparent border-[#555] text-white backdrop-blur-md"
            : "bg-[#0b0b0b]/70 border-b border-[#555] text-[#1b1b1b] backdrop-blur-md"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-full mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 nav-link-short">
            <svg viewBox="0 0 864.88 213.87" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
              <path style={{ fill: "#ffffff" }} d="M10.89,201.34V11.21h37.07v190.13H10.89Z" />
              <path
                style={{ fill: "#ffffff" }}
                d="M68.25,106.02c0-54.65,40.67-94.81,93.29-94.81s93.79,40.16,93.79,94.81-40.92,95.32-93.79,95.32-93.29-40.67-93.29-95.32ZM215.42,106.02c0-33.55-20.33-60.24-53.89-60.24s-53.63,26.69-53.63,60.24,20.33,60.75,53.63,60.75,53.89-27.2,53.89-60.75Z"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="M261.4,201.34v-31.78l97.18-123.66h-96.92V11.21h146.44v32.31l-97.71,123.14h100.89v34.69h-149.88Z"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="M460.78,202.66c-14.56,0-25.42-10.06-25.42-24.1s10.59-24.36,25.42-24.36,25.42,10.33,25.42,24.36-10.86,24.1-25.42,24.1ZM446.75,144.14l-9.27-132.93h46.61l-9.53,132.93h-27.8Z"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="M547.09,68.67v132.67h-36.81V11.21h43.43l82.88,126.05V11.21h37.07v190.13h-39.46l-87.12-132.67Z"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="M697.75,201.34V11.21h74.41c47.93,0,75.73,22.24,75.73,61.7,0,25.69-15.89,46.08-42.9,55.08l48.99,73.35h-47.93l-42.9-67.26h-25.16v67.26h-40.25ZM738,100.98h32.31c24.36,0,37.34-9.53,37.34-28.07s-12.97-28.33-37.34-28.33h-32.31v56.4Z"
              />
            </svg>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "#ffffff" }}
            />
            <div
              className={`w-6 h-0.5 rounded transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#ffffff" }}
            />
            <div
              className={`w-6 h-0.5 rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "#ffffff" }}
            />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="hidden lg:block fixed inset-0 z-40 lg:pt-35 menu-open bg-black/90 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="px-7 py-8 flex flex-col justify-between h-full">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`lg:text-[102px] font-regular leading-[0.7] nav-link-animated transition-colors duration-200 ${
                    isActive(link.href) ? "text-[#ff3b00]" : "text-white hover:text-[#ff3b00]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex gap-6 social-links-animated justify-end">
              <a
                href="https://www.instagram.com/adnanakifdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:opacity-80 transition font-sans"
              >
                Instagram
              </a>
              <a
                href="https://web.facebook.com/brandzinr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:opacity-80 transition font-sans"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
