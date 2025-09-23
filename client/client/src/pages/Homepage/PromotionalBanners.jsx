import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/ui/Button';

const PromotionalBanners = ({ className, ...props }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev?.seconds > 0) {
          return { ...prev, seconds: prev?.seconds - 1 };
        } else if (prev?.minutes > 0) {
          return { ...prev, minutes: prev?.minutes - 1, seconds: 59 };
        } else if (prev?.hours > 0) {
          return { ...prev, hours: prev?.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev?.days > 0) {
          return { ...prev, days: prev?.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className={twMerge(
        'w-full bg-white py-16 sm:py-20 lg:py-24',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main promotional banner */}
        <div className="relative bg-black rounded overflow-hidden">
          {/* Background blur effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[504px] h-[500px] bg-gray-400/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-[42%] flex flex-col gap-8 text-center lg:text-left text-white">
              <span className="text-base font-semibold leading-[25px] text-green-400">
                Categories
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] tracking-wide">
                Enhance Your Music Experience
              </h2>
              
              {/* Timer circles */}
              <div className="flex justify-center lg:justify-start items-center gap-6">
                {/* Days */}
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold leading-[25px]">
                    {String(timeLeft?.days)?.padStart(2, '0')}
                  </span>
                  <span className="text-xs font-normal leading-[17px] -mt-2">
                    Days
                  </span>
                </div>
                
                {/* Hours */}
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold leading-[25px]">
                    {String(timeLeft?.hours)?.padStart(2, '0')}
                  </span>
                  <span className="text-xs font-normal leading-[17px] -mt-2">
                    Hours
                  </span>
                </div>
                
                {/* Minutes */}
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold leading-[25px]">
                    {String(timeLeft?.minutes)?.padStart(2, '0')}
                  </span>
                  <span className="text-xs font-normal leading-[17px] -mt-2">
                    Minutes
                  </span>
                </div>
                
                {/* Seconds */}
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold leading-[25px]">
                    {String(timeLeft?.seconds)?.padStart(2, '0')}
                  </span>
                  <span className="text-xs font-normal leading-[17px] -mt-2">
                    Seconds
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button
                text="Buy Now!"
                text_font_size="16"
                text_font_weight="500"
                fill_background_color="#00ff66"
                padding="16px 34px"
                layout_width="fit-content"
                position="static"
                margin="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
                className="w-fit mx-auto lg:mx-0 hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Right Content - Product Image */}
            <div className="w-full lg:flex-1 flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/images/img_jbl_boombox_2_hero_020_x1.png" 
                  alt="JBL Boombox Speaker" 
                  className="w-full max-w-[568px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;