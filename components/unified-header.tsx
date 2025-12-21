"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function UnifiedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 800)
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-full mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 relative z-10 transition-transform hover:scale-105 duration-300">
            <svg viewBox="0 0 864.88 213.87" className="h-5 lg:h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
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
            onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
            className="p-2 flex flex-col gap-1.5 relative z-10 group"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : "group-hover:w-8"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0 scale-0" : "group-hover:w-4"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-8"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ease-out ${
          isMenuOpen && !isClosing ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Circular wipe overlay */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          style={{
            clipPath: isClosing
              ? "circle(0% at 95% 5%)"
              : isMenuOpen
                ? "circle(150% at 95% 5%)"
                : "circle(0% at 95% 5%)",
            transition: "clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        />

        <div className="relative h-full flex flex-col justify-between px-6 lg:px-8 pt-24 lg:pt-28 pb-8 lg:pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-2 lg:gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-light leading-[0.9] tracking-tighter transition-all duration-300 hover:tracking-normal ${
                  isActive(link.href)
                    ? "text-[#ff3b00] translate-x-4"
                    : "text-white hover:text-[#ff3b00] hover:translate-x-4"
                } ${isMenuOpen && !isClosing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: isMenuOpen && !isClosing ? `${100 + index * 80}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            className={`flex flex-wrap gap-4 lg:gap-6 justify-end transition-all duration-500 ${
              isMenuOpen && !isClosing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isMenuOpen && !isClosing ? "600ms" : "0ms",
            }}
          >
            <a
              href="https://www.instagram.com/adnanakifdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base lg:text-lg font-medium hover:text-[#ff3b00] transition-colors duration-300 font-sans"
            >
              Instagram
            </a>
            <a
              href="https://web.facebook.com/brandzinr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base lg:text-lg font-medium hover:text-[#ff3b00] transition-colors duration-300 font-sans"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@adnanakifdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base lg:text-lg font-medium hover:text-[#ff3b00] transition-colors duration-300 font-sans"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
