import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function QASlide() {
  return (
    <Slide className="!bg-transparent gradient-bg">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl font-bold text-white mb-16">Questions?</h1>
      </div>
    </Slide>
  );
}
