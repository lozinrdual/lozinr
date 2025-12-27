"use client"

import { WorkHeader } from "@/components/work-header"
import { ServicesDetailGrid } from "@/components/services-detail-grid"
import { PageLoader } from "@/components/page-loader"

export default function ServicesClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Services" showFilters={false} />
        <ServicesDetailGrid />
      </main>
    </PageLoader>
  )
}
