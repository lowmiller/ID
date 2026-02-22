import { BRAND } from '@/lib/constants'

export const metadata = {
  title: 'About ID Hot Yoga',
  description: 'Learn about ID Hot Yoga, our mission, and our community.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            About {BRAND.name}
          </h1>
          <p className="font-sans text-lg text-text-secondary mb-6">
            {BRAND.description}
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 font-sans text-text-secondary leading-relaxed">
            <p>
              ID Hot Yoga was founded with a simple mission: to create spaces where practitioners
              of all levels can experience the transformative power of heat and movement. Our studios
              across New York City and East Hampton represent a commitment to accessibility,
              community, and excellence.
            </p>
            <p>
              In a world that demands constant motion and performance, we believe in the power of
              intentional practice. Our hot yoga classes aren't just about physical fitness—they're
              about creating a sanctuary where you can reconnect with your body, mind, and spirit.
            </p>
            <p>
              From beginners taking their first class to advanced practitioners pushing their
              limits, every person who walks through our doors is part of the ID Hot Yoga family.
              We're proud to serve the NYC and Hamptons communities with expert instruction,
              welcoming spaces, and a genuine commitment to your wellness journey.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 bg-neutral-light p-8 rounded">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Transformation',
                description: 'We believe yoga transforms lives. Our classes are designed to shift your perspective and strengthen your practice.'
              },
              {
                title: 'Inclusivity',
                description: 'Every body, every mind, every spirit is welcome here. We celebrate the diversity of our community.'
              },
              {
                title: 'Excellence',
                description: 'We invest in our instructors, our spaces, and our community to deliver the highest quality experience.'
              },
              {
                title: 'Community',
                description: 'We're building more than a studio—we're creating a supportive network of practitioners.'
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="font-serif text-lg font-bold mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-primary text-white p-8 rounded text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="font-sans text-white/90 mb-6">
            Have questions? We'd love to hear from you.
          </p>
          <div className="space-y-2">
            <p>
              <a href={`tel:${BRAND.phone}`} className="font-sans hover:text-accent transition">
                {BRAND.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${BRAND.email}`} className="font-sans hover:text-accent transition">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
