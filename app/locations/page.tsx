import { LOCATIONS } from '@/lib/constants'
import LocationCard from '@/components/LocationCard'
import LocationSelector from '@/components/LocationSelector'

export const metadata = {
  title: 'Our Locations | ID Hot Yoga',
  description: 'Find ID Hot Yoga locations in NYC and East Hampton.',
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Locations
          </h1>
          <p className="font-sans text-lg text-text-secondary">
            Five premium hot yoga studios across New York City and the Hamptons.
          </p>
        </div>

        {/* Location Selector */}
        <div className="mb-16">
          <LocationSelector />
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* CTA Section */}
        <div className="mt-16 bg-accent p-8 rounded text-center">
          <h2 className="font-serif text-2xl font-bold mb-4 text-black">
            Ready to Start Your Practice?
          </h2>
          <p className="font-sans text-black/90 mb-6">
            Visit your nearest location to learn more about our classes.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-accent px-8 py-3 rounded font-sans font-bold hover:bg-foreground transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
