import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import { LOCATIONS } from '@/lib/constants'
import Link from 'next/link'

export const metadata = {
  title: 'Class Schedule by Location | ID Hot Yoga',
}

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    location: loc.slug,
  }))
}

export default async function LocationSchedulePage({ params }: PageProps) {
  const { location } = await params
  const locationData = LOCATIONS.find((loc) => loc.slug === location)

  if (!locationData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/schedule" className="text-primary hover:text-primary-dark">
            Back to Schedule
          </Link>
        </div>
      </div>
    )
  }

  const classes = await getSchedule(locationData.id)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/schedule" className="text-primary hover:text-primary-dark mb-6 inline-block">
          ← Back to Schedule
        </Link>

        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {locationData.name} Schedule
          </h1>
          <p className="font-sans text-lg text-text-secondary">
            {locationData.address} • {locationData.phone}
          </p>
        </div>

        <ClassSchedule classes={classes} />

        <div className="mt-12 bg-primary text-white p-8 rounded text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Book Your Class
          </h2>
          <p className="font-sans text-white/90 mb-6">
            Secure your spot in any of our {locationData.name} classes.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </div>
  )
}
