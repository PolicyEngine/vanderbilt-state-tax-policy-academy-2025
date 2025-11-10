import React, { ReactNode } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export interface SlideProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
  isCover?: boolean;
  isEnd?: boolean;
  slideNumber?: number;
  totalSlides?: number;
}

export default function Slide({
  children,
  className = '',
  showFooter = true,
  isCover = false,
  isEnd = false,
  slideNumber,
  totalSlides,
}: SlideProps) {
  const showProfileLogo = !isCover && !isEnd;

  return (
    <div className={`
      relative w-screen h-screen flex flex-col
      ${isCover || isEnd ? 'gradient-bg text-white justify-center items-center' : 'bg-white'}
      ${className}
    `}>
      {/* Main logo on cover and end slides */}
      {(isCover || isEnd) && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2">
          <Image
            src={assetPath("/logos/white.svg")}
            alt="PolicyEngine"
            width={350}
            height={100}
            className="opacity-100"
          />
        </div>
      )}

      {/* Content area */}
      <div className={`
        absolute inset-0
        ${isCover || isEnd ? 'flex items-center justify-center' : 'pt-12 pb-24'}
      `}>
        <div className={`
          w-full h-full
          ${isCover || isEnd ? 'max-w-6xl px-20 flex flex-col justify-center' : 'px-16'}
        `}>
          {children}
        </div>
      </div>

      {/* Footer with gradient - contains logo and title */}
      {showFooter && !isCover && !isEnd && (
        <div className="absolute bottom-0 left-0 right-0 h-20 gradient-footer flex items-center justify-between px-16">
          <Image
            src={assetPath("/logos/white.svg")}
            alt="PolicyEngine"
            width={180}
            height={50}
            className="opacity-90"
          />
          <div className="text-white text-sm opacity-90 font-medium">
            Modeling State Tax Policy with PolicyEngine • 10 November 2025
          </div>
        </div>
      )}
    </div>
  );
}
