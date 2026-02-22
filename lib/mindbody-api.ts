// MindBody API wrapper for class schedule and booking integration
// This would be replaced with actual MindBody API calls once credentials are configured

export interface Class {
  id: string
  name: string
  instructor: string
  startTime: string
  endTime: string
  location: string
  type: string
  capacity: number
  enrolled: number
}

export interface Schedule {
  date: string
  classes: Class[]
}

// Mock data for demonstration
const MOCK_SCHEDULE: Record<string, Class[]> = {
  'les': [
    {
      id: '1',
      name: 'Hot Vinyasa',
      instructor: 'Sarah',
      startTime: '06:00',
      endTime: '07:00',
      location: 'Lower East Side',
      type: 'Vinyasa',
      capacity: 25,
      enrolled: 18,
    },
    {
      id: '2',
      name: 'Gentle Heat',
      instructor: 'Michael',
      startTime: '09:00',
      endTime: '10:00',
      location: 'Lower East Side',
      type: 'Gentle',
      capacity: 30,
      enrolled: 12,
    },
    {
      id: '3',
      name: 'Power Flow',
      instructor: 'Jessica',
      startTime: '12:00',
      endTime: '13:15',
      location: 'Lower East Side',
      type: 'Power',
      capacity: 20,
      enrolled: 20,
    },
    {
      id: '4',
      name: 'Restorative',
      instructor: 'Emma',
      startTime: '18:00',
      endTime: '19:00',
      location: 'Lower East Side',
      type: 'Restorative',
      capacity: 25,
      enrolled: 15,
    },
    {
      id: '5',
      name: 'Hot Vinyasa',
      instructor: 'David',
      startTime: '19:30',
      endTime: '20:30',
      location: 'Lower East Side',
      type: 'Vinyasa',
      capacity: 25,
      enrolled: 22,
    },
  ],
  'nomad': [
    {
      id: '6',
      name: 'Gentle Heat',
      instructor: 'Lauren',
      startTime: '06:30',
      endTime: '07:30',
      location: 'NoMad',
      type: 'Gentle',
      capacity: 28,
      enrolled: 10,
    },
    {
      id: '7',
      name: 'Yin Yang',
      instructor: 'Marcus',
      startTime: '10:00',
      endTime: '11:15',
      location: 'NoMad',
      type: 'Yin Yang',
      capacity: 22,
      enrolled: 22,
    },
    {
      id: '8',
      name: 'Power Flow',
      instructor: 'Angela',
      startTime: '17:00',
      endTime: '18:15',
      location: 'NoMad',
      type: 'Power',
      capacity: 20,
      enrolled: 18,
    },
  ],
  'fidi': [
    {
      id: '9',
      name: 'Hot Vinyasa',
      instructor: 'Chris',
      startTime: '07:00',
      endTime: '08:00',
      location: 'Financial District',
      type: 'Vinyasa',
      capacity: 25,
      enrolled: 23,
    },
    {
      id: '10',
      name: 'Restorative',
      instructor: 'Nina',
      startTime: '12:00',
      endTime: '13:00',
      location: 'Financial District',
      type: 'Restorative',
      capacity: 20,
      enrolled: 8,
    },
  ],
  'harlem': [
    {
      id: '11',
      name: 'Gentle Heat',
      instructor: 'Priya',
      startTime: '08:00',
      endTime: '09:00',
      location: 'Harlem',
      type: 'Gentle',
      capacity: 30,
      enrolled: 14,
    },
    {
      id: '12',
      name: 'Power Flow',
      instructor: 'James',
      startTime: '18:00',
      endTime: '19:15',
      location: 'Harlem',
      type: 'Power',
      capacity: 20,
      enrolled: 19,
    },
  ],
  'east-hampton': [
    {
      id: '13',
      name: 'Hot Vinyasa',
      instructor: 'Rebecca',
      startTime: '07:30',
      endTime: '08:30',
      location: 'East Hampton',
      type: 'Vinyasa',
      capacity: 25,
      enrolled: 16,
    },
    {
      id: '14',
      name: 'Gentle Heat',
      instructor: 'Thomas',
      startTime: '10:00',
      endTime: '11:00',
      location: 'East Hampton',
      type: 'Gentle',
      capacity: 30,
      enrolled: 20,
    },
  ],
}

export async function getSchedule(locationId?: string): Promise<Class[]> {
  // TODO: Replace with actual MindBody API call
  // const response = await fetch('https://mindbody.io/api/schedule', {
  //   headers: { Authorization: `Bearer ${process.env.MINDBODY_API_KEY}` }
  // })

  // For now, return mock data
  if (locationId && MOCK_SCHEDULE[locationId]) {
    return MOCK_SCHEDULE[locationId]
  }

  // Return all classes from all locations
  return Object.values(MOCK_SCHEDULE).flat()
}

export function getBookingUrl(): string {
  // This should link to your MindBody booking page
  return 'https://mindbody.io/book'
}
