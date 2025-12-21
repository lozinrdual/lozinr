"use client"

import { ChevronDown, Check, SlidersHorizontal } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Category {
  name: string
  count: number
}

interface WorkFiltersProps {
  categories: Category[]
  onFilterChange: (category: string) => void
  activeFilter: string
}

export function WorkFilters({ categories, onFilterChange, activeFilter }: WorkFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleSelect = (categoryName: string) => {
    onFilterChange(categoryName)
    setIsOpen(false)
  }

  const activeCategory = categories.find((c) => c.name === activeFilter)

  // Scroll active filter into view on mount
  useEffect(() => {
    if (scrollContainerRef.current && activeFilter) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-filter="${activeFilter}"]`)
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [activeFilter])

  return (
    <div className="py-0 md:py-0 px-3 md:px-6 lg:px-8">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/5 text-text flex items-center justify-between hover:border-white/40 hover:bg-white/10 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <SlidersHorizontal size={18} className="text-white/60" />
              <span className="font-medium">
                {activeCategory?.name} <span className="text-white/50">({activeCategory?.count})</span>
              </span>
            </span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 text-white/60 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded-xl overflow-hidden z-50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-4 border-b border-white/10 bg-white/5">
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">Filter by Industry</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    onClick={() => handleSelect(category.name)}
                    className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                      activeFilter === category.name
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-white/80 hover:text-white"
                    }`}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeFilter === category.name
                            ? "bg-white scale-100"
                            : "bg-white/30 scale-75 group-hover:scale-100 group-hover:bg-white/50"
                        }`}
                      />
                      <span className="font-medium">{category.name}</span>
                      <span className="text-[12px] text-white/40">({category.count})</span>
                    </span>
                    {activeFilter === category.name && <Check size={16} className="text-white" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Horizontal Scroll Filters */}
      <div className="hidden md:block">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              data-filter={category.name}
              onClick={() => onFilterChange(category.name)}
              onMouseEnter={() => setHoveredFilter(category.name)}
              onMouseLeave={() => setHoveredFilter(null)}
              className={`group relative px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 text-[14px] font-medium border-2 flex-shrink-0 overflow-hidden ${
                activeFilter === category.name
                  ? "bg-white border-white text-black"
                  : "bg-transparent border-white/30 text-white/60 hover:border-white hover:text-white"
              }`}
            >
              {/* Wave hover effect background */}
              <span
                className={`absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom ${
                  hoveredFilter === category.name && activeFilter !== category.name ? "scale-y-100" : "scale-y-0"
                }`}
                style={{ transformOrigin: "bottom" }}
              />

              {/* Content */}
              <span
                className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                  hoveredFilter === category.name && activeFilter !== category.name ? "text-black" : ""
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`text-[12px] transition-colors duration-300 ${
                    activeFilter === category.name
                      ? "text-black/60"
                      : hoveredFilter === category.name
                        ? "text-black/60"
                        : "text-white/40"
                  }`}
                >
                  ({category.count})
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
