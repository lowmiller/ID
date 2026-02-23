'use client'

const REVIEWS = [
  { name: 'Sarah M.', text: 'The heat, the energy, the instructors — everything about iD is next level. I leave every class feeling transformed.', rating: 5, location: 'Lower East Side' },
  { name: 'James T.', text: 'Best hot yoga in NYC, hands down. The instructors really tailor the class to everyone in the room.', rating: 5, location: 'NoMad' },
  { name: 'Priya K.', text: 'I\'ve been practicing for 10 years and iD is the only studio where I still feel challenged and inspired.', rating: 5, location: 'Financial District' },
  { name: 'Mike R.', text: 'The 26&2 class changed my life. Incredible studio, welcoming community, and the best teachers in the city.', rating: 5, location: 'Harlem' },
  { name: 'Lauren B.', text: 'From my very first class I felt at home. The trial deal is unbeatable — just go try it.', rating: 5, location: 'Lower East Side' },
  { name: 'David C.', text: 'Clean studios, amazing heat system, and classes that actually evolve. Not your average yoga chain.', rating: 5, location: 'East Hampton' },
]

function Star() {
  return (
    <svg className="w-3.5 h-3.5 text-primary-dark fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function ReviewCarousel() {
  return (
    <div className="flex gap-2.5 overflow-x-auto px-5 pb-3.5 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {REVIEWS.map((review) => (
        <div key={review.name} className="min-w-[260px] flex-shrink-0 bg-white border border-black/10 p-4">
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-sm text-background/70 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
          <div className="text-xs font-bold text-background mt-2">{review.name}</div>
          <div className="text-xs text-background/50">{review.location}</div>
        </div>
      ))}
    </div>
  )
}
