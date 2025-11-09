import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function DynamicsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We model behavioral responses to policy changes</SlideTitle>
        </SlideHeader>

        <div className="space-y-8 text-left px-12 py-6">
          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>PolicyEngine models <strong>labor supply elasticities</strong> to capture behavioral responses to tax and benefit changes</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Intensive and extensive margin responses</strong> account for both hours worked and employment participation decisions</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Income effects</strong> capture how policies affect household income and consumption</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>Follows <strong>Congressional Budget Office elasticity framework</strong> with adjustable parameters for users to customize behavioral assumptions</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
