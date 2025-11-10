import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimReformStaticSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Microsimulation</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-12">
          <div className="space-y-8">
            <div className="flex gap-12 items-center">
              <div className="text-2xl font-semibold">Baseline</div>
              <div className="text-2xl font-semibold text-green-600">Reform</div>
            </div>

            <table className="text-2xl border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-8 py-4 text-left">Gross income</th>
                  <th className="px-8 py-4 text-left"># kids</th>
                  <th className="px-8 py-4 text-left bg-blue-100">Taxes</th>
                  <th className="px-8 py-4 text-left bg-green-100">Taxes Static</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-8 py-4">$100,000</td>
                  <td className="px-8 py-4">0</td>
                  <td className="px-8 py-4 bg-blue-100">$21,000</td>
                  <td className="px-8 py-4 bg-green-100">$20,000</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center">
              <div className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-xl">
                Rules
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
