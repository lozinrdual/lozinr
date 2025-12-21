"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function CustomArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="social-arrow"
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnimatedLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-white text-[14px] group flex items-center gap-2">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-white text-[14px] group flex items-center gap-2">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedEmailLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-white text-[14px] font-medium inline-flex">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </a>
  )
}

function NavLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-white text-[14px]">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

function NavLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-white text-[14px]">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

export function Footer() {
  const [animationKey, setAnimationKey] = useState(0)
  const footerRef = useRef(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement
      const isDarkMode = htmlElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1)

          setTimeout(() => {
            if (svgRef.current) {
              const letters = svgRef.current.querySelectorAll(".letter")
              letters.forEach((letter) => {
                letter.classList.add("animate")
              })
            }
          }, 10)
        }
      },
      { threshold: 0.4 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-[#0b0b0b] text-black transition-colors duration-300" ref={footerRef}>
      <style>{`
        @keyframes slideUpLetterSmooth {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .letter {
          opacity: 0;
          display: inline-block;
        }

        .letter.animate {
          animation: slideUpLetterSmooth 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .svg-container {
          transition: filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        .svg-container.dark-theme {
          filter: none;
        }

        .svg-container.light-theme {
          filter: none;
        }

        /* Text swap animation styles */
        .animated-text-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .text-swap-container {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          height: 1.2em;
        }

        .text-layer {
          display: inline-flex;
        }

        .text-layer-primary {
          position: relative;
        }

        .text-layer-secondary {
          position: absolute;
          top: 0;
          left: 0;
        }

        .text-layer-primary .letter-swap {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .text-layer-secondary .letter-swap {
          display: inline-block;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .animated-text-link:hover .text-layer-primary .letter-swap {
          transform: translateY(100%);
        }

        .animated-text-link:hover .text-layer-secondary .letter-swap {
          transform: translateY(0);
        }

        /* Updated arrow animation for SVG */
        .social-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
          transform: rotate(0deg);
        }

        .animated-text-link:hover .social-arrow {
          transform: rotate(45deg);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          background-color: #ffffff !important;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff3b00;
          z-index: 0;
          transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: rgba(255, 59, 0, 0.3);
          z-index: 0;
          transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease 0.1s;
        }

        .cta-button:hover::before {
          height: 100%;
        }

        .cta-button:hover::after {
          height: 100%;
        }

        .cta-button:hover .cta-button-text {
          color: white;
        }

        .social-icon-fill {
          fill: currentColor;
        }
      `}</style>

      <div className="px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="w-full">
            <h2 className="text-[48px] font-regular text-white tracking-tighter leading-none mb-5">
              Great Design.
              <br />
              Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full bg-white text-[16px] text-black px-8 py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]">
              <p className="text-white mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <NavLinkMobile href="/work">WORK</NavLinkMobile>
                <NavLinkMobile href="/store">STORE</NavLinkMobile>
                <NavLinkMobile href="/about">ABOUT</NavLinkMobile>
                <NavLinkMobile href="/contact">CONTACT</NavLinkMobile>
                <NavLinkMobile href="/services">SERVICES</NavLinkMobile>
              </div>
              <div className="mt-12 text-white text-[14px]">
                <p>Dhaka</p>
                <p>Bangladesh, Asia</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <AnimatedLinkMobile href="https://x.com/adnandzinr">TWITTER</AnimatedLinkMobile>
                <AnimatedLinkMobile href="#">LINKEDIN</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLinkMobile>
              </div>
              <div className="mt-18 flex flex-col gap-1">
                <NavLinkMobile href="/terms">Terms & Conditions</NavLinkMobile>
                <NavLinkMobile href="/privacy">Privacy Policy</NavLinkMobile>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
          <div className="w-full lg:w-max-full">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] text-white font-regular tracking-tighter leading-tight mb-5 whitespace-nowrap">
              Great Design. Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full md:w-xl bg-white text-[16px] text-black px-8 md:px-16 py-4 md:py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]">
              <p className="text-white mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-start">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col pt-3">
                <div className="flex flex-col gap-2">
                  <NavLink href="/work">WORK</NavLink>
                  <NavLink href="/store">STORE</NavLink>
                  <NavLink href="/about">ABOUT</NavLink>
                  <NavLink href="/contact">CONTACT</NavLink>
                  <NavLink href="/services">SERVICES</NavLink>
                </div>
                <div className="mt-12 text-white text-[14px]">
                  <p>Dhaka</p>
                  <p>Bangladesh, Asia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col lg:mt-1">
                <div className="flex flex-col gap-2">
                  <AnimatedLink href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLink>
                  <AnimatedLink href="#">LINKEDIN</AnimatedLink>
                  <AnimatedLink href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLink>
                  <AnimatedLink href="https://x.com/adnandzinr">TWITTER</AnimatedLink>
                  <AnimatedLink href="mailto:adnanakif.co@email.com">EMAIL</AnimatedLink>
                </div>
                <div className="mt-14 flex flex-col gap-1">
                  <NavLink href="/terms">Terms & Conditions</NavLink>
                  <NavLink href="/privacy">Privacy Policy</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Section */}
      <div className="py-8 md:py-8 lg:py-8 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-full px-3 md:px-6 lg:px-2">
          <svg
            ref={svgRef}
            viewBox="0 0 864.88 213.87"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto svg-container ${isDark ? "dark-theme" : "light-theme"}`}
            preserveAspectRatio="xMidYMid meet"
            key={animationKey}
          >
            <defs>
              <style>
                {`.cls-1 {
                        fill: ${isDark ? "#ffffff" : "#000000"};
                        transition: fill 0.3s ease;
                      }`}
              </style>
            </defs>
             <path
              className={`cls-1 letter`}
              d="M10.89,201.34V11.21h37.07v190.13H10.89Z"
              fill={isDark ? "#FFFFFF" : "#FFFFFF"}
              style={{ animationDelay: "0.05s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
            <path
              className={`cls-1 letter`}
              d="M68.25,106.02c0-54.65,40.67-94.81,93.29-94.81s93.79,40.16,93.79,94.81-40.92,95.32-93.79,95.32-93.29-40.67-93.29-95.32ZM215.42,106.02c0-33.55-20.33-60.24-53.89-60.24s-53.63,26.69-53.63,60.24,20.33,60.75,53.63,60.75,53.89-27.2,53.89-60.75Z"
              fill={isDark ? "#FFFFFF" : "#FFFFFF"}
              style={{ animationDelay: "0.12s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
            <path
              className={`cls-1 letter`}
              d="M261.4,201.34v-31.78l97.18-123.66h-96.92V11.21h146.44v32.31l-97.71,123.14h100.89v34.69h-149.88Z"
              fill={isDark ? "#ffffff" : "#FFFFFF"}
              style={{ animationDelay: "0.19s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
            <path
              className={`cls-1 letter`}
              d="M460.78,202.66c-14.56,0-25.42-10.06-25.42-24.1s10.59-24.36,25.42-24.36,25.42,10.33,25.42,24.36-10.86,24.1-25.42,24.1ZM446.75,144.14l-9.27-132.93h46.61l-9.53,132.93h-27.8Z"
              fill={isDark ? "#ffffff" : "#FFFFFF"}
              style={{ animationDelay: "0.26s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
            <path
              className={`cls-1 letter`}
              d="M547.09,68.67v132.67h-36.81V11.21h43.43l82.88,126.05V11.21h37.07v190.13h-39.46l-87.12-132.67Z"
              fill={isDark ? "#ffffff" : "#FFFFFF"}
              style={{ animationDelay: "0.33s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
            <path
              className={`cls-1 letter`}
              d="M697.75,201.34V11.21h74.41c47.93,0,75.73,22.24,75.73,61.7,0,25.69-15.89,46.08-42.9,55.08l48.99,73.35h-47.93l-42.9-67.26h-25.16v67.26h-40.25ZM738,100.98h32.31c24.36,0,37.34-9.53,37.34-28.07s-12.97-28.33-37.34-28.33h-32.31v56.4Z"
              fill={isDark ? "#ffffff" : "#FFFFFF"}
              style={{ animationDelay: "0.4s", fill: isDark ? "#FFFFFF" : "#FFFFFF" }}
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}
