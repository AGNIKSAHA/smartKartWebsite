import React from 'react';
import { twMerge } from 'tailwind-merge';

const NewArrivals = ({ className, ...props }) => {
  return (
    <section 
      className={twMerge(
        'w-full bg-white py-16 sm:py-20 lg:py-24',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-5 mb-12 lg:mb-16">
          {/* Section indicator */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded"></div>
            <span className="text-base font-semibold leading-[25px] text-left text-red-500">
              Featured
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-black">
            New Arrival
          </h2>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PlayStation 5 - Large featured item */}
          <div className="relative bg-black rounded overflow-hidden">
            <div className="relative h-[400px] lg:h-[600px] flex items-end">
              <img 
                src="/images/img_ps5_slim_goedko.png" 
                alt="PlayStation 5" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Content overlay */}
              <div className="relative z-10 p-6 lg:p-8 text-white">
                <div className="flex flex-col gap-3 max-w-md">
                  <h3 className="text-xl lg:text-2xl font-semibold leading-[30px] text-left">
                    PlayStation 5
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-left">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-base font-medium leading-6 text-left cursor-pointer hover:opacity-80">
                      Shop Now
                    </span>
                    <div className="w-20 h-px bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Multiple items */}
          <div className="flex flex-col gap-8">
            
            {/* Women's Collections */}
            <div className="relative bg-gray-900 rounded overflow-hidden h-[284px]">
              <div className="flex items-center h-full">
                <div className="flex-1 p-6 lg:p-8 text-white">
                  <div className="flex flex-col gap-4 max-w-xs">
                    <h3 className="text-xl lg:text-2xl font-semibold leading-[30px] text-left">
                      Women's Collections
                    </h3>
                    <p className="text-sm font-normal leading-[21px] text-left">
                      Featured woman collections that give you another vibe.
                    </p>
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-medium leading-6 text-left cursor-pointer hover:opacity-80">
                        Shop Now
                      </span>
                      <div className="w-20 h-px bg-white"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <img 
                    src="/images/img_attractive_woma.png" 
                    alt="Women's Collections" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom row - Speakers and Perfume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Speakers */}
              <div className="relative bg-black rounded overflow-hidden">
                <div className="relative h-[284px] flex flex-col justify-between p-6">
                  {/* Background blur effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[196px] h-[196px] bg-gray-400/90 rounded-full blur-3xl"></div>
                  
                  {/* Product image */}
                  <div className="relative z-10 flex justify-center items-center flex-1">
                    <img 
                      src="/images/img_69_694768_amazo.png" 
                      alt="Amazon Speakers" 
                      className="w-[190px] h-[220px] object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-white">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl lg:text-2xl font-semibold leading-[30px] text-left">
                        Speakers
                      </h3>
                      <p className="text-sm font-normal leading-[21px] text-left">
                        Amazon wireless speakers
                      </p>
                      <div className="flex flex-col gap-1 mt-2">
                        <span className="text-base font-medium leading-6 text-left cursor-pointer hover:opacity-80">
                          Shop Now
                        </span>
                        <div className="w-20 h-px bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-black rounded overflow-hidden">
                <div className="relative h-[284px] flex flex-col justify-between p-4">
                  {/* Background blur effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[238px] h-[238px] bg-gray-400/90 rounded-full blur-3xl"></div>
                  
                  {/* Product image */}
                  <div className="relative z-10 flex justify-center items-center flex-1">
                    <img 
                      src="/images/img_652e82cd70aa652.png" 
                      alt="GUCCI Perfume" 
                      className="w-[200px] h-[202px] object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-white mb-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl lg:text-2xl font-semibold leading-[30px] text-left">
                        Perfume
                      </h3>
                      <p className="text-sm font-normal leading-[21px] text-left">
                        GUCCI INTENSE OUD EDP
                      </p>
                      <div className="flex flex-col gap-1 mt-2">
                        <span className="text-base font-medium leading-6 text-left cursor-pointer hover:opacity-80">
                          Shop Now
                        </span>
                        <div className="w-20 h-px bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;