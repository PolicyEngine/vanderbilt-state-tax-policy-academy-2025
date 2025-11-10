import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimAggregateSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Let's see a microsimulation example</SlideTitle>
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
                  <th className="px-6 py-3 text-left bg-yellow-100 w-32">Δ earnings</th>
                  <th className="px-6 py-3 text-left bg-green-100 w-36">Tax w/ behavior</th>
                  <th className="px-6 py-3 text-left bg-purple-100 w-24">Δ tax</th>
                  <th className="px-6 py-3 text-left bg-gray-200 w-24">Weight</th>
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
                  <td className="px-6 py-3 bg-gray-200">500k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-6 py-3">$100,000</td>
                  <td className="px-6 py-3">2</td>
                  <td className="px-6 py-3 bg-blue-100">$12,000</td>
                  <td className="px-6 py-3 bg-green-100">$10,000</td>
                  <td className="px-6 py-3 bg-yellow-100">+$1,000</td>
                  <td className="px-6 py-3 bg-green-100">$10,300</td>
                  <td className="px-6 py-3 bg-purple-100">-$1,700</td>
                  <td className="px-6 py-3 bg-gray-200">700k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-6 py-3">$25,000</td>
                  <td className="px-6 py-3">1</td>
                  <td className="px-6 py-3 bg-blue-100">-$3,000</td>
                  <td className="px-6 py-3 bg-green-100">-$3,000</td>
                  <td className="px-6 py-3 bg-yellow-100">$0</td>
                  <td className="px-6 py-3 bg-green-100">-$3,000</td>
                  <td className="px-6 py-3 bg-purple-100">$0</td>
                  <td className="px-6 py-3 bg-gray-200">100k</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-6 py-3 text-gray-400">…</td>
                  <td className="px-6 py-3 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-blue-100 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-green-100 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-yellow-100 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-green-100 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-purple-100 text-gray-400">…</td>
                  <td className="px-6 py-3 bg-gray-200 text-gray-400">…</td>
                </tr>
                <tr className="border-t-4 border-gray-600 font-bold">
                  <td className="px-6 py-3" colSpan={2}>TOTAL</td>
                  <td className="px-6 py-3 bg-blue-100">$960B</td>
                  <td className="px-6 py-3 bg-green-100">$930B</td>
                  <td className="px-6 py-3 bg-yellow-100">+$10B</td>
                  <td className="px-6 py-3 bg-green-100">$935B</td>
                  <td className="px-6 py-3 bg-purple-100">-$25B</td>
                  <td className="px-6 py-3 bg-gray-200">170M</td>
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
