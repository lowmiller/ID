import Link from 'next/link'
import Image from 'next/image'
import { BRAND, LOCATIONS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-sidestack.png"
                alt="ID Hot Yoga"
                width={90}
                height={82}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {BRAND.description}
            </p>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {BRAND.instagramHandle}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/schedule', label: 'Schedule' },
                { href: '/locations', label: 'Locations' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/about', label: 'About' },
                { href: '/promos', label: 'Promos' },
                { href: '/teacher-training', label: 'Teacher Training' },
                { href: '/events', label: 'Events' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Locations</h3>
            <ul className="space-y-3">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-border mt-12 pt-8">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
