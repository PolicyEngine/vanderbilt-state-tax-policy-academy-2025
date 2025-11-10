import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimIntroSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Microsimulation rests on all three</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-16">
          <table className="text-2xl border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-400">
                <th className="px-8 py-4 text-left">Gross income</th>
                <th className="px-8 py-4 text-left"># kids</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-8 py-4">$100,000</td>
                <td className="px-8 py-4">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  );
}
