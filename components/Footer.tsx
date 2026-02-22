import Link from 'next/link'
import { BRAND, LOCATIONS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-neutral-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold text-primary mb-4">
              ID
            </div>
            <p className="text-sm font-sans text-text-secondary mb-4">
              {BRAND.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/fiercegracenyc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition"
              >
                <span className="text-sm font-sans">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/schedule" className="text-sm font-sans text-text-secondary hover:text-primary transition">
                Schedule
              </Link>
              <Link href="/locations" className="text-sm font-sans text-text-secondary hover:text-primary transition">
                Locations
              </Link>
              <Link href="/pricing" className="text-sm font-sans text-text-secondary hover:text-primary transition">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-sans text-text-secondary hover:text-primary transition">
                About
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Locations</h3>
            <nav className="flex flex-col gap-2">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/locations/${loc.slug}`}
                  className="text-sm font-sans text-text-secondary hover:text-primary transition"
                >
                  {loc.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm font-sans text-text-secondary">
                <a href={`tel:${BRAND.phone}`} className="hover:text-primary transition">
                  {BRAND.phone}
                </a>
              </p>
              <p className="text-sm font-sans text-text-secondary">
                <a href={`mailto:${BRAND.email}`} className="hover:text-primary transition">
                  {BRAND.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-border pt-8">
          <p className="text-sm font-sans text-text-secondary text-center">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
