export interface Speaker {
  id: string;
  name: string;
  title: string;
  organisation: string;
  headshotUrl?: string; // Add URLs when you have the images
}

export const speakersById: Record<string, Speaker> = {
  'max-ghenis': {
    id: 'max-ghenis',
    name: 'Max Ghenis',
    title: 'Co-founder & CEO',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/max-ghenis.jpg'
  },
  'nikhil-woodruff': {
    id: 'nikhil-woodruff',
    name: 'Nikhil Woodruff',
    title: 'Co-founder & CTO',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/nikhil-woodruff.jpg'
  },
  'vahid-ahmadi': {
    id: 'vahid-ahmadi',
    name: 'Vahid Ahmadi',
    title: 'Research Associate',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/vahid-ahmadi.jpg'
  },
  'anthony-volk': {
    id: 'anthony-volk',
    name: 'Anthony Volk',
    title: 'Software Engineer',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/anthony-volk.jpg'
  },
  'anvar-sarygulov': {
    id: 'anvar-sarygulov',
    name: 'Anvar Sarygulov',
    title: 'Research Grants and Programmes Manager',
    organisation: 'Nuffield Foundation',
    headshotUrl: '/headshots/anvar-sarygulov.jpg'
  },
  'arun-advani': {
    id: 'arun-advani',
    name: 'Arun Advani',
    title: 'Director of CenTax and Professor of Economics',
    organisation: 'University of Warwick',
    headshotUrl: '/headshots/arun-advani.jpg'
  },
  'max-mosley': {
    id: 'max-mosley',
    name: 'Max Mosley',
    title: 'Senior Economist',
    organisation: 'New Economics Foundation',
    headshotUrl: '/headshots/max-mosley.jpg'
  },
  'malcolm-torry': {
    id: 'malcolm-torry',
    name: 'Malcolm Torry',
    title: 'Co-founder and Director Emeritus',
    organisation: 'Citizen\'s Basic Income Trust',
    headshotUrl: '/headshots/malcolm-torry.jpg'
  },
  'biniam-gebre': {
    id: 'biniam-gebre',
    name: 'Biniam Gebre',
    title: 'Co-Founder',
    organisation: 'Citizen Codex',
    headshotUrl: '/headshots/biniam-gebre.jpg'
  },
  'masara-myers': {
    id: 'masara-myers',
    name: 'MaSara Myers',
    title: 'Creative Director',
    organisation: 'Citizen Codex',
    headshotUrl: '/headshots/masara-myers.jpg'
  },
  'david-trimmer': {
    id: 'david-trimmer',
    name: 'David Trimmer',
    title: 'Policy Research Fellow',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/david-trimmer.jpg'
  },
  'pavel-makarchuk': {
    id: 'pavel-makarchuk',
    name: 'Pavel Makarchuk',
    title: 'Policy Modelling Manager',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/pavel-makarchuk.jpg'
  },
  'daphne-hansell': {
    id: 'daphne-hansell',
    name: 'Daphne Hansell',
    title: 'Research Analyst',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/daphne-hansell.jpg'
  },
  'ben-ogorek': {
    id: 'ben-ogorek',
    name: 'Ben Ogorek',
    title: 'Data Scientist',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/ben-ogorek.jpg'
  }
};

// For backwards compatibility
export const speakers: Record<string, Speaker> = {
  maxGhenis: {
    id: 'max-ghenis',
    name: 'Max Ghenis',
    title: 'Co-founder & CEO',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/max-ghenis.jpg' // Update with actual image
  },
  nikhilWoodruff: {
    id: 'nikhil-woodruff',
    name: 'Nikhil Woodruff',
    title: 'Co-founder & CTO',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/nikhil-woodruff.jpg' // Update with actual image
  },
  vahidAhmadi: {
    id: 'vahid-ahmadi',
    name: 'Vahid Ahmadi',
    title: 'Research Associate',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/vahid-ahmadi.jpg' // Update with actual image
  },
  anthonyVolk: {
    id: 'anthony-volk',
    name: 'Anthony Volk',
    title: 'Software Engineer',
    organisation: 'PolicyEngine',
    headshotUrl: '/headshots/anthony-volk.jpg' // Update with actual image
  },
  anvarSarygulov: {
    id: 'anvar-sarygulov',
    name: 'Anvar Sarygulov',
    title: 'Research Grants and Programmes Manager',
    organisation: 'Nuffield Foundation',
    headshotUrl: '/headshots/anvar-sarygulov.jpg' // Update with actual image
  },
  arunAdvani: {
    id: 'arun-advani',
    name: 'Arun Advani',
    title: 'Director of CenTax and Professor of Economics',
    organisation: 'University of Warwick',
    headshotUrl: '/headshots/arun-advani.jpg' // Update with actual image
  },
  maxMosley: {
    id: 'max-mosley',
    name: 'Max Mosley',
    title: 'Senior Economist',
    organisation: 'New Economics Foundation',
    headshotUrl: '/headshots/max-mosley.jpg' // Update with actual image
  },
  malcolmTorry: {
    id: 'malcolm-torry',
    name: 'Malcolm Torry',
    title: 'Co-founder and Director Emeritus',
    organisation: 'Citizen\'s Basic Income Trust',
    headshotUrl: '/headshots/malcolm-torry.jpg'
  },
  biniamGebre: {
    id: 'biniam-gebre',
    name: 'Biniam Gebre',
    title: 'Co-Founder',
    organisation: 'Citizen Codex',
    headshotUrl: '/headshots/biniam-gebre.jpg' // Update with actual image
  },
  masaraMyers: {
    id: 'masara-myers',
    name: 'MaSara Myers',
    title: 'Creative Director',
    organisation: 'Citizen Codex',
    headshotUrl: '/headshots/masara-myers.jpg' // Update with actual image
  }
};

export function getSpeakerById(id: string): Speaker | undefined {
  return speakersById[id];
}

export function getSpeakersByIds(ids: string[]): Speaker[] {
  return ids.map(id => speakersById[id]).filter(Boolean);
}