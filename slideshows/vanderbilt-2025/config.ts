import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimReformStaticSlide from './slides/MicrosimReformStaticSlide';
import MicrosimDynamicsSlide from './slides/MicrosimDynamicsSlide';
import MicrosimDataSlide from './slides/MicrosimDataSlide';
import MicrosimWeightsSlide from './slides/MicrosimWeightsSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import DemoIntroSlide from './slides/DemoIntroSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import WhatsComingSlide from './slides/WhatsComingSlide';
import EndSlide from './slides/EndSlide';

export const vanderbilt2025Config: SlideshowConfig = {
  id: 'vanderbilt-2025',
  title: 'Modeling State Tax Policy with PolicyEngine',
  description: 'Learn how to model and measure the impact of state tax policies using PolicyEngine',
  date: '10 November 2025',
  location: 'Vanderbilt Prenatal-to-3 Policy Impact Center',
  slides: [
    CoverSlide,
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimReformStaticSlide,
    MicrosimDynamicsSlide,
    MicrosimDataSlide,
    MicrosimWeightsSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    DemoIntroSlide,
    HouseholdDemoSlide,
    PolicyReformDemoSlide,
    WhatsComingSlide,
    EndSlide,
  ],
};
