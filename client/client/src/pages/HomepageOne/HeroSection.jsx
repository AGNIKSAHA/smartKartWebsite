import React, { useState } from 'react';
import PagerIndicator from '../../components/ui/PagerIndicator';

const HeroSection = () => {
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

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 py-6">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start items-center w-full lg:flex-1">
              <h1 className="text-xl sm:text-2xl font-bold leading-[30px] text-left text-black font-inter">
                Exclusive
              </h1>
              
              {/* Navigation Menu - Hidden on mobile */}
              <nav className="hidden lg:flex justify-end items-center flex-1 px-14">
                <div className="flex justify-center items-center gap-12">
                  <div className="flex flex-col justify-start items-center">
                    <span className="text-base font-normal leading-6 text-center text-black">
                      Home
                    </span>
                    <img 
                      src="/images/img_underline.svg" 
                      alt="underline" 
                      className="w-12 h-[1px]"
                    />
                  </div>
                  <a href="#" className="text-base font-normal leading-6 text-center text-black hover:opacity-80">
                    Contact
                  </a>
                  <a href="#" className="text-base font-normal leading-6 text-center text-black hover:opacity-80">
                    About
                  </a>
                  <a href="#" className="text-base font-normal leading-6 text-center text-black hover:opacity-80">
                    Sign Up
                  </a>
                </div>
              </nav>
            </div>

            {/* Search and Icons */}
            <div className="flex justify-end items-center w-full lg:w-[36%] gap-4">
              {/* Search Bar */}
              <div className="flex justify-between items-center w-full sm:w-[58%] bg-gray-100 rounded-sm px-2 py-1">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="text-xs font-normal leading-[18px] text-left text-gray-500 bg-transparent border-none outline-none flex-1 px-2"
                />
                <img 
                  src="/images/img_search.svg" 
                  alt="search" 
                  className="w-6 h-6 cursor-pointer hover:opacity-80"
                />
              </div>
              
              {/* Action Icons */}
              <div className="flex justify-end items-center gap-4">
                <img 
                  src="/images/img_wishlist.svg" 
                  alt="wishlist" 
                  className="w-8 h-8 cursor-pointer hover:opacity-80"
                />
                <img 
                  src="/images/img_cart1.svg" 
                  alt="cart" 
                  className="w-8 h-8 cursor-pointer hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-300 mb-10"></div>

        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-0">
          {/* Categories Sidebar */}
          <div className="w-full lg:w-[24%] flex flex-col lg:flex-row justify-start items-center">
            <div className="flex flex-col gap-4 justify-start items-start w-full lg:w-[82%]">
              {categories?.map((category, index) => (
                <div key={index} className="flex justify-between items-center w-full">
                  <span className="text-base font-normal leading-6 text-center text-black">
                    {category?.name}
                  </span>
                  {category?.hasDropdown && (
                    <img 
                      src="/images/img_dropdown_black_900.svg" 
                      alt="dropdown" 
                      className="w-6 h-6"
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-96 bg-gray-300 ml-4"></div>
          </div>

          {/* Hero Slider */}
          <div className="w-full lg:flex-1 relative">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[344px] bg-black rounded-sm overflow-hidden">
              {/* Slider Content */}
              <div className="flex justify-start items-center w-full h-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-0">
                  {/* Text Content */}
                  <div className="flex flex-col gap-4 sm:gap-5 justify-start items-start w-full lg:w-[42%] text-center lg:text-left">
                    <div className="flex justify-start items-center gap-6">
                      <img 
                        src="/images/img_1200px_apple_gray_logo.png" 
                        alt="Apple logo" 
                        className="w-8 sm:w-10 h-10 sm:h-12"
                      />
                      <span className="text-sm sm:text-base font-normal leading-6 text-center text-white">
                        iPhone 14 Series
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] tracking-wide text-left text-white">
                      Up to 10% off Voucher
                    </h2>
                    
                    <div className="flex justify-start items-center gap-2">
                      <div className="flex flex-col gap-1 justify-start items-center">
                        <span className="text-base font-medium leading-6 text-center text-white">
                          Shop Now
                        </span>
                        <div className="w-20 h-[1px] bg-white"></div>
                      </div>
                      <img 
                        src="/images/img_arrow_right.svg" 
                        alt="arrow right" 
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  
                  {/* Hero Image */}
                  <div className="w-full lg:w-[52%] flex justify-center items-center">
                    <img 
                      src="/images/img_hero_endframe.png" 
                      alt="iPhone 14" 
                      className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[496px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Pager Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <PagerIndicator
                  totalPages={5}
                  currentPage={currentSlide}
                  onPageChange={setCurrentSlide}
                  variant="dots"
                  size="small"
                  layout_width="auto"
                  margin="0"
                  position="relative"
                  className="flex justify-center items-center gap-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;