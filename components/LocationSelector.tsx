'use client'

import { useState, useEffect } from 'react'
import { LOCATIONS } from '@/lib/constants'
import Link from 'next/link'

export default function LocationSelector() {
  const [selectedId, setSelectedId] = useState<string>(LOCATIONS[0].id)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude
          let nearest = LOCATIONS[0]
          let minDist = Infinity
          LOCATIONS.forEach((loc) => {
            const d = haversine(userLat, userLng, loc.coordinates.lat, loc.coordinates.lng)
            if (d < minDist) { minDist = d; nearest = loc }
          })
          setSelectedId(nearest.id)
        },
        () => setSelectedId(LOCATIONS[0].id)
      )
    }
  }, [])

  return (
    <div className="bg-surface border border-neutral-border overflow-hidden">
      <div className="px-4 py-3.5 text-[13px] font-bold uppercase tracking-wider text-text-secondary border-b border-neutral-border">
        Choose Your Studio
      </div>
      {LOCATIONS.map((loc, i) => {
        const isSelected = loc.id === selectedId
        return (
          <Link
            key={loc.id}
            href={`/locations/${loc.slug}`}
            onClick={() => setSelectedId(loc.id)}
            className={`flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-neutral-light/50 ${
              i < LOCATIONS.length - 1 ? 'border-b border-neutral-border/50' : ''
            }`}
          >
            <div className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold flex-shrink-0 border ${
              isSelected
                ? 'bg-primary/10 border-primary/30 text-primary'
                : 'bg-neutral-light border-neutral-border text-text-secondary'
            }`}>
              {loc.shortName.slice(0, 3)}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-semibold ${isSelected ? 'text-primary' : ''}`}>{loc.name}</div>
              <div className="text-[11px] text-text-secondary">{loc.shortAddress}</div>
            </div>
            {isSelected && <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
          </Link>
        )
      })}
    </div>
  )
}

function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
