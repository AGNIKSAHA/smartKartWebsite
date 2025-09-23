import React, { useState } from 'react';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(3); // Camera is selected by default

  const categories = [
    {
      id: 0,
      name: "Phones",
      icon: "/images/img_category_cellphone.svg"
    },
    {
      id: 1,
      name: "Computers",
      icon: "/images/img_category_computer.svg"
    },
    {
      id: 2,
      name: "SmartWatch",
      icon: "/images/img_category_smartwatch.svg"
    },
    {
      id: 3,
      name: "Camera",
      icon: "/images/img_category_camera.svg"
    },
    {
      id: 4,
      name: "HeadPhones",
      icon: "/images/img_category_headphone.svg"
    },
    {
      id: 5,
      name: "Gaming",
      icon: "/images/img_category_gamepad.svg"
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center w-full">
          {/* Section Divider */}
          <div className="w-full h-[1px] bg-gray-300"></div>
          
          {/* Section Header */}
          <div className="flex flex-col gap-5 justify-start items-center w-full">
            <div className="flex justify-start items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Categories
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full gap-6 lg:gap-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-left text-black">
                Browse By Category
              </h2>
              
              {/* Navigation Arrows */}
              <div className="flex justify-end items-center gap-2">
                <button className="w-[46px] h-[46px] bg-gray-100 rounded-[22px] flex justify-center items-center hover:bg-gray-200 transition-colors">
                  <img 
                    src="/images/img_arrow_left.svg" 
                    alt="previous" 
                    className="w-6 h-6"
                  />
                </button>
                <button className="w-[46px] h-[46px] bg-gray-100 rounded-[22px] flex justify-center items-center hover:bg-gray-200 transition-colors">
                  <img 
                    src="/images/img_arrow_right_black_900.svg" 
                    alt="next" 
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-6 lg:gap-8 min-w-full justify-center lg:justify-start">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`flex flex-col gap-4 justify-center items-center min-w-[140px] sm:min-w-[170px] h-[120px] sm:h-[145px] rounded-sm border transition-all duration-200 ${
                    selectedCategory === category?.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'border-gray-300 bg-white text-black hover:border-gray-400 hover:shadow-md'
                  }`}
                >
                  <img 
                    src={category?.icon} 
                    alt={category?.name} 
                    className="w-12 sm:w-14 h-12 sm:h-14"
                  />
                  <span className="text-base font-normal leading-6 text-center">
                    {category?.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;