import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function UsersSlide() {
  const organizations = [
    { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
    { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
    { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
    { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
    { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
    { name: 'UBI Center', logo: '/logos/organizations/ubicenter.png' },
    { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
    { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
    { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
    { name: 'UN Digital Public Goods Alliance', logo: '/logos/organizations/dpga.png', isUN: true },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine users</SlideTitle>
      </SlideHeader>

      <div className="w-full mt-8">
        <div className="grid grid-cols-3 gap-x-12 gap-y-16 w-full px-12">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className={`
                flex items-center justify-center
                ${org.isUN ? 'col-span-3' : ''}
              `}
              style={{
                height: org.isUN ? '80px' : '80px'
              }}
            >
              <Image
                src={assetPath(org.logo)}
                alt={org.name}
                width={org.isUN ? 320 : 160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
