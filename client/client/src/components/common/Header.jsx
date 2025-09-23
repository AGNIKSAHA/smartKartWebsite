import React from 'react';
import { twMerge } from 'tailwind-merge';

const Header = ({ className, ...props }) => {
  return (
    <header 
      className={twMerge(
        'w-full bg-black text-white',
        className
      )}
      {...props}
    >
      {/* Top promotional banner */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-3">
            <div className="flex justify-between items-center w-full md:w-[68%]">
              {/* Promotional text */}
              <div className="flex gap-2 justify-center items-center">
                <span className="text-sm font-normal leading-[21px] text-left text-white">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </span>
                <span className="text-sm font-semibold leading-[21px] text-center underline text-white cursor-pointer hover:opacity-80">
                  ShopNow
                </span>
              </div>
              
              {/* Language selector */}
              <div className="hidden md:flex gap-1 justify-center items-center">
                <span className="text-sm font-normal leading-[21px] text-left text-white">
                  English
                </span>
                <img 
                  src="/images/img_dropdown.svg" 
                  alt="dropdown" 
                  className="w-6 h-6 cursor-pointer hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;