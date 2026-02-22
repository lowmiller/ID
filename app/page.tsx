import Link from 'next/link'
import { BRAND, CLASS_TYPES } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Transform Your Practice
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            {BRAND.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mindbody.io/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
            >
              Book Your First Class
            </a>
            <Link
              href="/schedule"
              className="bg-white text-primary px-8 py-3 rounded font-sans font-bold hover:bg-neutral-light transition"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Our Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CLASS_TYPES.map((cls) => (
              <div
                key={cls.name}
                className="bg-white border border-neutral-border p-6 rounded hover:shadow-lg transition"
              >
                <h3 className="font-serif text-lg font-bold mb-2">
                  {cls.name}
                </h3>
                <div className="space-y-1 text-sm font-sans text-text-secondary">
                  <p>Level: {cls.difficulty}</p>
                  <p>Duration: {cls.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose ID Hot Yoga?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Certified instructors with years of experience in transformative hot yoga practice.'
              },
              {
                title: '5 Convenient Locations',
                description: 'Studios across NYC and East Hampton, making it easy to practice wherever you are.'
              },
              {
                title: 'All Levels Welcome',
                description: 'From beginners to advanced practitioners, we have classes tailored for everyone.'
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="font-sans text-lg text-white/90 mb-8">
            Join our community of practitioners and discover the power of heat.
          </p>
          <a
            href="https://mindbody.io/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded font-sans font-bold hover:bg-accent-light transition inline-block"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  )
}
