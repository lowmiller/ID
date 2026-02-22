export const BRAND = {
  name: 'ID Hot Yoga',
  tagline: 'Transform Your Practice',
  description: 'Experience transformative hot yoga at our five premium studios across New York City. From intense vinyasa flows to restorative sessions, find your balance in heat.',
  instagramHandle: '@fiercegracenyc',
  phone: '(212) 555-0100',
  email: 'info@idhotyoga.com',
}

export const LOCATIONS = [
  {
    id: 'les',
    name: 'Lower East Side',
    slug: 'lower-east-side',
    address: '123 Delancey St, New York, NY 10002',
    phone: '(212) 555-0101',
    hours: 'Mon-Sun: 6am-9pm',
    coordinates: { lat: 40.7178, lng: -73.9826 },
    mapUrl: 'https://maps.google.com/?q=123+Delancey+St+New+York+NY+10002',
  },
  {
    id: 'nomad',
    name: 'NoMad',
    slug: 'nomad',
    address: '456 Fifth Ave, New York, NY 10018',
    phone: '(212) 555-0102',
    hours: 'Mon-Sun: 6am-9pm',
    coordinates: { lat: 40.7505, lng: -73.9868 },
    mapUrl: 'https://maps.google.com/?q=456+Fifth+Ave+New+York+NY+10018',
  },
  {
    id: 'fidi',
    name: 'Financial District',
    slug: 'financial-district',
    address: '789 Water St, New York, NY 10038',
    phone: '(212) 555-0103',
    hours: 'Mon-Fri: 6am-9pm, Sat-Sun: 8am-8pm',
    coordinates: { lat: 40.7038, lng: -74.0096 },
    mapUrl: 'https://maps.google.com/?q=789+Water+St+New+York+NY+10038',
  },
  {
    id: 'harlem',
    name: 'Harlem',
    slug: 'harlem',
    address: '321 Lenox Ave, New York, NY 10027',
    phone: '(212) 555-0104',
    hours: 'Mon-Sun: 6am-9pm',
    coordinates: { lat: 40.8139, lng: -73.9626 },
    mapUrl: 'https://maps.google.com/?q=321+Lenox+Ave+New+York+NY+10027',
  },
  {
    id: 'east-hampton',
    name: 'East Hampton',
    slug: 'east-hampton',
    address: '654 Main St, East Hampton, NY 11937',
    phone: '(631) 555-0105',
    hours: 'Mon-Sun: 7am-8pm',
    coordinates: { lat: 40.9627, lng: -72.2166 },
    mapUrl: 'https://maps.google.com/?q=654+Main+St+East+Hampton+NY+11937',
  },
]

export const PRICING = {
  monthly: [
    { sessions: 'Unlimited', price: '$199', description: 'Full access to all classes' },
    { sessions: '8 classes', price: '$129', description: 'Valid for 30 days' },
    { sessions: '4 classes', price: '$89', description: 'Valid for 30 days' },
    { sessions: 'Drop-in', price: '$25', description: 'Single class pass' },
  ],
  annual: [
    { sessions: 'Unlimited', price: '$1,899', description: 'Full access, save $489/year' },
  ],
}

export const CLASS_TYPES = [
  { name: 'Hot Vinyasa', difficulty: 'Intermediate', duration: '60 min' },
  { name: 'Gentle Heat', difficulty: 'Beginner', duration: '60 min' },
  { name: 'Power Flow', difficulty: 'Advanced', duration: '75 min' },
  { name: 'Yin Yang', difficulty: 'Intermediate', duration: '75 min' },
  { name: 'Restorative', difficulty: 'Beginner', duration: '60 min' },
]
