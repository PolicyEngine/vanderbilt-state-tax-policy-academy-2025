import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import PoliciesScopeSlide from './slides/PoliciesScopeSlide';
import StateEITCSlide from './slides/StateEITCSlide';
import HouseholdsSlide from './slides/HouseholdsSlide';
import DynamicsSlide from './slides/DynamicsSlide';
import ImpactMetricsSlide from './slides/ImpactMetricsSlide';
import DemoIntroSlide from './slides/DemoIntroSlide';
import EndSlide from './slides/EndSlide';

export const vanderbilt2025Config: SlideshowConfig = {
  id: 'vanderbilt-2025',
  title: 'Modeling State Tax Policy with PolicyEngine',
  description: 'Learn how to model and measure the impact of state tax policies using PolicyEngine',
  date: 'TBD 2025',
  location: 'Vanderbilt Prenatal-to-3 Policy Impact Center',
  slides: [
    CoverSlide,
    IntroSlide,
    WhatIsPolicyEngineSlide,
    ThreeIngredientsSlide,
    PoliciesScopeSlide,
    StateEITCSlide,
    HouseholdsSlide,
    DynamicsSlide,
    ImpactMetricsSlide,
    DemoIntroSlide,
    EndSlide,
  ],
};
