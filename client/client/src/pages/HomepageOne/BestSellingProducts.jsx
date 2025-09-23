import React from 'react';
import Button from '../../components/ui/Button';

const BestSellingProducts = () => {
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
          <div className="flex flex-col gap-3 justify-start items-center w-full">
            <div className="flex justify-start items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                This Month
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-left text-black">
                Best Selling Products
              </h2>
              
              <Button
                text="View All"
                text_font_size="16"
                text_color="#f9f9f9"
                fill_background_color="#db4444"
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
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {products?.map((product) => (
              <div key={product?.id} className="flex flex-col gap-4 justify-start items-center">
                {/* Product Card */}
                <div className="relative w-full h-[200px] sm:h-[250px] bg-gray-100 rounded-sm p-3 flex justify-center items-center">
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
                
                {/* Product Info */}
                <div className="flex flex-col gap-2 justify-start items-start w-full">
                  <h3 className="text-base font-medium leading-6 text-left text-black">
                    {product?.name}
                  </h3>
                  
                  <div className="flex justify-start items-center gap-3">
                    <span className="text-base font-medium leading-6 text-left text-red-500">
                      {product?.price}
                    </span>
                    {product?.originalPrice && (
                      <span className="text-base font-medium leading-6 text-left text-gray-500 line-through">
                        {product?.originalPrice}
                      </span>
                    )}
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
      </div>
    </section>
  );
};

export default BestSellingProducts;