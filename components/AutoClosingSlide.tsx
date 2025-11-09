'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import { agenda } from '@/lib/agenda';

/**
 * Auto-closing slide that shows "Questions?" or "Thank you" based on hasQA
 */
export default function AutoClosingSlide() {
  const params = useParams();
  const slideshowId = params?.slideshow as string;
  const agendaItem = agenda.find(item => item.slideshowId === slideshowId);

  const title = agendaItem?.hasQA ? 'Questions?' : 'Thank you';

  return (
    <Slide className="!bg-transparent gradient-bg" showFooter={true}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl font-bold text-white">{title}</h1>
      </div>
    </Slide>
  );
}
