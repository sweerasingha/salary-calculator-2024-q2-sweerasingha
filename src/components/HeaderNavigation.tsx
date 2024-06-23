import React from 'react';
import Image from 'next/image'; // Import the Image component from 'next/image'
import profilepic from '../Assets/Ellipse 6.png';
import bell from '../Assets/Bell-off.svg';
import menuicon from '../Assets/Chevron-down.png';

const HeaderNavigation: React.FC = () => {
  return (
    <div className='flex md:h-[80px] bg-white shadow-md items-center justify-between px-[24px] flex-row sm:flex-row h-[60px]'>
      <h4 className='font-inter text-black text-[20px] font-semibold'>Dashboard</h4>
      <div className='flex flex-row items-center justify-between gap-x-5'>
        <div className='h-[24px] w-[24px] cursor-pointer'>
          <Image 
              src={bell} 
              alt='bell icon'
              width={24}
              height={24}
          />
        </div>
        <div className='flex flex-row justify-between w-[72px] items-center'>
            <div className='h-[40px] w-[40px]'>
              <Image 
                  src={profilepic} 
                  alt='profile'
                  width={40}
                  height={40}
              />
            </div>
            <div className='h-[24px] w-[24px] cursor-pointer'>
              <Image 
                  src={menuicon} 
                  alt='menu icon'
                  width={24} 
                  height={24}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigation;
