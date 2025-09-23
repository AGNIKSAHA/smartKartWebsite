import React from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/ui/Button';

const BestSellingProducts = ({ className, ...props }) => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: "$260",
      originalPrice: "$360",
      rating: 5,
      reviews: 65,
      image: "/images/img_672462_zah9d_56.png"
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4.5,
      reviews: 65,
      image: "/images/img_547953_9c2st_87.png"
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 4.5,
      reviews: 65,
      image: "/images/img_gammaxx_l240_argb_1_500x500.png"
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: "$360",
      originalPrice: null,
      rating: 5,
      reviews: 65,
      image: "/images/img_sam_moghadam_kh_176x140.png"
    }
  ];

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 mb-12 lg:mb-16">
          
          {/* Left side - Title */}
          <div className="flex flex-col gap-3">
            {/* Section indicator */}
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                This Month
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-black">
              Best Selling Products
            </h2>
          </div>

          {/* View All Button */}
          <Button
            text="View All"
            text_font_size="16"
            text_font_weight="500"
            padding="16px 34px"
            layout_width="auto"
            position="relative"
            margin="0"
            variant="primary"
            size="medium"
            onClick={() => {}}
            className="hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products?.map((product) => (
            <div key={product?.id} className="flex flex-col gap-4">
              
              {/* Product Image Container */}
              <div className="relative bg-gray-100 rounded p-3 group">
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
      </div>
    </section>
  );
};

export default BestSellingProducts;