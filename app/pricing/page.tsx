import { PRICING } from '@/lib/constants'

export const metadata = {
  title: 'Pricing & Memberships | ID Hot Yoga',
  description: 'Flexible pricing options for all levels of practice at ID Hot Yoga.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Flexible Pricing for Your Practice
          </h1>
          <p className="font-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your schedule and goals.
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Monthly Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING.monthly.map((plan) => (
              <div
                key={plan.sessions}
                className="bg-white border border-neutral-border p-8 rounded hover:shadow-lg transition flex flex-col"
              >
                <div className="mb-6">
                  <div className="text-3xl font-serif font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="font-sans font-medium text-foreground">{plan.sessions}</p>
                </div>

                <p className="font-sans text-sm text-text-secondary mb-6 flex-grow">
                  {plan.description}
                </p>

                <a
                  href="https://mindbody.io/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white px-6 py-2 rounded text-center font-sans font-medium hover:bg-primary-dark transition"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Plans */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Save with Annual</h2>
          <div className="max-w-md mx-auto">
            {PRICING.annual.map((plan) => (
              <div
                key={plan.sessions}
                className="bg-accent border-2 border-accent p-8 rounded text-center"
              >
                <div className="mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-xs font-sans font-bold">
                    BEST VALUE
                  </span>
                </div>
                <div className="text-4xl font-serif font-bold text-black mb-2">
                  {plan.price}
                </div>
                <p className="font-sans font-medium text-black mb-2">{plan.sessions}</p>
                <p className="font-sans text-sm text-black/80 mb-6">
                  {plan.description}
                </p>
                <a
                  href="https://mindbody.io/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-accent px-6 py-2 rounded font-sans font-bold hover:bg-foreground transition inline-block"
                >
                  Unlock Unlimited
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-neutral-light p-12 rounded mb-16">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Access to All Classes',
                description: 'Take any class at any of our five locations throughout NYC and East Hampton.'
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from our team of certified, experienced hot yoga instructors.'
              },
              {
                title: 'Community',
                description: 'Join a supportive community of practitioners committed to their wellness.'
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: 'Can I try a class before committing?',
                a: 'Yes! Drop-in classes are available for $25. Try us out before signing up for a membership.'
              },
              {
                q: 'Do memberships expire?',
                a: 'Monthly class packs are valid for 30 days. Annual memberships are valid for 12 months from purchase.'
              },
              {
                q: 'Can I use my membership at any location?',
                a: 'Yes, all memberships are valid at all five ID Hot Yoga locations.'
              },
              {
                q: 'What if I need to pause my membership?',
                a: 'Contact our team for options. We offer flexible pause options for annual members.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-border p-6 rounded">
                <h3 className="font-serif font-bold mb-2">{item.q}</h3>
                <p className="font-sans text-sm text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white p-8 rounded text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="font-sans text-white/90 mb-6">
            Choose your plan and start your journey with ID Hot Yoga today.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  )
}
