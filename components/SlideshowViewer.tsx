'use client';

import { useState, useEffect, Children, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { agenda } from '@/lib/agenda';
import { assetPath } from '@/lib/assetPath';

interface SlideshowViewerProps {
  slideCount: number;
  children: React.ReactNode;
  slideshowId?: string;
}

function SlideshowViewerClient({ slideCount, children, slideshowId }: SlideshowViewerProps) {
  const searchParams = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const childArray = Children.toArray(children);
  const router = useRouter();

  // Find next presentation in agenda
  const getNextPresentation = () => {
    if (!slideshowId) return null;

    const currentIndex = agenda.findIndex(item => item.slideshowId === slideshowId);
    if (currentIndex === -1) return null;

    // Find next item with slideshowId
    for (let i = currentIndex + 1; i < agenda.length; i++) {
      if (agenda[i].slideshowId) {
        return agenda[i].slideshowId;
      }
    }
    return null;
  };

  // Find previous presentation in agenda
  const getPreviousPresentation = () => {
    if (!slideshowId) return null;

    const currentIndex = agenda.findIndex(item => item.slideshowId === slideshowId);
    if (currentIndex === -1) return null;

    // Find previous item with slideshowId
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (agenda[i].slideshowId) {
        return agenda[i].slideshowId;
      }
    }
    return null;
  };

  const nextPresentation = getNextPresentation();
  const previousPresentation = getPreviousPresentation();

  useEffect(() => {
    setMounted(true);
    setIsNavigating(false); // Reset navigation flag on mount

    // Initialize slide from URL parameter (client-side only)
    const initialSlide = parseInt(searchParams.get('slide') || '0', 10);
    setCurrentSlide(Math.max(0, Math.min(initialSlide, slideCount - 1)));

    // Set initial fullscreen state
    setIsFullscreen(!!document.fullscreenElement);

    // Track fullscreen state
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [searchParams, slideCount]);

  // Update URL when slide changes
  useEffect(() => {
    if (!slideshowId) return;
    const url = assetPath(`/${slideshowId}${currentSlide > 0 ? `?slide=${currentSlide}` : ''}`);
    window.history.replaceState(null, '', url);
  }, [currentSlide, slideshowId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keyboard events during navigation
      if (isNavigating) {
        e.preventDefault();
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide === slideCount - 1 && nextPresentation) {
          setIsNavigating(true);
          router.push(`/${nextPresentation}`);
        } else {
          setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide === 0 && previousPresentation) {
          setIsNavigating(true);
          // Go to last slide of previous presentation
          router.push(`/${previousPresentation}?slide=999`); // Will clamp to last slide
        } else {
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slideCount - 1);
      } else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideCount, currentSlide, nextPresentation, previousPresentation, router, isNavigating]);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slideCount - 1;

  const handleMainClick = (e: React.MouseEvent) => {
    // Only advance if we're not clicking on navigation controls
    const target = e.target as HTMLElement;
    if (target.closest('.pointer-events-auto')) {
      return;
    }

    // If on last slide and there's a next presentation, go to it
    if (isLastSlide && nextPresentation) {
      setIsNavigating(true);
      router.push(`/${nextPresentation}`);
    } else {
      setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
    }
  };

  const handleNext = () => {
    if (isLastSlide && nextPresentation) {
      setIsNavigating(true);
      router.push(`/${nextPresentation}`);
    } else {
      setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
    }
  };

  return (
    <main className="relative cursor-pointer" onClick={handleMainClick}>
      {mounted && childArray.map((child, index) => (
        <div
          key={index}
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
        >
          {child}
        </div>
      ))}

      {/* Navigation controls inside footer - hidden in fullscreen */}
      {!isFullscreen && (
      <div className="fixed bottom-0 left-0 right-0 h-20 z-[100] flex items-center justify-between px-8 pointer-events-none">
        {/* Left side - Menu button */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link
            href="/"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-2"
          >
            ← Menu
          </Link>
          <span className="text-white/60 text-xs">
            Click or arrow keys • F for fullscreen
          </span>
        </div>

        {/* Right side - Navigation controls */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => {
              if (isFirstSlide && previousPresentation) {
                setIsNavigating(true);
                router.push(`/${previousPresentation}?slide=999`);
              } else {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
              }
            }}
            className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
            aria-label={isFirstSlide && previousPresentation ? "Previous presentation" : "Previous slide"}
          >
            ←
          </button>

          <span className="text-base font-medium text-white min-w-[4rem] text-center">
            {currentSlide + 1} / {slideCount}
          </span>

          <button
            onClick={handleNext}
            className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
            aria-label={isLastSlide && nextPresentation ? "Next presentation" : "Next slide"}
          >
            →
          </button>
        </div>
      </div>
      )}
    </main>
  );
}

export default function SlideshowViewer(props: SlideshowViewerProps) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SlideshowViewerClient {...props} />
    </Suspense>
  );
}
