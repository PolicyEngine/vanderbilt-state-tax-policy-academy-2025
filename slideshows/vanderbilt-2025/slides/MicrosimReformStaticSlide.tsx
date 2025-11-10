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
            <div className="flex gap-12 items-center text-2xl h-8">
              <div className="font-semibold">Baseline</div>
              <div className="font-semibold text-green-600">Reform</div>
            </div>

            <table className="text-xl border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-6 py-3 text-left w-32">Gross income</th>
                  <th className="px-6 py-3 text-left w-24"># kids</th>
                  <th className="px-6 py-3 text-left bg-blue-100 w-28">Taxes</th>
                  <th className="px-6 py-3 text-left bg-green-100 w-32">Taxes Static</th>
                  <th className="px-6 py-3 text-left bg-yellow-100 opacity-0 w-32">Δ earnings</th>
                  <th className="px-6 py-3 text-left bg-green-100 opacity-0 w-36">Tax w/ behavior</th>
                  <th className="px-6 py-3 text-left bg-purple-100 opacity-0 w-24">Δ tax</th>
                  <th className="px-6 py-3 text-left bg-gray-200 opacity-0 w-24">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3">$100,000</td>
                  <td className="px-6 py-3">0</td>
                  <td className="px-6 py-3 bg-blue-100">$21,000</td>
                  <td className="px-6 py-3 bg-green-100">$20,000</td>
                  <td className="px-6 py-3 bg-yellow-100 opacity-0">+$700</td>
                  <td className="px-6 py-3 bg-green-100 opacity-0">$20,150</td>
                  <td className="px-6 py-3 bg-purple-100 opacity-0">-$850</td>
                  <td className="px-6 py-3 bg-gray-200 opacity-0">500k</td>
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
