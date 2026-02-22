import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'

export const metadata = {
  title: 'Class Schedule | ID Hot Yoga',
  description: 'View the full class schedule across all ID Hot Yoga locations.',
}

export default async function SchedulePage() {
  const classes = await getSchedule()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Class Schedule
          </h1>
          <p className="font-sans text-lg text-text-secondary">
            Find the perfect class time at your nearest ID Hot Yoga location.
          </p>
        </div>

        <ClassSchedule classes={classes} />

        <div className="mt-12 bg-primary text-white p-8 rounded text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="font-sans text-white/90 mb-6">
            Head to our booking page to reserve your spot in any of our classes.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
          >
            Go to Booking
          </a>
        </div>
      </div>
    </div>
  )
}
