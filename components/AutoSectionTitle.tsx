'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import SectionTitleSlide from '@/components/SectionTitleSlide';
import { getSlideshowById } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';

/**
 * Auto-populated section title slide that reads from slideshow config and agenda
 * Just import and use this component at the start of any slideshow
 */
export default function AutoSectionTitle() {
  const params = useParams();
  const slideshowId = params?.slideshow as string;

  const agendaItem = agenda.find(item => item.slideshowId === slideshowId);

  if (!agendaItem) {
    return null;
  }

  return (
    <SectionTitleSlide
      title={agendaItem.title}
      speakerIds={agendaItem.speakerIds}
    />
  );
}
