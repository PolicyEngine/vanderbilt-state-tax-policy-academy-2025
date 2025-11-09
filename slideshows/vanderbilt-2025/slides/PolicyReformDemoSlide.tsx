import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function PolicyReformDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo 2: State policy reform analysis</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Example: Expanding a state EITC from 10% to 20% of federal
            </p>

            <div className="space-y-4 ml-6">
              <p><strong>Population impacts:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Poverty and deep poverty rate changes</li>
                <li>Gini coefficient (income inequality)</li>
                <li>Net income by income decile</li>
                <li>Winners, losers, and unaffected households</li>
              </ul>

              <p className="pt-2"><strong>Budget impact:</strong> Revenue cost to state</p>
            </div>

            <p className="text-pe-teal font-semibold pt-2">
              policyengine.org/us/policy
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
