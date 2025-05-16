'use client';
import React, { useEffect, useState } from 'react';
import { TbAirBalloon } from 'react-icons/tb';
import { navlinks } from '../../../constant/constatnt';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);
  
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition duration-200 h-[12vh] z-[1000] top-0 w-full fixed`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/*logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
            <TbAirBalloon className='w-5 h-5 sm:w-6 sm:h-6 text-white'/>
          </div>
          <h1 className='text-lg sm:text-xl md:text-2xl text-white uppercase font-bold truncate'>Sky Nest Camp Ella</h1>
        </div>
        
        {/* Nav Link */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navlinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className='relative text-white text-base font-medium w-fit block cursor-pointer px-2 py-1
              hover:text-yellow-300 transition-colors duration-300 group'>
                {link.label}
                <span className='absolute left-0 right-0 bottom-0 h-[3px] bg-yellow-400 transform
                 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out'></span>
              </p>
            </Link>
          ))}
        </div>
        
        {/* button and hamburger menu container */}
        <div className='flex items-center'>
          {/* Book Now button */}
          <button
            className='px-6 py-1.5 sm:py-2 sm:px-8 md:px-12 md:py-2.5 bg-white text-blue-950 text-sm sm:text-base font-medium rounded-md
            transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/30
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950 border border-transparent hover:border-gray-200'
          >
            Book Now
          </button>
          
          {/* hamburger menu - with proper spacing for small screens */}
          <div className='ml-2 sm:ml-4 lg:hidden flex items-center justify-center'>
            <HiBars3BottomRight onClick={openNav} className='w-7 h-7 sm:w-8 sm:h-8 cursor-pointer text-white'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;