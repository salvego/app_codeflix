'use client';

import React from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isScrolled && 'bg-[#141414]'} fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-all lg:px-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <img src='/logo-netflix.png' width={120} height={120} alt='Netflix' />
        <ul className='hidden md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Search</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img
          src='/avatar-netflix.png'
          className='cursor-pointer rounded'
          width={30}
          height={30}
          alt='Avatar Netflix'
        />
      </div>
    </header>
  );
}
