import Link from 'next/link'

interface LocationCardProps {
  name: string
  slug: string
  address: string
  phone: string
  hours: string
  mapUrl: string
}

export default function LocationCard({
  name,
  slug,
  address,
  phone,
  hours,
  mapUrl,
}: LocationCardProps) {
  return (
    <div className="bg-surface border border-neutral-border p-6 hover:border-neutral-border/80 transition h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4">{name}</h3>

      <div className="space-y-3 text-sm text-text-secondary flex-grow">
        <div>
          <p className="font-medium text-foreground mb-1">Address</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition"
          >
            {address}
          </a>
        </div>

        <div>
          <p className="font-medium text-foreground mb-1">Phone</p>
          <a href={`tel:${phone}`} className="text-primary hover:text-primary-dark transition">
            {phone}
          </a>
        </div>

        <div>
          <p className="font-medium text-foreground mb-1">Hours</p>
          <p>{hours}</p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/schedule/${slug}`}
          className="block bg-primary text-background px-4 py-2 text-center text-sm font-bold hover:bg-accent-light transition"
        >
          View Schedule
        </Link>
      </div>
    </div>
  )
}
