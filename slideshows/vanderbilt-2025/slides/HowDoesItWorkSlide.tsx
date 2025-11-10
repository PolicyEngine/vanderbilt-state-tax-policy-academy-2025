import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function HowDoesItWorkSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>How does it work?</SlideTitle>
        </SlideHeader>

        <div className="flex flex-col items-center justify-center mt-16 space-y-12">
          <div className="flex justify-center items-center gap-12">
            <div style={{ backgroundColor: '#6B9B9B', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Policies</h2>
            </div>

            <div style={{ backgroundColor: '#5A8A8A', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Dynamics</h2>
            </div>

            <div style={{ backgroundColor: '#4A7979', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Households</h2>
            </div>
          </div>

          <p className="text-3xl font-semibold text-pe-dark">
            Microsimulation combines these ingredients
          </p>
        </div>
      </div>
    </Slide>
  );
}
