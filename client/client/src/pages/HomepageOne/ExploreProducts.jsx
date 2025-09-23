import React from 'react';
import Button from '../../components/ui/Button';

const ExploreProducts = () => {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      reviews: 35,
      image: "/images/img_71rdoexxtrl_1.png"
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      reviews: 95,
      image: "/images/img_eos_250d_03_500x500.png",
      hasAddToCart: true
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
      image: "/images/img_ideapad_gaming_3i_01_500x500.png"
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4,
      reviews: 145,
      image: "/images/img_curology_j7pkvqrtusm_unsplash.png"
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 5,
      reviews: 65,
      image: "/images/img_new_mercedes_be.png",
      isNew: true,
      colors: ["red", "blue"]
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 5,
      reviews: 35,
      image: "/images/img_copa_sense_1.png",
      colors: ["yellow", "red"]
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/images/img_gp11_prd3_1.png",
      isNew: true,
      colors: ["black", "red"]
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/images/img_698717_z8a1x_34.png",
      colors: ["orange", "black"]
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

  const renderColorOptions = (colors) => {
    if (!colors) return null;
    
    return (
      <div className="flex justify-start items-center gap-2">
        {colors?.map((color, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full border-2 border-gray-300 ${
              color === 'red' ? 'bg-red-500' :
              color === 'blue' ? 'bg-blue-500' :
              color === 'yellow' ? 'bg-yellow-400' :
              color === 'black' ? 'bg-black' :
              color === 'orange'? 'bg-orange-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-5 justify-start items-center w-full">
            <div className="flex justify-start items-center gap-4">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-base font-semibold leading-[25px] text-left text-red-500">
                Our Products
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full gap-6 lg:gap-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] tracking-wide text-left text-black">
                Explore Our Products
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

          {/* Products Grid */}
          <div className="flex flex-col gap-12 justify-start items-center w-full">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
              {products?.slice(0, 4)?.map((product) => (
                <div key={product?.id} className="flex flex-col gap-4 justify-start items-center">
                  {/* Product Card */}
                  <div className="relative w-full">
                    <div className="relative w-full h-[200px] sm:h-[250px] bg-gray-100 rounded-sm p-3 flex justify-center items-center">
                      {/* New Badge */}
                      {product?.isNew && (
                        <Button
                          text="NEW"
                          text_font_size="12"
                          text_color="#f9f9f9"
                          fill_background_color="#00ff66"
                          layout_width="auto"
                          padding="4px 8px"
                          position="absolute"
                          margin="0"
                          variant="primary"
                          size="small"
                          onClick={() => {}}
                          className="absolute top-3 left-3 z-10"
                        />
                      )}
                      
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
                    
                    {/* Add to Cart Button (for camera only) */}
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
                    
                    <div className="flex justify-start items-center gap-2">
                      <span className="text-base font-medium leading-6 text-left text-red-500">
                        {product?.price}
                      </span>
                      <div className="flex justify-start items-center">
                        {renderStars(product?.rating)}
                      </div>
                      <span className="text-sm font-semibold leading-[21px] text-left text-gray-500">
                        ({product?.reviews})
                      </span>
                    </div>
                    
                    {/* Color Options */}
                    {renderColorOptions(product?.colors)}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
              {products?.slice(4, 8)?.map((product) => (
                <div key={product?.id} className="flex flex-col gap-4 justify-start items-center">
                  {/* Product Card */}
                  <div className="relative w-full h-[200px] sm:h-[250px] bg-gray-100 rounded-sm p-3 flex justify-center items-center">
                    {/* New Badge */}
                    {product?.isNew && (
                      <Button
                        text="NEW"
                        text_font_size="12"
                        text_color="#f9f9f9"
                        fill_background_color="#00ff66"
                        layout_width="auto"
                        padding="4px 8px"
                        position="absolute"
                        margin="0"
                        variant="primary"
                        size="small"
                        onClick={() => {}}
                        className="absolute top-3 left-3 z-10"
                      />
                    )}
                    
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
                    
                    <div className="flex justify-start items-center gap-2">
                      <span className="text-base font-medium leading-6 text-left text-red-500">
                        {product?.price}
                      </span>
                      <div className="flex justify-start items-center">
                        {renderStars(product?.rating)}
                      </div>
                      <span className="text-sm font-semibold leading-[21px] text-left text-gray-500">
                        ({product?.reviews})
                      </span>
                    </div>
                    
                    {/* Color Options */}
                    {renderColorOptions(product?.colors)}
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
            position="relative"
            margin="0"
            variant="primary"
            size="medium"
            onClick={() => {}}
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;