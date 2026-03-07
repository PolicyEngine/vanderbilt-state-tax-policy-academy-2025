import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { colors } from '@policyengine/design-system/tokens';

export default function ThreeIngredientsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We combine three ingredients</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center gap-12 mt-20">
          <div style={{ backgroundColor: colors.primary[500], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Policies</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[600], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Dynamics</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[700], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Households</h2>
          </div>
        </div>
      </div>
    </Slide>
  );
}
