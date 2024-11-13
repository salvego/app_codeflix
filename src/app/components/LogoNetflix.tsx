import Image from 'next/image';
import React from 'react';

export default function LogoNetflix() {
  return (
    <Image
      src='/logo-netflix.png'
      width={120}
      height={120}
      alt='Logo Netflix'
      className='cursor-pointer object-contain'
    />
  );
}
