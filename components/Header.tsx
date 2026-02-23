'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BRAND, LOCATIONS } from '@/lib/constants'

const primaryLinks = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/locations', label: 'Locations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

const secondaryLinks = [
  { href: '/promos', label: 'Promos' },
  { href: '/teacher-training', label: 'Teacher Training' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const pathname = usePathname()

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setLocationOpen(false)
  }, [pathname])

  // Close location dropdown on outside click
  useEffect(() => {
    if (!locationOpen) return
    const handler = () => setLocationOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [locationOpen])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-neutral-border">
      <div className="flex items-center justify-between px-5 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-sidestack.png"
            alt="ID Hot Yoga"
            width={90}
            height={82}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Location Pill - visible on mobile */}
        <div className="relative flex-1 mx-3 min-w-0 md:hidden">
          <button
            onClick={(e) => { e.stopPropagation(); setLocationOpen(!locationOpen) }}
            className="flex w-full items-center gap-1.5 bg-neutral-light border border-neutral-border px-3 py-1.5 cursor-pointer"
          >
            <svg className="w-3 h-3 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            <span className="text-xs text-text-secondary truncate">{LOCATIONS[0].shortName} &middot; {LOCATIONS[0].shortAddress.split(',')[0]}</span>
            <svg className={`w-2.5 h-2.5 text-text-secondary flex-shrink-0 ml-auto transition-transform ${locationOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {locationOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-surface border border-neutral-border z-50">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/locations/${loc.slug}`}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-neutral-light border-b border-neutral-border last:border-b-0"
                >
                  <span className="font-medium">{loc.name}</span>
                  <span className="block text-xs text-text-secondary">{loc.shortAddress}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-nav">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-primary font-medium'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-5 py-2 text-sm font-bold tracking-wide uppercase hover:bg-accent-light transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Hamburger button - mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center flex-shrink-0"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-neutral-border bg-background px-5 pb-5 pt-3 font-nav">
          <ul className="space-y-1">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-border mt-2 pt-2">
            <ul className="space-y-1">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-sm transition-colors ${
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-primary text-background text-center px-5 py-3 text-sm font-bold tracking-wide uppercase hover:bg-accent-light transition-colors"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  )
}
