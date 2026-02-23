import Image from 'next/image'
import { BRAND, LOCATIONS } from '@/lib/constants'
import LocationCard from '@/components/LocationCard'
import LocationSelector from '@/components/LocationSelector'

export const metadata = {
  title: 'Our Locations | iD Hot Yoga',
  description: 'Find iD Hot Yoga locations in NYC and East Hampton.',
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with B&W yoga photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pricing-bg.jpg"
            alt="Yoga practice at ID Hot Yoga studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 px-5 md:px-8 pt-20 pb-16 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Locations
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Five studios across New York City and the Hamptons.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">

        {/* Location Selector */}
        <div className="mb-12">
          <LocationSelector />
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              slug={location.slug}
              address={location.address}
              phone={location.phone}
              hours={location.hours}
              mapUrl={location.mapUrl}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-surface border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-text-secondary mb-6">
            Visit your nearest studio to experience yoga like no other.
          </p>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-3 font-bold hover:bg-accent-light transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
