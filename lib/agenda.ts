export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  speakerIds?: string[]; // IDs from the speakers registry
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
  hasQA?: boolean; // Whether to include Q&A slide at end
}

export const agenda: AgendaItem[] = [
  { time: '12:00 PM - 12:30 PM', title: 'Registration, lunch and networking', slideshowId: 'lunch', type: 'networking' },
  { time: '12:30 PM - 12:35 PM', title: 'Welcome and vision', speakerIds: ['max-ghenis'], slideshowId: 'welcome-vision', type: 'talk' },
  { time: '12:35 PM - 12:40 PM', title: 'The Nuffield Foundation\'s vision for evidence-based policy', speakerIds: ['anvar-sarygulov'], slideshowId: 'nuffield-vision', type: 'talk' },
  { time: '12:40 PM - 12:50 PM', title: 'Technology and AI for UK policymaking: The PolicyEngine approach', speakerIds: ['max-ghenis', 'nikhil-woodruff'], slideshowId: 'tech-ai-2025', type: 'talk' },
  { time: '12:50 PM - 1:05 PM', title: 'Scope of the model: Policies, households, and dynamics', speakerIds: ['vahid-ahmadi'], slideshowId: 'model-scope', type: 'talk' },
  { time: '1:05 PM - 1:25 PM', title: 'Localising policy impact: Parliamentary constituencies and local authorities', speakerIds: ['nikhil-woodruff', 'ben-ogorek'], slideshowId: 'local-impact', type: 'talk', hasQA: true },
  { time: '1:25 PM - 1:40 PM', title: 'UX research and design of PolicyEngine v2 platform', speakerIds: ['biniam-gebre', 'masara-myers'], slideshowId: 'ux-design', type: 'talk', hasQA: true },
  { time: '1:40 PM - 2:00 PM', title: 'Live demo: PolicyEngine v2 platform', speakerIds: ['anthony-volk'], slideshowId: 'platform-demo', type: 'demo', hasQA: true },
  { time: '2:00 PM - 2:20 PM', title: 'Tea break and networking', slideshowId: 'tea', type: 'break' },
  { time: '2:20 PM - 2:40 PM', title: "NIESR's use of PolicyEngine in its living standards review", speakerIds: ['max-mosley'], slideshowId: 'niesr-review', type: 'talk', hasQA: true },
  { time: '2:40 PM - 3:00 PM', title: 'Microsimulation of a carbon dividend', speakerIds: ['malcolm-torry'], slideshowId: 'carbon-dividend', type: 'talk', hasQA: true },
  { time: '3:00 PM - 3:20 PM', title: 'VAT analysis with synthetic firm microdata', speakerIds: ['vahid-ahmadi'], slideshowId: 'vat-analysis', type: 'talk', hasQA: true },
  { time: '3:20 PM - 3:40 PM', title: 'PolicyEngine US: Tools for deconstructing complex policies', speakerIds: ['david-trimmer', 'daphne-hansell'], slideshowId: 'policyengine-us', type: 'talk', hasQA: true },
  { time: '3:40 PM - 4:25 PM', title: 'Panel discussion: The future of evidence-based policymaking', speakerIds: ['max-ghenis', 'arun-advani', 'anvar-sarygulov'], slideshowId: 'panel-future', type: 'panel' },
  { time: '4:25 PM - 5:00 PM', title: 'Looking ahead: AI-powered policy analysis', speakerIds: ['max-ghenis', 'nikhil-woodruff'], slideshowId: 'ai-future', type: 'talk', hasQA: true },
  { time: '5:00 PM - 6:00 PM', title: 'Reception and networking', slideshowId: 'reception', type: 'networking' },
];
