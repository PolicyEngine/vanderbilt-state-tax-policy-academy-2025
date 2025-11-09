import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function StateEITCSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>State Earned Income Tax Credits</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p>
              31 states and DC have state EITCs, typically calculated as a percentage of the federal EITC
            </p>

            <div className="space-y-4 ml-6">
              <p><strong>Refundable credits:</strong> California (85%), New York (30%), Massachusetts (40%), and others</p>

              <p><strong>Non-refundable credits:</strong> Ohio, Delaware, Virginia</p>

              <p className="text-pe-teal font-semibold pt-2">
                PolicyEngine models all state EITC variations with legislative references
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
