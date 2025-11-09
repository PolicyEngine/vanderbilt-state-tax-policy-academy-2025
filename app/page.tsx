'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllSlideshowMetadata } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';
import { getCurrentAgendaIndex, getNextAgendaIndex } from '@/lib/timeUtils';
import { assetPath } from '@/lib/assetPath';
import { getSpeakersByIds } from '@/lib/speakers';
import MenuHeadshot from '@/components/MenuHeadshot';

export default function Home() {
  const slideshows = getAllSlideshowMetadata();
  const slideshowIds = new Set(slideshows.map(s => s.id));
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  useEffect(() => {
    // Update current/next on mount and every minute
    const updateTimes = () => {
      setCurrentIndex(getCurrentAgendaIndex(agenda));
      setNextIndex(getNextAgendaIndex(agenda));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen gradient-bg flex flex-col justify-center p-16">
      <div className="max-w-6xl w-full">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src={assetPath("/logos/white.svg")}
            alt="PolicyEngine"
            width={450}
            height={120}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">
          Event presentations
        </h1>
        <p className="text-xl text-white/80 mb-4">
          3 November 2025 • Central Hall Westminster, London
        </p>
        <p className="text-lg text-white/60 mb-12">
          Select a presentation to view slides
        </p>

        {/* Agenda with linked presentations */}
        <div className="space-y-3">
          {agenda.map((item, index) => {
            // Any item with slideshowId can be clicked (will auto-generate section title if no full slideshow exists)
            const hasSlides = !!item.slideshowId;
            const isBreakOrNetworking = item.type === 'break' || item.type === 'networking';
            const isCurrent = index === currentIndex;
            const isNext = index === nextIndex && !isCurrent;

            if (isBreakOrNetworking && !hasSlides) {
              return (
                <div key={index} className={`rounded-lg p-6 text-white/60 italic relative ${isCurrent ? 'bg-white/20 ring-2 ring-white' : 'bg-white/10'}`}>
                  {isCurrent && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white text-pe-dark text-xs font-bold px-2 py-1 rounded">
                      NOW
                    </div>
                  )}
                  <p className="text-sm font-medium mb-1 text-left">{item.time}</p>
                  <p className="text-lg text-left">{item.title}</p>
                </div>
              );
            }

            if (isBreakOrNetworking && hasSlides) {
              return (
                <Link
                  key={index}
                  href={`/${item.slideshowId}`}
                  className={`group block rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer relative ${isCurrent ? 'bg-white/20 ring-2 ring-white text-white' : 'bg-white/10 text-white/80 hover:bg-white/15'}`}
                >
                  {isCurrent && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white text-pe-dark text-xs font-bold px-2 py-1 rounded">
                      NOW
                    </div>
                  )}
                  <p className="text-sm font-medium mb-1 text-left">{item.time}</p>
                  <p className="text-lg text-left font-medium">{item.title}</p>
                </Link>
              );
            }

            const speakers = item.speakerIds ? getSpeakersByIds(item.speakerIds) : [];

            const content = (
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <p className="text-sm font-medium text-pe-teal">{item.time}</p>
                  {isCurrent && (
                    <span className="text-xs px-2 py-1 bg-pe-teal text-white font-bold rounded">
                      HAPPENING NOW
                    </span>
                  )}
                  {isNext && (
                    <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded">
                      Up next
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3 text-pe-dark">
                  {item.title}
                </h2>
                {speakers.length > 0 ? (
                  <div className="space-y-2">
                    {speakers.map((speaker, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <MenuHeadshot
                          name={speaker.name}
                          imageUrl={speaker.headshotUrl}
                        />
                        <p className="text-sm text-gray-600 italic">
                          {speaker.name}, {speaker.title}, {speaker.organisation}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {item.speaker && (
                      <p className="text-sm text-gray-600 italic">{item.speaker}</p>
                    )}
                  </>
                )}
                {!hasSlides && (
                  <p className="text-sm text-gray-500 mt-2">
                    Slides coming soon
                  </p>
                )}
              </div>
            );

            if (hasSlides) {
              return (
                <Link
                  key={index}
                  href={`/${item.slideshowId}`}
                  className={`group block bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer ${isCurrent ? 'ring-4 ring-pe-teal shadow-xl' : ''}`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className={`block bg-white rounded-lg p-6 transition-all duration-300 ${isCurrent ? 'ring-4 ring-pe-teal shadow-xl' : ''}`}
              >
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
