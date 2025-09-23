import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const PromotionalBanners = () => {
  const [timeLeft, setTimeLeft] = useState({
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
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Promotional Banner */}
        <div className="relative w-full bg-black rounded-sm overflow-hidden">
          {/* Background blur effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[350px] sm:w-[450px] lg:w-[504px] h-[350px] sm:w-[450px] lg:h-[500px] bg-gray-400 opacity-30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative flex flex-col lg:flex-row justify-center items-center w-full h-[400px] sm:h-[450px] lg:h-[500px] px-4 sm:px-6 lg:px-12">
            {/* Text Content */}
            <div className="flex flex-col gap-6 sm:gap-8 justify-start items-start w-full lg:w-[42%] text-center lg:text-left z-10">
              <span className="text-base font-semibold leading-[25px] text-left text-green-400">
                Categories
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] tracking-wide text-left text-white">
                Enhance Your Music Experience
              </h2>
              
              {/* Countdown Timer */}
              <div className="flex gap-4 sm:gap-6 justify-start items-center">
                <div className="flex flex-col justify-center items-center w-[50px] sm:w-[62px] h-[50px] sm:h-[62px] bg-white rounded-full">
                  <div className="flex flex-col justify-start items-center">
                    <span className="text-sm sm:text-base font-semibold leading-[25px] text-left text-black">
                      {String(timeLeft?.hours)?.padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-normal leading-[17px] text-left text-black -mt-2">
                      Hours
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-[50px] sm:w-[62px] h-[50px] sm:h-[62px] bg-white rounded-full">
                  <div className="flex flex-col justify-start items-center">
                    <span className="text-sm sm:text-base font-semibold leading-[25px] text-left text-black">
                      05
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-normal leading-[17px] text-left text-black -mt-2">
                      Days
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-[50px] sm:w-[62px] h-[50px] sm:h-[62px] bg-white rounded-full">
                  <div className="flex flex-col justify-start items-center">
                    <span className="text-sm sm:text-base font-semibold leading-[25px] text-left text-black">
                      {String(timeLeft?.minutes)?.padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-normal leading-[17px] text-left text-black -mt-2">
                      Minutes
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-[50px] sm:w-[62px] h-[50px] sm:h-[62px] bg-white rounded-full">
                  <div className="flex flex-col justify-start items-center">
                    <span className="text-sm sm:text-base font-semibold leading-[25px] text-left text-black">
                      {String(timeLeft?.seconds)?.padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-normal leading-[17px] text-left text-black -mt-2">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
              
              <Button
                text="Buy Now!"
                text_font_size="16"
                text_color="#f9f9f9"
                fill_background_color="#00ff66"
                padding="16px 34px"
                layout_width="auto"
                position="static"
                margin="0"
                variant="primary"
                size="medium"
                className=""
                onClick={() => {}}
              />
            </div>
            
            {/* Product Image */}
            <div className="w-full lg:w-auto flex justify-center items-center lg:ml-8">
              <img 
                src="/images/img_jbl_boombox_2_hero_020_x1.png" 
                alt="JBL Boombox" 
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[568px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;