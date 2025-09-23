import React from 'react';
import { twMerge } from 'tailwind-merge';

const ProductCategories = ({ className, ...props }) => {
  const categories = [
    {
      id: 1,
      name: "Phones",
      icon: "/images/img_category_cellphone.svg",
      isActive: false
    },
    {
      id: 2,
      name: "Computers",
      icon: "/images/img_category_computer.svg",
      isActive: false
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: "/images/img_category_smartwatch.svg",
      isActive: false
    },
    {
      id: 4,
      name: "Camera",
      icon: "/images/img_category_camera_black_900.svg",
      isActive: false
    },
    {
      id: 5,
      name: "HeadPhones",
      icon: "/images/img_category_headphone.svg",
      isActive: false
    },
    {
      id: 6,
      name: "Gaming",
      icon: "/images/img_category_gamepad.svg",
      isActive: false
    }
  ];

  return (
    <section 
      className={twMerge(
        'w-full bg-white py-16 sm:py-20 lg:py-24',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section divider */}
        <div className="w-full h-px bg-black/30 mb-16 lg:mb-20"></div>
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 mb-12 lg:mb-16">
          
          {/* Left side - Title */}
          <div className="flex flex-col gap-5">
            {/* Section indicator */}
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Categories
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-black">
              Browse By Category
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="/images/img_arrow_left.svg" alt="previous" className="w-6 h-6" />
            </button>
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="/images/img_arrow_right_black_900.svg" alt="next" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 mb-16 lg:mb-20">
          {categories?.map((category) => (
            <div 
              key={category?.id}
              className={`flex flex-col items-center gap-4 p-6 border border-black/30 rounded cursor-pointer transition-all hover:bg-red-500 hover:text-white group ${
                category?.isActive ? 'bg-red-500 text-white' : 'bg-white text-black'
              }`}
            >
              <img 
                src={category?.icon} 
                alt={category?.name}
                className="w-14 h-14 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-base font-normal leading-6 text-center">
                {category?.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="w-full h-px bg-black/30"></div>
      </div>
    </section>
  );
};

export default ProductCategories;