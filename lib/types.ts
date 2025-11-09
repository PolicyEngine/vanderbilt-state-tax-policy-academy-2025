import { ComponentType } from 'react';

export interface SlideshowConfig {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  slides: ComponentType[];
}

export interface SlideshowMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  slideCount: number;
}
