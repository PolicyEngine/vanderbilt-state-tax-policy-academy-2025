import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimAggregateSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Microsimulation</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-4">
          <div className="space-y-3">
            <div className="flex gap-12 items-center text-base">
              <div className="font-semibold">Baseline</div>
              <div className="font-semibold text-green-600">Reform</div>
            </div>

            <table className="text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-3 py-2 text-left text-sm">Gross income</th>
                  <th className="px-3 py-2 text-left text-sm"># kids</th>
                  <th className="px-3 py-2 text-left bg-blue-100 text-sm">Taxes</th>
                  <th className="px-3 py-2 text-left bg-green-100 text-sm">Taxes Static</th>
                  <th className="px-3 py-2 text-left bg-yellow-100 text-sm">Δ earnings</th>
                  <th className="px-3 py-2 text-left bg-green-100 text-sm">Tax w/ behavior</th>
                  <th className="px-3 py-2 text-left bg-purple-100 text-sm">Δ tax</th>
                  <th className="px-3 py-2 text-left bg-gray-200 text-sm">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2">$100,000</td>
                  <td className="px-3 py-2">0</td>
                  <td className="px-3 py-2 bg-blue-100">$21,000</td>
                  <td className="px-3 py-2 bg-green-100">$20,000</td>
                  <td className="px-3 py-2 bg-yellow-100">+$700</td>
                  <td className="px-3 py-2 bg-green-100">$20,150</td>
                  <td className="px-3 py-2 bg-purple-100">-$850</td>
                  <td className="px-3 py-2 bg-gray-200">500k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2">$100,000</td>
                  <td className="px-3 py-2">2</td>
                  <td className="px-3 py-2 bg-blue-100">$12,000</td>
                  <td className="px-3 py-2 bg-green-100">$10,000</td>
                  <td className="px-3 py-2 bg-yellow-100">+$1,000</td>
                  <td className="px-3 py-2 bg-green-100">$10,300</td>
                  <td className="px-3 py-2 bg-purple-100">-$1,700</td>
                  <td className="px-3 py-2 bg-gray-200">700k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2">$25,000</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2 bg-blue-100">-$3,000</td>
                  <td className="px-3 py-2 bg-green-100">-$3,000</td>
                  <td className="px-3 py-2 bg-yellow-100">$0</td>
                  <td className="px-3 py-2 bg-green-100">-$3,000</td>
                  <td className="px-3 py-2 bg-purple-100">$0</td>
                  <td className="px-3 py-2 bg-gray-200">100k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 text-gray-400">…</td>
                  <td className="px-3 py-2 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-blue-100 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-green-100 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-yellow-100 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-green-100 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-purple-100 text-gray-400">…</td>
                  <td className="px-3 py-2 bg-gray-200 text-gray-400">…</td>
                </tr>
                <tr className="border-t-4 border-gray-600 font-bold text-lg">
                  <td className="px-3 py-3" colSpan={2}>TOTAL</td>
                  <td className="px-3 py-3 bg-blue-100">$960B</td>
                  <td className="px-3 py-3 bg-green-100">$930B</td>
                  <td className="px-3 py-3 bg-yellow-100">+$10B</td>
                  <td className="px-3 py-3 bg-green-100">$935B</td>
                  <td className="px-3 py-3 bg-purple-100">-$25B</td>
                  <td className="px-3 py-3 bg-gray-200">170M</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center gap-8 text-sm">
              <div className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
                Rules
              </div>
              <div className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
                Dynamics
              </div>
              <div className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg">
                Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
