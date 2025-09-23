import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const HeroSection = ({ className, ...props }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: "Woman\'s Fashion", hasDropdown: true },
    { name: "Men\'s Fashion", hasDropdown: true },
    { name: "Electronics", hasDropdown: false },
    { name: "Home & Lifestyle", hasDropdown: false },
    { name: "Medicine", hasDropdown: false },
    { name: "Sports & Outdoor", hasDropdown: false },
    { name: "Baby\'s & Toys", hasDropdown: false },
    { name: "Groceries & Pets", hasDropdown: false },
    { name: "Health & Beauty", hasDropdown: false }
  ];

  const slides = [
    {
      id: 1,
      brand: "Apple",
      title: "Up to 10% off Voucher",
      image: "/images/img_hero_endframe.png",
      active: true
    }
  ];

  const indicators = [
    { active: false },
    { active: false },
    { active: true },
    { active: false },
    { active: false }
  ];

  return (
    <section 
      className={twMerge(
        'w-full bg-white',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          
          {/* Categories Sidebar */}
          <div className="w-full lg:w-[24%] flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              {categories?.map((category, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-base font-normal leading-6 text-center text-black cursor-pointer hover:text-red-500 transition-colors">
                    {category?.name}
                  </span>
                  {category?.hasDropdown && (
                    <img 
                      src="/images/img_dropdown_black_900.svg" 
                      alt="dropdown" 
                      className="w-6 h-6 cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </nav>
            
            {/* Vertical divider */}
            <div className="hidden lg:block w-px h-96 bg-black/30 ml-4"></div>
          </div>

          {/* Main Hero Content */}
          <div className="w-full lg:flex-1 relative">
            <div className="bg-black rounded-sm p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Left Content */}
                <div className="w-full lg:w-[36%] flex flex-col gap-5 text-center lg:text-left">
                  {/* Brand section */}
                  <div className="flex items-center justify-center lg:justify-start gap-6">
                    <img 
                      src="/images/img_1200px_apple_gray_logo.png" 
                      alt="Apple logo" 
                      className="w-10 h-12"
                    />
                    <span className="text-base font-normal leading-6 text-white">
                      iPhone 14 Series
                    </span>
                  </div>
                  
                  {/* Main heading */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-semibold leading-tight lg:leading-[60px] tracking-wide text-white">
                    Up to 10% off Voucher
                  </h1>
                  
                  {/* CTA section */}
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-medium leading-6 text-center lg:text-left text-white cursor-pointer hover:opacity-80">
                        Shop Now
                      </span>
                      <div className="w-20 h-px bg-white"></div>
                    </div>
                    <img 
                      src="/images/img_arrow_right.svg" 
                      alt="arrow right" 
                      className="w-6 h-6 ml-2"
                    />
                  </div>
                </div>

                {/* Right Content - Product Image */}
                <div className="w-full lg:w-[56%] relative">
                  <div className="relative w-full h-64 sm:h-80 lg:h-[328px]">
                    <img 
                      src="/images/img_hero_endframe.png" 
                      alt="iPhone 14 Series" 
                      className="w-full h-full object-cover rounded"
                    />
                    
                    {/* Active indicator dot */}
                    <div className="absolute bottom-3 left-1 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center items-center gap-2.5 mt-4">
              {indicators?.map((indicator, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    indicator?.active 
                      ? 'border-2 border-white bg-transparent' :'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;