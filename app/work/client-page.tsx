"use client"

import { useState, useMemo } from "react"
import { WorkHeader } from "@/components/work-header"
import { WorkThumbnails, allProjects } from "@/components/work-thumbnails"
import { WorkFilters } from "@/components/work-filters"
import { PageLoader } from "@/components/page-loader"

export default function WorkClientPage() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const industries = useMemo(() => {
    const industryMap = new Map<string, number>()
    allProjects.forEach((project) => {
      industryMap.set(project.industry, (industryMap.get(project.industry) || 0) + 1)
    })

    const industriesArray = [
      { name: "ALL", count: allProjects.length },
      ...Array.from(industryMap.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    ]
    return industriesArray
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return allProjects
    }
    return allProjects.filter((project) => project.industry === activeFilter)
  }, [activeFilter])

  return (
    <PageLoader>
      <main className="min-h-screen bg-[#0b0b0b] transition-colors duration-300">
        {/* Removed UnifiedHeader */}
        <WorkHeader showFilters={false} />
        <WorkFilters categories={industries} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
        <WorkThumbnails filteredProjects={filteredProjects} />
      </main>
    </PageLoader>
  )
}
