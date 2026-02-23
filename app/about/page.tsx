import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export const metadata = {
  title: 'About | iD Hot Yoga',
  description: 'Learn about iD Hot Yoga, our mission, and our community.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with B&W yoga photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pricing-bg.jpg"
            alt="Yoga practice at ID Hot Yoga"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 px-5 md:px-8 pt-20 pb-16 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            About {BRAND.name}
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto">
            {BRAND.description}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">
        {/* Our Story — with side images */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Let us re-introduce ourselves. New York&apos;s premier hot yoga studios owned and operated
                by Tricia Donegan and Kelly Isaac, have a new look, new energy &amp; a new commitment to
                creating a hot yoga experience like no other.
              </p>
              <p>
                You are always changing. Your practice should too.
              </p>
              <p>
                At iD Hot Yoga you are not confined to a flow. Classes evolve. Instructors tailor.
                This is a yoga experience designed around you. Because you are like no other.
              </p>
              <p>
                Transformation is inevitable.
              </p>
              <p>
                We look forward to welcoming you to our studios.
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <Image
              src="/about-yoga.jpg"
              alt="Yoga instructor"
              width={280}
              height={420}
              className="object-cover"
            />
            <Image
              src="/about-yoga-2.jpg"
              alt="Yoga instructor"
              width={280}
              height={420}
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 bg-surface-white p-8">
          <h2 className="text-3xl font-bold mb-8 text-background">Our Values</h2>
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
                description: "We\u2019re building more than a studio\u2014we\u2019re creating a supportive network of practitioners."
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-bold mb-3 text-primary-dark">{value.title}</h3>
                <p className="text-sm text-background/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusivity section with real icon */}
        <div className="mb-16 flex items-center gap-6 bg-surface border border-neutral-border p-6">
          <Image
            src="/inclusive-icon.jpg"
            alt="Gender inclusive"
            width={80}
            height={80}
            className="flex-shrink-0"
          />
          <div>
            <h3 className="font-bold mb-2">All Are Welcome</h3>
            <p className="text-sm text-text-secondary">
              At iD Hot Yoga, everyone is welcome to use the locker room that matches their gender identity.
              We are committed to respect and comfort for all.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-surface border border-primary/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-text-secondary mb-6">
            Have questions? We&apos;d love to hear from you.
          </p>
          <div className="space-y-2">
            <p>
              <a href={`tel:${BRAND.phone}`} className="text-primary hover:text-accent-light transition">
                {BRAND.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${BRAND.email}`} className="text-primary hover:text-accent-light transition">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
