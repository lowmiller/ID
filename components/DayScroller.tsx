'use client'

import { useState } from 'react'

function getDays() {
  const days: { name: string; num: number; date: Date }[] = []
  const today = new Date()
  for (let i = -1; i < 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push({
      name: d.toLocaleDateString('en-US', { weekday: 'short' }),
      num: d.getDate(),
      date: d,
    })
  }
  return days
}

export default function DayScroller() {
  const days = getDays()
  const [activeIndex, setActiveIndex] = useState(1) // today

  return (
    <div className="flex gap-2 overflow-x-auto px-5 pb-3.5 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {days.map((day, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`flex flex-col items-center gap-0.5 px-3 py-2 min-w-[48px] flex-shrink-0 border transition-colors ${
            i === activeIndex
              ? 'bg-primary border-primary'
              : 'bg-neutral-light border-neutral-border'
          }`}
        >
          <span className={`text-[10px] font-semibold uppercase tracking-wide ${
            i === activeIndex ? 'text-background/50' : 'text-text-secondary'
          }`}>
            {day.name}
          </span>
          <span className={`text-base font-bold ${
            i === activeIndex ? 'text-background' : 'text-foreground'
          }`}>
            {day.num}
          </span>
        </button>
      ))}
    </div>
  )
}
