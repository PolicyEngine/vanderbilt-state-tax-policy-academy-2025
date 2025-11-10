import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimDynamicsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Microsimulation</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-8">
          <div className="space-y-6">
            <div className="flex gap-12 items-center text-xl">
              <div className="font-semibold">Baseline</div>
              <div className="font-semibold text-green-600">Reform</div>
            </div>

            <table className="text-xl border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-6 py-3 text-left">Gross income</th>
                  <th className="px-6 py-3 text-left"># kids</th>
                  <th className="px-6 py-3 text-left bg-blue-100">Taxes</th>
                  <th className="px-6 py-3 text-left bg-green-100">Taxes Static</th>
                  <th className="px-6 py-3 text-left bg-yellow-100">Δ earnings</th>
                  <th className="px-6 py-3 text-left bg-green-100">Tax w/ behavior</th>
                  <th className="px-6 py-3 text-left bg-purple-100">Δ tax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3">$100,000</td>
                  <td className="px-6 py-3">0</td>
                  <td className="px-6 py-3 bg-blue-100">$21,000</td>
                  <td className="px-6 py-3 bg-green-100">$20,000</td>
                  <td className="px-6 py-3 bg-yellow-100">+$700</td>
                  <td className="px-6 py-3 bg-green-100">$20,150</td>
                  <td className="px-6 py-3 bg-purple-100">-$850</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center gap-8">
              <div className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Rules
              </div>
              <div className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">
                Dynamics
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
