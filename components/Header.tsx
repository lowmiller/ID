'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BRAND } from '@/lib/constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background border-b border-neutral-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-primary">
              ID
            </div>
            <span className="ml-2 text-sm font-sans text-text-secondary">YOGA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/schedule" className="text-sm font-sans text-foreground hover:text-primary transition">
              Schedule
            </Link>
            <Link href="/locations" className="text-sm font-sans text-foreground hover:text-primary transition">
              Locations
            </Link>
            <Link href="/pricing" className="text-sm font-sans text-foreground hover:text-primary transition">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-sans text-foreground hover:text-primary transition">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://mindbody.io/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition font-sans text-sm font-medium"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-border py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/schedule"
                className="text-sm font-sans text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="/locations"
                className="text-sm font-sans text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-sans text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-sm font-sans text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a
                href="https://mindbody.io/book"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition font-sans text-sm font-medium inline-block"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
