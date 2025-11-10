import { getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from '@/components/SlideshowViewer';

export default function Home() {
  const slideshow = getSlideshowById('vanderbilt-2025');

  if (!slideshow) {
    return (
      <main className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-2xl">
          Slideshow not found
        </div>
      </main>
    );
  }

  const slides = slideshow.slides;

  return (
    <SlideshowViewer slideCount={slides.length} slideshowId="vanderbilt-2025">
      {slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
