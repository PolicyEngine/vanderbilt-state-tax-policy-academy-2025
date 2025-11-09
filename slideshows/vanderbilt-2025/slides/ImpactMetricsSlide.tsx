import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function ImpactMetricsSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Measuring policy impacts</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">PolicyEngine calculates comprehensive impacts:</p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li><strong>Household resources:</strong> Net income changes by income decile</li>
              <li><strong>Poverty and inequality:</strong> Changes in poverty rate, deep poverty, and Gini coefficient</li>
              <li><strong>Budget impact:</strong> Revenue and spending effects</li>
              <li><strong>Winners and losers:</strong> Distributional analysis across demographics</li>
              <li><strong>Marginal tax rates:</strong> Work incentive effects</li>
            </ul>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
