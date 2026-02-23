import Image from 'next/image'
import { BRAND, PRICING } from '@/lib/constants'

export const metadata = {
  title: 'Pricing & Memberships | iD Hot Yoga',
  description: 'Flexible pricing options for all levels of practice at iD Hot Yoga.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with real studio photo */}
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
            Flexible Pricing
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that fits your schedule and goals.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">

        {/* Trial Offer */}
        <div className="mb-12 bg-gradient-to-r from-[#1a1a06] to-[#121204] border border-primary/30 p-6 text-center">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">New Student Special</div>
          <div className="text-4xl font-extrabold mb-2">{BRAND.trialPrice}</div>
          <p className="text-text-secondary mb-4">{PRICING.trial.description}. No commitment required.</p>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-3 font-bold hover:bg-accent-light transition"
          >
            Claim Trial Class
          </a>
        </div>

        {/* Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING.plans.map((plan) => (
              <div
                key={plan.name}
                className={`border p-8 flex flex-col ${
                  plan.featured
                    ? 'bg-gradient-to-br from-[#1a1a06] to-surface border-primary/30'
                    : 'bg-surface border-neutral-border'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block bg-primary text-background text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mb-4 self-start">
                    Best Value
                  </span>
                )}
                <div className="mb-4">
                  <div className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-2">{plan.name}</div>
                  <div className="text-4xl font-extrabold text-primary mb-1">{plan.price}</div>
                  <p className="text-sm text-text-secondary">
                    {plan.perClass ? `${plan.perClass} per class` : 'per month, all locations'}
                  </p>
                </div>

                <p className="text-sm text-text-secondary mb-6 flex-grow">
                  {plan.description}
                </p>

                <a
                  href={BRAND.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-6 py-3 text-center font-bold transition ${
                    plan.featured
                      ? 'bg-primary text-background hover:bg-accent-light'
                      : 'bg-neutral-light border border-neutral-border text-foreground hover:bg-neutral-border'
                  }`}
                >
                  {plan.featured ? 'Get Unlimited' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-surface-white p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-background">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'All Classes, All Locations',
                description: 'Take any class at any of our five locations throughout NYC and East Hampton.'
              },
              {
                title: 'Mats & Towels',
                description: 'All memberships include mat and towel rentals at no extra charge.'
              },
              {
                title: 'Freeze Options',
                description: 'Need a break? Memberships can be frozen twice during the membership period.'
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold mb-2 text-primary-dark">{item.title}</h3>
                <p className="text-sm text-background/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: 'Can I try a class before committing?',
                a: `Yes! Your first class at any Manhattan studio is just ${BRAND.trialPrice}. No strings attached.`
              },
              {
                q: 'Do class packs expire?',
                a: 'Class packs are valid for 6 months from purchase. Unlimited memberships are month-to-month.'
              },
              {
                q: 'Can I use my membership at any location?',
                a: 'Yes, all memberships work at all five iD Hot Yoga locations.'
              },
              {
                q: 'Can I freeze my membership?',
                a: 'Unlimited memberships can be frozen twice during the membership period. Contact our team for details.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-neutral-border p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-sm text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-surface border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-text-secondary mb-6">
            Choose your plan and experience yoga like no other.
          </p>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-3 font-bold hover:bg-accent-light transition"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  )
}
