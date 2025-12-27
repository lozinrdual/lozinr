"use client"
import { Star } from "lucide-react"
import Image from "next/image"

import { StoreHeader } from "@/components/store-header"
import { Button } from "@/components/ui/button"
import { PageLoader } from "@/components/page-loader"

interface Product {
  id: number
  name: string
  description: string
  price: string
  priceNumber: number
  image: string
  features: string[]
  category: "starter" | "professional" | "enterprise"
  popular?: boolean
  deliveryTime?: string
  paymentLink?: string
  profileImage?: string
  rating?: number
}

const products: Product[] = [
  {
    id: 0,
    name: "Brand Guidelines Template",
    description: "Professional brand guidelines template ready to customize and use",
    price: "$99",
    priceNumber: 99,
    image: "https://rm9cehwjzivcimqc.public.blob.vercel-storage.com/ddsf.avif",
    features: ["Ready to Use", "Fully Editable", "Professional Design", "Quick Setup"],
    category: "starter",
    deliveryTime: "Instant",
    paymentLink: "https://adnanakif.gumroad.com/l/brandguidelinestamplate",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 1,
    name: "Logo Design Package",
    description: "Perfect for startups and small businesses needing a professional brand mark",
    price: "Free",
    priceNumber: 0,
    image: "/professional-logo-design-variations.jpg",
    features: ["5 Concepts", "Unlimited Revisions", "All Formats", "Source Files"],
    category: "starter",
    deliveryTime: "5-7 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Social Media Kit",
    description: "Professionally designed templates for all social media platforms",
    price: "$299",
    priceNumber: 299,
    image: "/social-media-kit-templates.jpg",
    features: ["Templates", "Brand Consistency", "Ready to Use", "Editable Files"],
    category: "starter",
    deliveryTime: "3-5 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Brand Identity Kit",
    description: "Complete branding package with everything you need for brand consistency",
    price: "$599",
    priceNumber: 599,
    image: "/brand-identity-design-system.png",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
    category: "professional",
    popular: true,
    deliveryTime: "10-14 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Website Branding",
    description: "Complete web design system with UI kit and brand application guidelines",
    price: "$899",
    priceNumber: 899,
    image: "/website-design-brand-guidelines.jpg",
    features: ["UI Kit", "Web Design", "Brand Guidelines", "Asset Pack"],
    category: "professional",
    deliveryTime: "14-21 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Packaging Design",
    description: "Premium packaging design for physical products with mockups",
    price: "$699",
    priceNumber: 699,
    image: "/packaging-design-mockup.jpg",
    features: ["Package Design", "Mockups", "Specifications", "Print Ready"],
    category: "professional",
    deliveryTime: "10-14 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Brand Strategy",
    description: "Comprehensive brand strategy consultation and complete documentation",
    price: "$1,299",
    priceNumber: 1299,
    image: "/brand-strategy-consultation.jpg",
    features: ["Strategy Session", "Market Research", "Brand Positioning", "Documentation"],
    category: "enterprise",
    deliveryTime: "21-30 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
]

function ProductCard({ product }: { product: Product }) {
  const whopLink = "https://whop.com/adnanakif"

  const handleViewDetails = () => {
    window.open(whopLink, "_blank")
  }

  return (
    <div className="group overflow-hidden flex flex-col h-full bg-[#0b0b0b] rounded-2xl border border-border transition-all duration-300">
      <div className="relative overflow-hidden aspect-video w-full cursor-pointer" onClick={handleViewDetails}>
        <Image
          src={product.image || "/placeholder.svg?height=400&width=640&query=design package"}
          alt={product.name}
          width={640}
          height={440}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col  p-6 md:p-3">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 ">
            <Image
              src={product.profileImage || "/placeholder.svg"}
              alt="Profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-medium text-lg md:text-xl leading-tight mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-white text-xs md:text-sm leading-snug line-clamp-2 mb-2">{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-white text-xl md:text-xl font-medium">{product.price}</span>
              {product.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#ff3b00] text-[#ff3b00]" />
                  <span className="text-white font-medium text-sm md:text-[16px]">{product.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-[#ff3b00] hover:bg-[#ff3b00]/80 text-black transition-all duration-300 mt-4 py-5 rounded-xl text-base md:text-lg font-medium"
          onClick={handleViewDetails}
        >
          Purchase
        </Button>
      </div>
    </div>
  )
}

export default function StorePage() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-[#0b0b0b]">
        {/* Removed UnifiedHeader */}
        <StoreHeader title="Store" />

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoader>
  )
}
