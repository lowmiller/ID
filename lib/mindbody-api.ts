// MindBody API wrapper for class schedule and booking integration
// This would be replaced with actual MindBody API calls once credentials are configured

export interface Class {
  id: string
  name: string
  instructor: string
  startTime: string
  endTime: string
  location: string
  locationId: string
  type: string
  duration: string
  capacity: number
  enrolled: number
}

export interface Schedule {
  date: string
  classes: Class[]
}

// Mock data for demonstration — class types match ID Hot Yoga's real offerings
const MOCK_SCHEDULE: Record<string, Class[]> = {
  'les': [
    {
      id: '1',
      name: 'Hot Flow',
      instructor: 'Tricia D.',
      startTime: '06:00',
      endTime: '07:00',
      location: 'Lower East Side',
      locationId: 'les',
      type: 'flow',
      duration: '60 min',
      capacity: 25,
      enrolled: 13,
    },
    {
      id: '2',
      name: 'Fierce Grace 26&2',
      instructor: 'Kelly I.',
      startTime: '07:30',
      endTime: '09:00',
      location: 'Lower East Side',
      locationId: 'les',
      type: 'hot',
      duration: '90 min',
      capacity: 28,
      enrolled: 24,
    },
    {
      id: '3',
      name: 'Slowburn Hot Pilates',
      instructor: 'Maya R.',
      startTime: '09:15',
      endTime: '10:15',
      location: 'Lower East Side',
      locationId: 'les',
      type: 'pilates',
      duration: '60 min',
      capacity: 22,
      enrolled: 19,
    },
    {
      id: '4',
      name: 'Hot HIIT',
      instructor: 'Jordan S.',
      startTime: '12:00',
      endTime: '13:00',
      location: 'Lower East Side',
      locationId: 'les',
      type: 'hiit',
      duration: '60 min',
      capacity: 20,
      enrolled: 20,
    },
    {
      id: '5',
      name: 'Yin & Restore',
      instructor: 'Anita L.',
      startTime: '17:30',
      endTime: '18:45',
      location: 'Lower East Side',
      locationId: 'les',
      type: 'yin',
      duration: '75 min',
      capacity: 25,
      enrolled: 7,
    },
  ],
  'nomad': [
    {
      id: '6',
      name: 'Hot Flow',
      instructor: 'Lauren M.',
      startTime: '06:30',
      endTime: '07:30',
      location: 'NoMad',
      locationId: 'nomad',
      type: 'flow',
      duration: '60 min',
      capacity: 28,
      enrolled: 10,
    },
    {
      id: '7',
      name: 'Fierce Grace 26&2',
      instructor: 'Marcus K.',
      startTime: '10:00',
      endTime: '11:30',
      location: 'NoMad',
      locationId: 'nomad',
      type: 'hot',
      duration: '90 min',
      capacity: 22,
      enrolled: 22,
    },
    {
      id: '8',
      name: 'Hot HIIT',
      instructor: 'Angela W.',
      startTime: '17:00',
      endTime: '18:00',
      location: 'NoMad',
      locationId: 'nomad',
      type: 'hiit',
      duration: '60 min',
      capacity: 20,
      enrolled: 18,
    },
  ],
  'fidi': [
    {
      id: '9',
      name: 'Hot Flow',
      instructor: 'Chris B.',
      startTime: '07:00',
      endTime: '08:00',
      location: 'Financial District',
      locationId: 'fidi',
      type: 'flow',
      duration: '60 min',
      capacity: 25,
      enrolled: 23,
    },
    {
      id: '10',
      name: 'Yin & Restore',
      instructor: 'Nina P.',
      startTime: '12:00',
      endTime: '13:15',
      location: 'Financial District',
      locationId: 'fidi',
      type: 'yin',
      duration: '75 min',
      capacity: 20,
      enrolled: 8,
    },
  ],
  'harlem': [
    {
      id: '11',
      name: 'Hot Flow',
      instructor: 'Priya S.',
      startTime: '08:00',
      endTime: '09:00',
      location: 'Harlem',
      locationId: 'harlem',
      type: 'flow',
      duration: '60 min',
      capacity: 30,
      enrolled: 14,
    },
    {
      id: '12',
      name: 'Slowburn Hot Pilates',
      instructor: 'James T.',
      startTime: '18:00',
      endTime: '19:00',
      location: 'Harlem',
      locationId: 'harlem',
      type: 'pilates',
      duration: '60 min',
      capacity: 20,
      enrolled: 19,
    },
  ],
  'east-hampton': [
    {
      id: '13',
      name: 'Hot Flow',
      instructor: 'Rebecca L.',
      startTime: '07:30',
      endTime: '08:30',
      location: 'East Hampton',
      locationId: 'east-hampton',
      type: 'flow',
      duration: '60 min',
      capacity: 25,
      enrolled: 16,
    },
    {
      id: '14',
      name: 'Yin & Restore',
      instructor: 'Thomas H.',
      startTime: '10:00',
      endTime: '11:15',
      location: 'East Hampton',
      locationId: 'east-hampton',
      type: 'yin',
      duration: '75 min',
      capacity: 30,
      enrolled: 20,
    },
  ],
}

export async function getSchedule(locationId?: string): Promise<Class[]> {
  // TODO: Replace with actual MindBody API call
  if (locationId && MOCK_SCHEDULE[locationId]) {
    return MOCK_SCHEDULE[locationId]
  }
  return Object.values(MOCK_SCHEDULE).flat()
}

export function getBookingUrl(): string {
  return 'https://clients.mindbodyonline.com/classic/ws?studioid=622897'
}
