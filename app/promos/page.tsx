import Link from 'next/link'

export const metadata = {
  title: 'Promos & Special Offers | iD Hot Yoga',
  description: 'Check out our latest promos and special offers at iD Hot Yoga.',
}

export default function PromosPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-4">Promos & Special Offers</h1>
      <p className="text-text-secondary mb-8">
        Stay tuned for upcoming promotions, discounts, and special packages. Follow us on social media for the latest deals.
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
