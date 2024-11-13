import Image from 'next/image';
import React from 'react';

export default function UserProfile() {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='/avatar-netflix.png'
        className='cursor-pointer rounded'
        width={30}
        height={30}
        alt='Avatar Netflix'
      />
    </div>
  );
}
