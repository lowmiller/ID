import { LOCATIONS } from '@/lib/constants'
import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import Link from 'next/link'

export const metadata = {
  title: 'Location Details | ID Hot Yoga',
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }))
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = LOCATIONS.find((loc) => loc.slug === slug)

  if (!location) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/locations" className="text-primary hover:text-primary-dark">
            Back to Locations
          </Link>
        </div>
      </div>
    )
  }

  const classes = await getSchedule(location.id)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/locations" className="text-primary hover:text-primary-dark mb-6 inline-block">
          ← Back to Locations
        </Link>

        {/* Location Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {location.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Address */}
            <div>
              <h3 className="font-serif font-bold mb-2">Address</h3>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition font-sans text-sm"
              >
                {location.address}
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-serif font-bold mb-2">Phone</h3>
              <a
                href={`tel:${location.phone}`}
                className="text-primary hover:text-primary-dark transition font-sans text-sm"
              >
                {location.phone}
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-serif font-bold mb-2">Hours</h3>
              <p className="font-sans text-sm text-text-secondary">{location.hours}</p>
            </div>
          </div>

          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition font-sans font-medium inline-block"
          >
            Get Directions
          </a>
        </div>

        {/* Classes at this location */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-8">Classes at {location.name}</h2>
          <ClassSchedule classes={classes} />
        </div>

        {/* CTA */}
        <div className="bg-primary text-white p-8 rounded text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Ready to Join Us?
          </h3>
          <p className="font-sans text-white/90 mb-6">
            Book your first class today and experience the power of hot yoga at {location.name}.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
