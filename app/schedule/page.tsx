import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import DayScroller from '@/components/DayScroller'

export const metadata = {
  title: 'Class Schedule | iD Hot Yoga',
  description: 'View the full class schedule across all iD Hot Yoga locations.',
}

export default async function SchedulePage() {
  const classes = await getSchedule()

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
            Class Schedule
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find the perfect class at your nearest studio.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-8">

        <DayScroller />
        <ClassSchedule classes={classes} showLocation />

        <div className="mx-5 mt-10 bg-surface border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-text-secondary mb-6">
            Reserve your spot in any class across all locations.
          </p>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-3 font-bold hover:bg-accent-light transition"
          >
            Go to Booking
          </a>
        </div>
      </div>
    </div>
  )
}
