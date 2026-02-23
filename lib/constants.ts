export const BRAND = {
  name: 'iD Hot Yoga',
  tagline: 'hot LIKE NO OTHER',
  description: 'NYC & East Hampton\'s top hot yoga studios. A yoga experience like no other.',
  instagramHandle: '@id.hotyoga',
  instagramUrl: 'https://instagram.com/id.hotyoga',
  phone: '(212) 353-8859',
  email: 'info@idhotyoga.com',
  bookingUrl: 'https://clients.mindbodyonline.com/classic/ws?studioid=622897',
  trialPrice: '$25',
}

export const LOCATIONS = [
  {
    id: 'les',
    name: 'Lower East Side',
    shortName: 'LES',
    slug: 'lower-east-side',
    address: '172 Allen St, 2nd Floor, New York, NY 10002',
    shortAddress: '172 Allen St, 2nd Floor',
    phone: '(212) 353-8859',
    hours: 'Mon-Sun: 6am-9pm',
    coordinates: { lat: 40.7225, lng: -73.9898 },
    mapUrl: 'https://maps.google.com/?q=172+Allen+St+New+York+NY+10002',
    image: '/pricing-bg.jpg',
  },
  {
    id: 'nomad',
    name: 'NoMad',
    shortName: 'NoMad',
    slug: 'nomad',
    address: '284 5th Ave, Floor 2, New York, NY 10001',
    shortAddress: '284 5th Ave, 2nd Floor',
    phone: '(917) 409-3730',
    hours: 'Mon-Sun: 6am-9pm',
    coordinates: { lat: 40.7462, lng: -73.9875 },
    mapUrl: 'https://maps.google.com/?q=284+5th+Ave+New+York+NY+10001',
    image: '/pricing-bg.jpg',
  },
  {
    id: 'fidi',
    name: 'Financial District',
    shortName: 'FiDi',
    slug: 'financial-district',
    address: '121 Fulton St, Fl-3, New York, NY 10038',
    shortAddress: '121 Fulton St, 3rd Floor',
    phone: '(646) 559-1717',
    hours: 'Mon-Thu: 6am-10pm, Fri: 6am-8pm, Sat-Sun: 9am-6pm',
    coordinates: { lat: 40.7094, lng: -74.0055 },
    mapUrl: 'https://maps.google.com/?q=121+Fulton+St+New+York+NY+10038',
    image: '/pricing-bg.jpg',
  },
  {
    id: 'harlem',
    name: 'Harlem',
    shortName: 'Harlem',
    slug: 'harlem',
    address: '518 W 145th St, Fl 2, New York, NY 10031',
    shortAddress: '518 W 145th St, 2nd Floor',
    phone: '(917) 675-6798',
    hours: 'Mon-Thu: 6:30am-9:30pm, Fri: 6:30am-7:30pm, Sat-Sun: 9:30am-5:30pm',
    coordinates: { lat: 40.8245, lng: -73.9480 },
    mapUrl: 'https://maps.google.com/?q=518+W+145th+St+New+York+NY+10031',
    image: '/pricing-bg.jpg',
  },
  {
    id: 'east-hampton',
    name: 'East Hampton',
    shortName: 'East Hampton',
    slug: 'east-hampton',
    address: '3 Railroad Ave, East Hampton, NY 11937',
    shortAddress: '3 Railroad Ave',
    phone: '(212) 353-8859',
    hours: 'Mon-Sun: 7am-8pm',
    coordinates: { lat: 40.9634, lng: -72.1848 },
    mapUrl: 'https://maps.google.com/?q=3+Railroad+Ave+East+Hampton+NY+11937',
    image: '/pricing-bg.jpg',
  },
]

export const PRICING = {
  trial: { price: '$25', description: 'First class at any Manhattan studio' },
  plans: [
    { name: 'Drop-In', price: '$40', perClass: '$40', description: 'Single class pass' },
    { name: '5-Pack', price: '$175', perClass: '$35', description: '5 classes, 6-month expiry' },
    { name: 'Unlimited', price: '$169', perClass: null, description: 'Per month, all locations', featured: true },
  ],
}

export const CLASS_TYPES = [
  { name: 'Hot Flow', tag: 'hot-flow', color: 'flow', difficulty: 'All Levels', duration: '60 min' },
  { name: '26&2', tag: '26-2', color: 'hot', difficulty: 'All Levels', duration: '90 min' },
  { name: 'Hot Pilates', tag: 'pilates', color: 'pilates', difficulty: 'All Levels', duration: '60 min' },
  { name: 'Yin', tag: 'yin', color: 'yin', difficulty: 'All Levels', duration: '75 min' },
  { name: 'HIIT', tag: 'hiit', color: 'hiit', difficulty: 'Intermediate', duration: '60 min' },
  { name: 'Restorative', tag: 'restorative', color: 'yin', difficulty: 'Beginner', duration: '60 min' },
]

export const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  hot: { bg: 'rgba(255,90,60,0.12)', text: '#ff6b4a' },
  flow: { bg: 'rgba(100,160,255,0.1)', text: '#7ab0ff' },
  pilates: { bg: 'rgba(160,100,255,0.1)', text: '#b07aff' },
  yin: { bg: 'rgba(100,200,160,0.1)', text: '#7acfaa' },
  hiit: { bg: 'rgba(255,160,60,0.1)', text: '#ffad4a' },
  beginner: { bg: 'rgba(232,201,122,0.1)', text: '#e8c97a' },
}

export const STATS = [
  { value: '5', label: 'NYC studios' },
  { value: '40+', label: 'weekly classes' },
  { value: '4.8/5', label: 'avg. rating' },
]
