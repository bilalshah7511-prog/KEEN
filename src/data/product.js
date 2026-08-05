export const brand = {
  name: 'KEEN',
  logoSrc: '/keen-logo.svg',
  freeShippingThreshold: 125,
  tagline: 'Built Here. Made for Everywhere.',
};

const bisonBlackImages = [
  { src: '/images/keen/gibson-1.jpg', alt: "Men's Gibson Hiker in Bison/Black", showBadge: true },
  { src: '/images/keen/gibson-2.jpg', alt: "Men's Gibson Hiker Bison/Black angle" },
  { src: '/images/keen/gibson-3.jpg', alt: "Men's Gibson Hiker Bison/Black side" },
  { src: '/images/keen/gibson-4.jpg', alt: "Men's Gibson Hiker Bison/Black detail" },
  { src: '/images/keen/gibson-5.jpg', alt: "Men's Gibson Hiker Bison/Black sole" },
  { src: '/images/keen/gibson-6.jpg', alt: "Men's Gibson Hiker Bison/Black lifestyle" },
];

const blackMagnetImages = [
  { src: '/images/keen/black-magnet/gibson-1.jpg', alt: "Men's Gibson Hiker in Black/Magnet", showBadge: true },
  { src: '/images/keen/black-magnet/gibson-2.jpg', alt: "Men's Gibson Hiker Black/Magnet angle" },
  { src: '/images/keen/black-magnet/gibson-3.jpg', alt: "Men's Gibson Hiker Black/Magnet side" },
  { src: '/images/keen/black-magnet/gibson-4.jpg', alt: "Men's Gibson Hiker Black/Magnet detail" },
  { src: '/images/keen/black-magnet/gibson-5.jpg', alt: "Men's Gibson Hiker Black/Magnet sole" },
  { src: '/images/keen/black-magnet/gibson-6.jpg', alt: "Men's Gibson Hiker Black/Magnet lifestyle" },
];

export const product = {
  title: "Men's Gibson Hiker Work Boot (Carbon Toe)",
  subtitle: 'Bison/Black',
  badge: 'Work',
  rating: 5,
  reviewCount: 1280,
  description:
    'Rugged work boot durability with athletic-level comfort. Carbon safety toe, KEEN.ReGEN cushioning, and oil- and slip-resistant outsole — built for all-day jobs.',
  serving: 'Carbon toe · Oil & slip resistant · PFAS free',
  images: bisonBlackImages,
  colors: [
    { id: 'bison-black', label: 'Bison/Black', hex: '#6b4a2e', images: bisonBlackImages },
    { id: 'black-magnet', label: 'Black/Magnet', hex: '#1a1a1a', images: blackMagnetImages },
  ],
  sizes: [
    { id: '7', label: '7', price: 175 },
    { id: '7-5', label: '7.5', price: 175 },
    { id: '8', label: '8', price: 175 },
    { id: '8-5', label: '8.5', price: 175 },
    { id: '9', label: '9', price: 175 },
    { id: '9-5', label: '9.5', price: 175 },
    { id: '10', label: '10', price: 175 },
    { id: '10-5', label: '10.5', price: 175 },
    { id: '11', label: '11', price: 175 },
    { id: '12', label: '12', price: 175 },
  ],
  frequencies: [],
  benefits: [
    'Carbon safety toe (15% lighter than steel)',
    'KEEN.ReGEN cushioning — up to 50% energy return',
    'Oil- and slip-resistant rubber outsole',
    'PFAS free since 2018',
    'Free 30-day fit trial',
  ],
  ingredients: 'Leather and synthetic upper. Carbon fiber safety toe. KEEN.ReGEN midsole.',
  howToUse: 'Wipe clean with a damp cloth. Air dry. Do not machine wash.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'Portland Flagship', address: '17600 SW 65th Ave, Lake Oswego, OR 97035', dist: '0.3 mi' },
  { name: 'NYC Store', address: '120 Broadway, New York, NY 10271', dist: '0.4 mi' },
  { name: 'LA Locker', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.5 mi' },
];

export const timeSlots = ['9am-10am', '10am-11am', '11am-12pm', '1pm-2pm', '2pm-3pm'];

export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
