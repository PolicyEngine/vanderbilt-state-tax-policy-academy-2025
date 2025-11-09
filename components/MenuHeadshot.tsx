import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

interface MenuHeadshotProps {
  name: string;
  imageUrl?: string;
}

export default function MenuHeadshot({ name, imageUrl }: MenuHeadshotProps) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const [imageError, setImageError] = React.useState(false);

  if (!imageUrl || imageError) {
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden bg-pe-teal/20 border-2 border-pe-teal/30 flex-shrink-0 shadow-md">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pe-teal/30 to-pe-teal/10">
          <span className="text-sm font-bold text-pe-dark">{initials}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-full overflow-hidden bg-pe-teal/20 border-2 border-pe-teal/30 flex-shrink-0 shadow-md relative">
      <Image
        src={assetPath(imageUrl)}
        alt={name}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}