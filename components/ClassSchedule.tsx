import { Class } from '@/lib/mindbody-api'
import { BRAND } from '@/lib/constants'

interface ClassScheduleProps {
  classes: Class[]
  showLocation?: boolean
}

function formatTime(time: string) {
  const [h, m] = time.split(':').map(Number)
  const hour = h % 12 || 12
  const ampm = h < 12 ? 'AM' : 'PM'
  return { hour: `${hour}:${m.toString().padStart(2, '0')}`, ampm }
}

function spotsInfo(capacity: number, enrolled: number) {
  const spots = capacity - enrolled
  if (spots <= 0) return { label: 'Full', color: 'spots-red' }
  if (spots <= 6) return { label: `${spots} spots`, color: 'spots-amber' }
  return { label: `${spots} spots`, color: 'spots-green' }
}

const spotStyles = {
  'spots-green': 'bg-[rgba(50,200,100,0.1)] text-[#4cd97a]',
  'spots-amber': 'bg-[rgba(255,180,50,0.1)] text-[#ffb83c]',
  'spots-red': 'bg-[rgba(255,80,80,0.1)] text-[#ff6b6b]',
}

export default function ClassSchedule({ classes, showLocation = false }: ClassScheduleProps) {
  // Optionally group by location
  const grouped = showLocation
    ? classes.reduce((acc, cls) => {
        if (!acc[cls.location]) acc[cls.location] = []
        acc[cls.location].push(cls)
        return acc
      }, {} as Record<string, Class[]>)
    : { '': classes }

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([location, locationClasses]) => (
        <div key={location}>
          {showLocation && location && (
            <h3 className="text-lg font-bold mb-4 text-primary px-5">
              {location}
            </h3>
          )}
          <div className="flex flex-col gap-2.5 px-5">
            {locationClasses.map((cls) => {
              const start = formatTime(cls.startTime)
              const spots = spotsInfo(cls.capacity, cls.enrolled)
              const isFull = spots.label === 'Full'
              return (
                <div
                  key={cls.id}
                  className={`bg-surface border p-4 grid grid-cols-[56px_1fr_auto] gap-x-3.5 items-start cursor-pointer transition-colors hover:border-neutral-border/80 ${
                    !isFull && spots.color === 'spots-amber'
                      ? 'border-primary/25'
                      : 'border-neutral-border'
                  }`}
                >
                  {/* Time Column */}
                  <div className="flex flex-col items-center pt-0.5">
                    <span className="text-[17px] font-bold leading-none">{start.hour}</span>
                    <span className="text-[10px] text-text-secondary font-semibold mt-0.5">{start.ampm}</span>
                    <span className="text-[10px] text-text-secondary/60 mt-1.5">{cls.duration}</span>
                  </div>

                  {/* Info Column */}
                  <div className="min-w-0">
                    <div className="text-[15px] font-bold truncate">{cls.name}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      with <span className="text-foreground/70">{cls.instructor}</span>
                    </div>
                  </div>

                  {/* Action Column */}
                  <div className="flex flex-col items-end gap-2 pt-0.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap ${spotStyles[spots.color as keyof typeof spotStyles]}`}>
                      {spots.label}
                    </span>
                    <a
                      href={BRAND.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap ${
                        isFull
                          ? 'bg-neutral-light text-text-secondary'
                          : 'border border-primary text-primary hover:bg-primary hover:text-background transition-colors'
                      }`}
                    >
                      {isFull ? 'Waitlist' : 'Book'}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
