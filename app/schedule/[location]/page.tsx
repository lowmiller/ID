import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import DayScroller from '@/components/DayScroller'
import { BRAND, LOCATIONS } from '@/lib/constants'
import Link from 'next/link'

export const metadata = {
  title: 'Class Schedule by Location | iD Hot Yoga',
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
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/schedule" className="text-primary hover:text-accent-light">
            Back to Schedule
          </Link>
        </div>
      </div>
    )
  }

  const classes = await getSchedule(locationData.id)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-8">
        <div className="px-5 mb-6">
          <Link href="/schedule" className="text-primary hover:text-accent-light text-sm mb-4 inline-block">
            &larr; All Locations
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            {locationData.name}
          </h1>
          <p className="text-text-secondary text-sm">
            {locationData.address} &middot; {locationData.phone}
          </p>
        </div>

        <DayScroller />
        <ClassSchedule classes={classes} />

        <div className="mx-5 mt-10 bg-surface border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Book Your Class
          </h2>
          <p className="text-text-secondary mb-6">
            Secure your spot at {locationData.name}.
          </p>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-3 font-bold hover:bg-accent-light transition"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </div>
  )
}
