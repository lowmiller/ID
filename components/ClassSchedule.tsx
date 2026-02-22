import { Class } from '@/lib/mindbody-api'

interface ClassScheduleProps {
  classes: Class[]
}

export default function ClassSchedule({ classes }: ClassScheduleProps) {
  // Group classes by location
  const groupedByLocation = classes.reduce((acc, cls) => {
    if (!acc[cls.location]) {
      acc[cls.location] = []
    }
    acc[cls.location].push(cls)
    return acc
  }, {} as Record<string, Class[]>)

  return (
    <div className="space-y-12">
      {Object.entries(groupedByLocation).map(([location, locationClasses]) => (
        <div key={location}>
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
            {location}
          </h3>
          <div className="grid gap-4">
            {locationClasses.map((cls) => (
              <div
                key={cls.id}
                className="bg-white border border-neutral-border p-6 rounded hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-2">
                      {cls.name}
                    </h4>
                    <div className="space-y-1 text-sm font-sans text-text-secondary">
                      <p>Instructor: {cls.instructor}</p>
                      <p>Time: {cls.startTime} - {cls.endTime}</p>
                      <p>Spots: {cls.capacity - cls.enrolled}/{cls.capacity}</p>
                    </div>
                  </div>
                  <a
                    href="https://mindbody.io/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition font-sans font-medium whitespace-nowrap"
                  >
                    Book Class
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
