'use client';

import React from 'react';
import UserProfile from './UserProfile';
import LogoNetflix from './LogoNetflix';
import NavLinks from './NavLinks';
import useScroll from '../hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`${isScrolled && 'bg-[#141414]'} fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-all lg:px-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <LogoNetflix />
        <NavLinks />
      </div>

      <UserProfile />
    </header>
  );
}
