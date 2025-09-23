import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 5,
      reviews: 88,
      image: "/images/img_g92_2_500x500_1.png",
      hasAddToCart: false
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "/images/img_ak_900_01_500x500.png",
      hasAddToCart: true
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "/images/img_g27cq4_500x500_1.png",
      hasAddToCart: false
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: "/images/img_sam_moghadam_kh.png",
      hasAddToCart: false
    }
  ];

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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(
        <img 
          key={i} 
          src="/images/img_vector.svg" 
          alt="star" 
          className="w-5 h-5"
        />
      );
    }

    if (hasHalfStar) {
      stars?.push(
        <img 
          key="half" 
          src="/images/img_star_half_filled.svg" 
          alt="half star" 
          className="w-5 h-5"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars?.push(
        <img 
          key={`empty-${i}`} 
          src="/images/img_vector_black_900.svg" 
          alt="empty star" 
          className="w-5 h-5"
        />
      );
    }

    return stars;
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-6 justify-start items-start w-full">
            <div className="flex justify-start items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Today's
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6 lg:gap-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-left text-black">
                Flash Sales
              </h2>
              
              {/* Countdown Timer */}
              <div className="flex gap-4 justify-center items-center">
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs font-medium leading-[18px] text-left text-black">
                    Days
                  </span>
                  <span className="text-2xl sm:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-left text-black">
                    {String(timeLeft?.days)?.padStart(2, '0')}
                  </span>
                </div>
                
                <img 
                  src="/images/img_semiclone.svg" 
                  alt="separator" 
                  className="w-1 h-4 self-end mb-4"
                />
                
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs font-medium leading-[18px] text-left text-black">
                    Hours
                  </span>
                  <span className="text-2xl sm:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-left text-black">
                    {String(timeLeft?.hours)?.padStart(2, '0')}
                  </span>
                </div>
                
                <img 
                  src="/images/img_semiclone.svg" 
                  alt="separator" 
                  className="w-1 h-4 self-end mb-4"
                />
                
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs font-medium leading-[18px] text-left text-black">
                    Minutes
                  </span>
                  <span className="text-2xl sm:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-left text-black">
                    {String(timeLeft?.minutes)?.padStart(2, '0')}
                  </span>
                </div>
                
                <img 
                  src="/images/img_semiclone.svg" 
                  alt="separator" 
                  className="w-1 h-4 self-end mb-4"
                />
                
                <div className="flex flex-col justify-center items-start">
                  <span className="text-xs font-medium leading-[18px] text-left text-black">
                    Seconds
                  </span>
                  <span className="text-2xl sm:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-left text-black">
                    {String(timeLeft?.seconds)?.padStart(2, '0')}
                  </span>
                </div>
              </div>
              
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

          {/* Products Grid */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-6 lg:gap-8 min-w-full">
              {products?.map((product) => (
                <div key={product?.id} className="flex flex-col gap-4 justify-start items-center min-w-[250px] lg:min-w-[270px]">
                  {/* Product Card */}
                  <div className="relative w-full">
                    <div className="relative w-full h-[200px] sm:h-[250px] bg-gray-100 rounded-sm p-3 flex justify-center items-center">
                      {/* Discount Badge */}
                      <Button
                        text={product?.discount}
                        text_font_size="12"
                        text_color="#f9f9f9"
                        fill_background_color="#db4444"
                        layout_width="auto"
                        padding="4px 8px"
                        position="absolute"
                        margin="0"
                        variant="primary"
                        size="sm"
                        onClick={() => {}}
                        className="absolute top-3 left-3 z-10"
                      />
                      
                      {/* Action Icons */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <button className="w-[34px] h-[34px] bg-white rounded-2xl flex justify-center items-center hover:bg-gray-50 transition-colors">
                          <img 
                            src="/images/img_wishlist.svg" 
                            alt="wishlist" 
                            className="w-6 h-6"
                          />
                        </button>
                        <button className="w-[34px] h-[34px] bg-white rounded-2xl flex justify-center items-center hover:bg-gray-50 transition-colors">
                          <img 
                            src="/images/img_quick_view.svg" 
                            alt="quick view" 
                            className="w-6 h-6"
                          />
                        </button>
                      </div>
                      
                      {/* Product Image */}
                      <img 
                        src={product?.image} 
                        alt={product?.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Add to Cart Button (for keyboard only) */}
                    {product?.hasAddToCart && (
                      <div className="w-full bg-black rounded-b-sm py-2 flex justify-center items-center">
                        <span className="text-base font-medium leading-6 text-left text-white">
                          Add To Cart
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex flex-col gap-2 justify-start items-start w-full">
                    <h3 className="text-base font-medium leading-6 text-left text-black">
                      {product?.name}
                    </h3>
                    
                    <div className="flex justify-start items-center gap-3">
                      <span className="text-base font-medium leading-6 text-left text-red-500">
                        {product?.price}
                      </span>
                      <span className="text-base font-medium leading-6 text-left text-gray-500 line-through">
                        {product?.originalPrice}
                      </span>
                    </div>
                    
                    <div className="flex justify-start items-center gap-2">
                      <div className="flex justify-start items-center">
                        {renderStars(product?.rating)}
                      </div>
                      <span className="text-sm font-semibold leading-[21px] text-left text-gray-500">
                        ({product?.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Products Button */}
          <Button
            text="View All Products"
            text_font_size="16"
            text_color="#f9f9f9"
            fill_background_color="#db4444"
            layout_width="auto"
            padding="16px 34px"
            position="static"
            margin="0"
            variant="primary"
            size="md"
            onClick={() => {}}
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default FlashSales;