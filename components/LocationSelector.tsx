'use client'

import { useState, useEffect } from 'react'
import { LOCATIONS } from '@/lib/constants'
import Link from 'next/link'

export default function LocationSelector() {
  const [nearestLocation, setNearestLocation] = useState<string | null>(null)

  useEffect(() => {
    // Attempt to get user's location using browser Geolocation API
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude

          // Find nearest location
          let nearest = LOCATIONS[0]
          let minDistance = calculateDistance(
            userLat,
            userLng,
            nearest.coordinates.lat,
            nearest.coordinates.lng
          )

          LOCATIONS.forEach((loc) => {
            const distance = calculateDistance(
              userLat,
              userLng,
              loc.coordinates.lat,
              loc.coordinates.lng
            )
            if (distance < minDistance) {
              minDistance = distance
              nearest = loc
            }
          })

          setNearestLocation(nearest.id)
        },
        () => {
          // If geolocation fails, default to first location
          setNearestLocation(LOCATIONS[0].id)
        }
      )
    }
  }, [])

  return (
    <div className="bg-primary text-white p-8 rounded">
      <h3 className="font-serif text-xl font-bold mb-4">Find Your Studio</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {LOCATIONS.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.slug}`}
            className={`p-3 rounded text-center text-sm font-sans transition ${
              nearestLocation === location.id
                ? 'bg-accent text-black font-medium'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {location.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}
