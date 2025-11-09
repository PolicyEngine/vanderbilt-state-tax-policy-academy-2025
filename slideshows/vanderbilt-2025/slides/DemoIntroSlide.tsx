import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function DemoIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Hands-on demonstration</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="text-3xl font-semibold text-pe-teal">
              Let's explore PolicyEngine.org
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Calculate household impacts of tax policy changes</li>
              <li>Model a state EITC expansion</li>
              <li>Analyze population-wide poverty and inequality effects</li>
              <li>Compare different policy design choices</li>
            </ul>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
