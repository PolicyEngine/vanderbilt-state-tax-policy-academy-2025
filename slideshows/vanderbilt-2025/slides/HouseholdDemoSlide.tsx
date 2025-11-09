import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function HouseholdDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo 1: Household impact calculator</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Calculate how policies affect a specific household
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Enter household characteristics (income, family size, location, etc.)</li>
              <li>See current tax liabilities and benefit eligibility</li>
              <li>Model a policy change (e.g., state EITC increase)</li>
              <li>View net income change and breakdown by program</li>
              <li>Explore marginal tax rates and benefit cliffs</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-2">
              policyengine.org/us/household
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
