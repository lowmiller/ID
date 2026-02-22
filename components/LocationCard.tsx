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
    <div className="bg-white border border-neutral-border p-6 rounded hover:shadow-lg transition h-full flex flex-col">
      <h3 className="font-serif text-xl font-bold mb-4">{name}</h3>

      <div className="space-y-3 text-sm font-sans text-text-secondary flex-grow">
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

      <div className="flex gap-2 mt-6">
        <Link
          href={`/schedule/${slug}`}
          className="flex-1 bg-primary text-white px-4 py-2 rounded text-center text-sm font-sans font-medium hover:bg-primary-dark transition"
        >
          View Schedule
        </Link>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-primary text-primary px-4 py-2 rounded text-center text-sm font-sans font-medium hover:bg-primary hover:text-white transition"
        >
          Directions
        </a>
      </div>
    </div>
  )
}
