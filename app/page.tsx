import Link from 'next/link'
import Image from 'next/image'
import { BRAND, LOCATIONS, PRICING, STATS } from '@/lib/constants'
import { getSchedule } from '@/lib/mindbody-api'
import ClassSchedule from '@/components/ClassSchedule'
import DayScroller from '@/components/DayScroller'
import ReviewCarousel from '@/components/ReviewCarousel'

export default async function Home() {
  const classes = await getSchedule('les')
  const today = new Date()
  const dayStr = today.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })

  return (
    <>
      {/* Hero image */}
      <section className="relative">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/hero-landing.png"
            alt="ID Hot Yoga - hot like no other"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Trial offer CTA */}
      <section className="bg-background">
        <div className="px-6 py-10 md:py-14 max-w-4xl mx-auto md:text-center">
          <div className="inline-flex items-center bg-primary/15 text-primary text-[10px] font-semibold uppercase tracking-wider px-2 py-1 mb-5">
            New to iD Hot Yoga?
          </div>

          <h1 className="text-[32px] md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-3">
            Your first class,<br />
            <em className="text-primary not-italic">just {BRAND.trialPrice}.</em>
          </h1>

          <p className="text-[15px] text-foreground/70 leading-relaxed mb-8 max-w-[260px] md:max-w-lg md:mx-auto">
            Any location. Any class. No commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 md:justify-center">
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-background px-6 py-4 text-[15px] font-extrabold tracking-wide text-center hover:bg-accent-light transition-colors"
            >
              Claim Trial Class &mdash; {BRAND.trialPrice}
            </a>
            <Link
              href="/schedule"
              className="bg-foreground/8 text-foreground border border-foreground/25 px-6 py-4 text-[15px] font-semibold text-center hover:bg-foreground/15 transition-colors"
            >
              View Today&apos;s Schedule &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Schedule — inline on homepage */}
      <section className="bg-background border-t border-neutral-border">
        <div className="py-8">
          <div className="flex items-center justify-between px-5 mb-3.5">
            <h2 className="text-base font-bold">Today &middot; {dayStr}</h2>
            <Link href="/schedule" className="text-xs font-semibold text-primary">
              View full week &rarr;
            </Link>
          </div>

          <DayScroller />
          <ClassSchedule classes={classes} />
        </div>
      </section>

      {/* About Us blurb + stats */}
      <section className="bg-surface-white py-10 px-5">
        <div className="max-w-lg mx-auto space-y-6">
          <Image
            src="/about-yoga.jpg"
            alt="Yoga practice at iD Hot Yoga"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div>
            <h2 className="text-base font-bold text-background mb-2">About Us</h2>
            <p className="text-sm text-background/60 leading-relaxed">
              New York&apos;s premier hot yoga studios, owned and operated by Tricia Donegan and Kelly Isaac.
              At iD Hot Yoga you are not confined to a flow. Classes evolve. Instructors tailor.
              This is a yoga experience designed around you &mdash; because you are like no other.
            </p>
            <Link href="/about" className="inline-block text-xs font-semibold text-primary-dark mt-2">
              Learn more &rarr;
            </Link>
          </div>

          {/* Stats cards */}
          <div className="flex gap-2.5">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex-1 bg-white border border-black/10 p-3.5 text-center">
                <div className="text-[22px] font-extrabold text-primary-dark leading-none mb-1">{stat.value}</div>
                <div className="text-[10px] text-background/50 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
        <div className="mt-6 -mx-5">
          <ReviewCarousel />
        </div>
      </section>

      {/* Membership + Trial */}
      <section className="bg-background py-10 px-5">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">Membership</h2>
            <Link href="/pricing" className="text-xs font-semibold text-primary">
              Compare all &rarr;
            </Link>
          </div>

          {/* Trial banner */}
          <div className="bg-surface border border-neutral-border border-l-4 border-l-primary p-4 flex items-center gap-3.5">
            <div className="flex-1">
              <h3 className="text-[15px] font-bold mb-0.5 text-foreground">New Student Special</h3>
              <p className="text-xs text-foreground/60 leading-snug">
                First class at any Manhattan studio &mdash; just {BRAND.trialPrice}. No strings attached.
              </p>
            </div>
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-primary text-background px-3.5 py-2.5 text-[13px] font-bold whitespace-nowrap"
            >
              {BRAND.trialPrice} &rarr;
            </a>
          </div>

          {/* Pricing cards */}
          <div className="flex gap-2.5">
            {PRICING.plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex-1 border p-4 text-center ${
                  plan.featured
                    ? 'bg-surface border-primary/30'
                    : 'bg-surface border-neutral-border'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${
                  plan.featured ? 'text-primary' : 'text-foreground/50'
                }`}>
                  {plan.name}
                </div>
                <div className="text-[26px] font-extrabold leading-none mb-0.5 text-foreground">{plan.price}</div>
                <div className="text-[11px] text-foreground/50 mb-3">
                  {plan.perClass ? `${plan.perClass} per class` : 'per month'}
                </div>
                <a
                  href={BRAND.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 text-[11px] font-semibold ${
                    plan.featured
                      ? 'bg-primary text-background'
                      : 'bg-neutral-light text-foreground'
                  }`}
                >
                  {plan.featured ? 'Best Value' : plan.name === 'Drop-In' ? 'Book Once' : 'Buy Pack'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-8">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between px-5 mb-3.5">
            <h2 className="text-base font-bold">Locations</h2>
            <Link href="/locations" className="text-xs font-semibold text-primary">
              Directions &rarr;
            </Link>
          </div>
          <div className="mx-5 bg-surface border border-neutral-border overflow-hidden">
            <div className="px-4 py-3.5 text-[13px] font-bold uppercase tracking-wider text-text-secondary border-b border-neutral-border">
              Choose Your Studio
            </div>
            {LOCATIONS.map((loc, i) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className={`flex items-center gap-3 px-4 py-3.5 ${
                  i < LOCATIONS.length - 1 ? 'border-b border-neutral-border/50' : ''
                } ${i === 0 ? 'text-primary' : ''} hover:bg-neutral-light/50 transition-colors`}
              >
                <div className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold flex-shrink-0 border ${
                  i === 0
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : 'bg-neutral-light border-neutral-border text-text-secondary'
                }`}>
                  {loc.shortName.slice(0, 3)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold ${i === 0 ? 'text-primary' : ''}`}>{loc.name}</div>
                  <div className="text-[11px] text-text-secondary">{loc.shortAddress}</div>
                </div>
                {i === 0 && <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
