import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import { getSpeakerById } from '@/lib/speakers';

interface SectionTitleSlideProps {
  title?: string;
  sectionTitle?: string; // Deprecated, use title
  speakerId?: string;
  speakerIds?: string[];
  // Legacy props for backwards compatibility
  speakerName?: string;
  speakerTitle?: string;
  speakerOrganisation?: string;
  headshotUrl?: string;
}

export default function SectionTitleSlide({
  title,
  sectionTitle,
  speakerId,
  speakerIds,
  speakerName,
  speakerTitle: speakerTitleProp,
  speakerOrganisation,
  headshotUrl
}: SectionTitleSlideProps) {
  const slideTitle = title || sectionTitle;

  // Handle single speaker by ID
  if (speakerId) {
    const speaker = getSpeakerById(speakerId);
    if (speaker) {
      return (
        <Slide className="!bg-transparent gradient-bg" showFooter={true}>
          <div className="max-w-7xl">
            {/* Header */}
            <div className="mb-10">
              <SlideTitle className="text-white">{slideTitle}</SlideTitle>
              <div className="w-full h-1 bg-white mt-5"></div>
            </div>

            <div className="mt-16 flex items-center justify-between gap-12">
              <div className="flex-grow text-left space-y-3">
                <h2 className="text-4xl font-bold text-white">{speaker.name}</h2>
                <p className="text-2xl text-white/90">{speaker.title}</p>
                <p className="text-2xl text-white/80">{speaker.organisation}</p>
              </div>

              <div className="flex-shrink-0">
                <SpeakerHeadshot
                  name={speaker.name}
                  imageUrl={speaker.headshotUrl}
                  size="large"
                  position="center"
                />
              </div>
            </div>
          </div>
        </Slide>
      );
    }
  }

  // Handle multiple speakers by IDs
  if (speakerIds && speakerIds.length > 0) {
    const speakers = speakerIds.map(id => getSpeakerById(id)).filter(Boolean);
    const isThreeOrMore = speakers.length >= 3;

    return (
      <Slide className="!bg-transparent gradient-bg" showFooter={true}>
        <div className="w-full h-full flex flex-col items-center justify-center -mt-12">
          {/* Centered title at top */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white">
              {slideTitle}
            </h1>
          </div>

          {/* Speakers in horizontal row with headshots above */}
          <div className="w-full flex justify-center">
            <div className={`flex flex-row justify-evenly items-start ${isThreeOrMore ? 'max-w-5xl gap-12' : 'max-w-4xl gap-32'} w-full`}>
              {speakers.map((speaker, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 flex-1">
                  <SpeakerHeadshot
                    name={speaker!.name}
                    imageUrl={speaker!.headshotUrl}
                    size={isThreeOrMore ? 'medium' : 'large'}
                    position="center"
                  />
                  <div className="space-y-1">
                    <h2 className={`${isThreeOrMore ? 'text-2xl' : 'text-3xl'} font-bold text-white`}>{speaker!.name}</h2>
                    <p className={`${isThreeOrMore ? 'text-lg' : 'text-xl'} text-white/90`}>{speaker!.title}</p>
                    <p className={`${isThreeOrMore ? 'text-lg' : 'text-xl'} text-white/80`}>{speaker!.organisation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  // Legacy backwards compatibility - direct props
  return (
    <Slide className="!bg-transparent gradient-bg" showFooter={true}>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <SlideTitle className="text-white">{slideTitle}</SlideTitle>
          <div className="w-full h-1 bg-white mt-5"></div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-12">
          <div className="flex-grow text-left space-y-3">
            <h2 className="text-4xl font-bold text-white">{speakerName}</h2>
            <p className="text-2xl text-white/90">{speakerTitleProp}</p>
            <p className="text-2xl text-white/80">{speakerOrganisation}</p>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={speakerName!}
              imageUrl={headshotUrl}
              size="large"
              position="center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
