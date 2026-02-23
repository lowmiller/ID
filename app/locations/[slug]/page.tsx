import { BRAND, LOCATIONS } from '@/lib/constants'
import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Location Details | iD Hot Yoga',
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
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/locations" className="text-primary hover:text-accent-light">
            Back to Locations
          </Link>
        </div>
      </div>
    )
  }

  const classes = await getSchedule(location.id)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={location.image} alt={`${location.name} studio`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 px-5 md:px-8 pt-20 pb-16 max-w-4xl mx-auto">
          <Link href="/locations" className="text-primary hover:text-accent-light text-sm mb-6 inline-block">&larr; All Locations</Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{location.name}</h1>
          <p className="text-lg text-foreground/70">{location.address}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">
        {/* Location Details */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary mb-2">Address</h3>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent-light transition text-sm"
              >
                {location.address}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary mb-2">Phone</h3>
              <a
                href={`tel:${location.phone}`}
                className="text-primary hover:text-accent-light transition text-sm"
              >
                {location.phone}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-text-secondary mb-2">Hours</h3>
              <p className="text-sm text-text-secondary">{location.hours}</p>
            </div>
          </div>

          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-background transition font-bold text-sm inline-block"
          >
            Get Directions
          </a>
        </div>

        {/* Classes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 px-5 md:px-0">Classes at {location.name}</h2>
          <div className="md:mx-0 -mx-5">
            <ClassSchedule classes={classes} />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-surface border border-primary/30 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join Us?
          </h3>
          <p className="text-text-secondary mb-6">
            Book your first class at {location.name}.
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
