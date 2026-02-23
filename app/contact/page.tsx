import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export const metadata = {
  title: 'Contact Us | iD Hot Yoga',
  description: 'Get in touch with iD Hot Yoga. Phone, email, and studio locations.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-text-secondary mb-8">
        Have a question or need help? Reach out and we&apos;ll get back to you.
      </p>
      <div className="space-y-4 mb-8">
        <p>
          <span className="text-text-secondary text-sm block mb-1">Phone</span>
          <a href={`tel:${BRAND.phone}`} className="text-primary font-medium hover:underline">
            {BRAND.phone}
          </a>
        </p>
        <p>
          <span className="text-text-secondary text-sm block mb-1">Email</span>
          <a href={`mailto:${BRAND.email}`} className="text-primary font-medium hover:underline">
            {BRAND.email}
          </a>
        </p>
      </div>
      <Link
        href="/locations"
        className="text-primary font-medium hover:underline"
      >
        View Locations &rarr;
      </Link>
    </div>
  )
}
