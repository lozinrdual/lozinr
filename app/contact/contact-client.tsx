"use client"

import { WorkHeader } from "@/components/work-header"
import { ContactForm } from "@/components/contact-form"
import { FaqSection } from "@/components/faq-section"
import { PageLoader } from "@/components/page-loader"

export default function ContactClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-[#0b0b0b] transition-colors duration-300">
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Contact" showFilters={false} />
        <ContactForm />
        <FaqSection />
      </main>
    </PageLoader>
  )
}
