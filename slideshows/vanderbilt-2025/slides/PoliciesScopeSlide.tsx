import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function PoliciesScopeSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We model federal and state tax and benefit policies</SlideTitle>
        </SlideHeader>

        <div className="space-y-8 text-left px-12 py-6">
          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>PolicyEngine US models <strong>federal taxes</strong> including income tax, payroll tax, and capital gains tax</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>State income taxes</strong> for all 50 states and DC, including state earned income tax credits (EITCs) and child tax credits (CTCs)</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Child and dependent care tax credits</strong> at both federal and state levels, including refundable and non-refundable variants</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Federal benefits</strong> including SNAP, SSI, TANF, WIC, and housing assistance</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>All models are validated against <strong>legislative references</strong> and IRS documentation, verified through <strong>thousands of unit tests</strong></p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
