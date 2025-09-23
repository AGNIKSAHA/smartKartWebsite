import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/ui/Button';

const FlashSales = ({ className, ...props }) => {
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
      isNew: false
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
      isNew: false,
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
      isNew: false
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
      isNew: false
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

  const renderStars = (rating, reviews) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)]?.map((_, index) => (
            <img
              key={index}
              src={index < fullStars ? "/images/img_vector.svg" : 
                   index === fullStars && hasHalfStar ? "/images/img_star_half_filled.svg": "/images/img_vector_black_900.svg"}
              alt="star"
              className="w-5 h-5"
            />
          ))}
        </div>
        <span className="text-sm font-semibold leading-[21px] text-left text-black/50">
          ({reviews})
        </span>
      </div>
    );
  };

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 mb-8 lg:mb-12">
          
          {/* Left side - Title and Timer */}
          <div className="flex flex-col gap-6">
            {/* Section indicator */}
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Today's
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-black">
              Flash Sales
            </h2>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-4 px-8 lg:px-12">
            <div className="flex items-center gap-4">
              {/* Days */}
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium leading-[18px] text-left text-black">
                  Days
                </span>
                <span className="text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-black">
                  {String(timeLeft?.days)?.padStart(2, '0')}
                </span>
              </div>
              
              <img src="/images/img_semiclone.svg" alt=":" className="w-1 h-4 self-end mb-4" />
              
              {/* Hours */}
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium leading-[18px] text-left text-black">
                  Hours
                </span>
                <span className="text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-black">
                  {String(timeLeft?.hours)?.padStart(2, '0')}
                </span>
              </div>
              
              <img src="/images/img_semiclone.svg" alt=":" className="w-1 h-4 self-end mb-4" />
              
              {/* Minutes */}
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium leading-[18px] text-left text-black">
                  Minutes
                </span>
                <span className="text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-black">
                  {String(timeLeft?.minutes)?.padStart(2, '0')}
                </span>
              </div>
              
              <img src="/images/img_semiclone.svg" alt=":" className="w-1 h-4 self-end mb-4" />
              
              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium leading-[18px] text-left text-black">
                  Seconds
                </span>
                <span className="text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[39px] tracking-wide text-black">
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="/images/img_arrow_left.svg" alt="previous" className="w-6 h-6" />
            </button>
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="/images/img_arrow_right_black_900.svg" alt="next" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {products?.map((product) => (
            <div key={product?.id} className="flex flex-col gap-4">
              
              {/* Product Image Container */}
              <div className="relative bg-gray-100 rounded p-3 group">
                {/* Discount badge */}
                <Button
                  text={product?.discount}
                  className="absolute top-3 left-3 z-10"
                  layout_width="auto"
                  padding="4px 8px"
                  position="relative"
                  margin="0"
                  variant="primary"
                  size="sm"
                  onClick={() => {}}
                />
                
                {/* Wishlist and Quick view buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-50">
                    <img src="/images/img_wishlist.svg" alt="wishlist" className="w-6 h-6" />
                  </button>
                  <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-50">
                    <img src="/images/img_quick_view.svg" alt="quick view" className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Product image */}
                <div className="flex items-center justify-center h-48 lg:h-56">
                  <img 
                    src={product?.image} 
                    alt={product?.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Add to cart button (for keyboard only) */}
                {product?.hasAddToCart && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 rounded-b opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-base font-medium leading-6 text-white">
                      Add To Cart
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-medium leading-6 text-left text-black">
                  {product?.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium leading-6 text-left text-red-500">
                    {product?.price}
                  </span>
                  {product?.originalPrice && (
                    <span className="text-base font-medium leading-6 text-left text-black/50 line-through">
                      {product?.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                {renderStars(product?.rating, product?.reviews)}
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <Button
            text="View All Products"
            text_font_size="16"
            text_font_weight="500"
            padding="16px 34px"
            className="hover:opacity-90 transition-opacity"
            layout_width="auto"
            position="relative"
            margin="0"
            variant="primary"
            size="md"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default FlashSales;