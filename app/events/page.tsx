import Link from 'next/link'

export const metadata = {
  title: 'Events | iD Hot Yoga',
  description: 'Upcoming workshops, special classes, and community events at iD Hot Yoga.',
}

export default function EventsPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <p className="text-text-secondary mb-8">
        Workshops, special classes, and community events. Check back for upcoming happenings at our studios.
      </p>
      <Link
        href="/schedule"
        className="text-primary font-medium hover:underline"
      >
        View Schedule &rarr;
      </Link>
    </div>
  )
}
