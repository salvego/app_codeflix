import React from 'react';

export default function NavLinks() {
  return (
    <nav>
      <ul className='hidden space-x-4 md:flex'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}
