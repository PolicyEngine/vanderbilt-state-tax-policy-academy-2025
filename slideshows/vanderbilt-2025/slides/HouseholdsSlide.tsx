import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function HouseholdsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We build our dataset from survey microdata</SlideTitle>
        </SlideHeader>

        <div className="space-y-8 text-left px-12 py-6">
          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Current Population Survey (CPS)</strong> provides detailed income, employment, and demographic data for 200,000+ individuals</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Enhanced microdata</strong> through imputation and calibration to match administrative totals for SNAP, SSI, and other programs</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>State-level analysis</strong> enabled by geographic identifiers and state-specific policy parameters</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Reweighting and calibration</strong> using machine learning to match population targets and program participation</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
