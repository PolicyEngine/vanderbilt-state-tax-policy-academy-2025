import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function WhatIsPolicyEngineSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What is PolicyEngine?</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p>
              A free, open-source platform for computing the impact of public policy
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Calculate tax and benefit eligibility and amounts</li>
              <li>Model federal and state policy reforms</li>
              <li>Analyze household-level and population-wide impacts</li>
              <li>Measure effects on poverty, inequality, and budgets</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-4">
              Available for the US, UK, Canada, and more
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
