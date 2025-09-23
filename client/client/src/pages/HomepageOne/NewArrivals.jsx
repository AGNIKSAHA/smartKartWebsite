import React from 'react';

const NewArrivals = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-5 justify-start items-start w-full">
            <div className="flex justify-start items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Featured
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-left text-black">
              New Arrival
            </h2>
          </div>

          {/* Featured Products Grid */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-start items-center w-full">
            {/* PlayStation 5 - Large Card */}
            <div className="relative w-full lg:w-[570px] h-[400px] sm:h-[500px] lg:h-[600px] bg-black rounded-sm overflow-hidden">
              <div className="relative w-full h-full flex justify-center items-center p-6 lg:p-8">
                <img 
                  src="/images/img_ps5_slim_goedko.png" 
                  alt="PlayStation 5" 
                  className="w-full max-w-[400px] lg:max-w-[510px] h-auto object-contain"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 flex flex-col gap-3 justify-start items-start text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-[30px] text-left text-white">
                    PlayStation 5
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-left text-white max-w-[200px] sm:max-w-[242px]">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <div className="flex flex-col gap-1 justify-start items-center">
                    <span className="text-base font-medium leading-6 text-left text-white cursor-pointer hover:opacity-80">
                      Shop Now
                    </span>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 lg:gap-8 justify-start items-center w-full lg:flex-1">
              {/* Women's Collections */}
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[284px] bg-gray-900 rounded-sm overflow-hidden">
                <div className="flex justify-start items-center w-full h-full">
                  <div className="flex flex-col gap-4 justify-start items-start w-full sm:w-[36%] p-4 sm:p-6 text-white">
                    <div className="flex flex-col gap-2 justify-start items-center">
                      <h3 className="text-xl sm:text-2xl font-semibold leading-[30px] text-left text-white">
                        Women's Collections
                      </h3>
                      <p className="text-sm font-normal leading-[21px] text-left text-white">
                        Featured woman collections that give you another vibe.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 justify-start items-center">
                      <span className="text-base font-medium leading-6 text-left text-white cursor-pointer hover:opacity-80">
                        Shop Now
                      </span>
                      <div className="w-20 h-[1px] bg-white"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 h-full flex justify-end items-center">
                    <img 
                      src="/images/img_attractive_woma.png" 
                      alt="Women's Collection" 
                      className="w-full max-w-[300px] sm:max-w-[432px] h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row - Speakers and Perfume */}
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 w-full">
                {/* Speakers */}
                <div className="relative w-full sm:w-[270px] h-[200px] sm:h-[250px] lg:h-[284px] bg-black rounded-sm overflow-hidden">
                  <div className="relative w-full h-full flex justify-center items-center p-4 sm:p-6">
                    {/* Background blur effect */}
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-[150px] sm:w-[196px] h-[150px] sm:h-[196px] bg-gray-400 opacity-50 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative flex flex-col justify-center items-center w-full h-full">
                      <img 
                        src="/images/img_69_694768_amazo.png" 
                        alt="Amazon Speakers" 
                        className="w-full max-w-[150px] sm:max-w-[190px] h-auto object-contain mb-4"
                      />
                      
                      <div className="flex flex-col gap-2 justify-start items-start text-white">
                        <div className="flex flex-col justify-start items-start">
                          <h3 className="text-xl sm:text-2xl font-semibold leading-[30px] text-left text-white">
                            Speakers
                          </h3>
                          <p className="text-sm font-normal leading-[21px] text-left text-white">
                            Amazon wireless speakers
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 justify-start items-center">
                          <span className="text-base font-medium leading-6 text-left text-white cursor-pointer hover:opacity-80">
                            Shop Now
                          </span>
                          <div className="w-20 h-[1px] bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Perfume */}
                <div className="relative w-full sm:w-[270px] h-[200px] sm:h-[250px] lg:h-[284px] bg-black rounded-sm overflow-hidden">
                  <div className="relative w-full h-full flex justify-center items-center p-4 sm:p-6">
                    {/* Background blur effect */}
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-[180px] sm:w-[238px] h-[180px] sm:h-[238px] bg-gray-400 opacity-50 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative flex flex-col justify-center items-center w-full h-full">
                      <img 
                        src="/images/img_652e82cd70aa652.png" 
                        alt="Gucci Perfume" 
                        className="w-full max-w-[160px] sm:max-w-[200px] h-auto object-contain mb-4"
                      />
                      
                      <div className="flex flex-col gap-2 justify-start items-start text-white">
                        <div className="flex flex-col gap-1 justify-start items-start">
                          <h3 className="text-xl sm:text-2xl font-semibold leading-[30px] text-left text-white">
                            Perfume
                          </h3>
                          <p className="text-sm font-normal leading-[21px] text-left text-white">
                            GUCCI INTENSE OUD EDP
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 justify-start items-center">
                          <span className="text-base font-medium leading-6 text-left text-white cursor-pointer hover:opacity-80">
                            Shop Now
                          </span>
                          <div className="w-20 h-[1px] bg-white"></div>
                        </div>
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