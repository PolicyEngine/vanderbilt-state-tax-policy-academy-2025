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
  { time: '2:45 PM - 3:30 PM', title: 'Modeling and measuring the impact of state tax policies', speakerIds: ['max-ghenis'], slideshowId: 'vanderbilt-2025', type: 'talk' },
];
