import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';
import SlideshowViewer from '@/components/SlideshowViewer';
import AutoSectionTitle from '@/components/AutoSectionTitle';
import AutoClosingSlide from '@/components/AutoClosingSlide';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  // Include all agenda items with slideshowId, not just registered slideshows
  const agendaSlides = agenda
    .filter(item => item.slideshowId)
    .map(item => ({ slideshow: item.slideshowId! }));

  return agendaSlides;
}

export default function SlideshowPage({ params }: { params: { slideshow: string } }) {
  const slideshow = getSlideshowById(params.slideshow);
  const agendaItem = agenda.find(item => item.slideshowId === params.slideshow);

  // If no slideshow exists but it's in the agenda, show just the section title
  if (!slideshow && agendaItem) {
    return (
      <SlideshowViewer slideCount={1} slideshowId={params.slideshow}>
        <AutoSectionTitle />
      </SlideshowViewer>
    );
  }

  // If no slideshow and not in agenda, redirect home
  if (!slideshow) {
    redirect('/');
  }

  // Automatically inject section title at beginning and closing slide at end
  const slides = [...slideshow.slides];

  // Add section title as first slide if not already present (skip for breaks/networking)
  const isBreakOrNetworking = agendaItem?.type === 'break' || agendaItem?.type === 'networking';
  const firstSlide = slides[0];
  const isFirstSlideSection = firstSlide === AutoSectionTitle ||
                               firstSlide?.toString().includes('SectionTitle') ||
                               firstSlide?.displayName === 'SectionTitle';
  if (!isFirstSlideSection && !isBreakOrNetworking) {
    slides.unshift(AutoSectionTitle);
  }

  // Add AutoClosingSlide at end (skip for panels and breaks/networking)
  const isPanel = agendaItem?.type === 'panel';
  if (!isBreakOrNetworking && !isPanel) {
    const lastSlide = slides[slides.length - 1];
    const isLastSlideEnd = lastSlide?.toString().includes('EndSlide') ||
                           lastSlide?.toString().includes('ClosingSlide') ||
                           lastSlide?.displayName === 'EndSlide';
    if (isLastSlideEnd) {
      slides[slides.length - 1] = AutoClosingSlide;
    } else {
      slides.push(AutoClosingSlide);
    }
  }

  // Normal slideshow render
  return (
    <SlideshowViewer slideCount={slides.length} slideshowId={params.slideshow}>
      {slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
