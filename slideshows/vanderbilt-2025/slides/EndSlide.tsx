import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-12">
        <SlideTitle isEnd>Thank you</SlideTitle>
        <div className="text-2xl text-white space-y-6 text-center">
          <p className="text-3xl font-medium">Questions?</p>
          <div className="space-y-2">
            <p>PolicyEngine.org</p>
            <p>max@policyengine.org</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
