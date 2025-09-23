import React from 'react';
import { twMerge } from 'tailwind-merge';

const CustomerService = ({ className, ...props }) => {
  const services = [
    {
      id: 1,
      icon: "/images/img_services.svg",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      id: 2,
      icon: "/images/img_services_blue_gray_900.svg",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      id: 3,
      icon: "/images/img_services_blue_gray_900_80x80.svg",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
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
        
        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 mb-16 lg:mb-20">
          {services?.map((service) => (
            <div key={service?.id} className="flex flex-col items-center gap-5 text-center max-w-xs">
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={service?.icon} 
                  alt={service?.title}
                  className="w-20 h-20"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg lg:text-xl font-semibold leading-[30px] text-center text-black">
                  {service?.title}
                </h3>
                <p className="text-sm font-normal leading-[21px] text-center text-black">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to top button */}
        <div className="flex justify-end">
          <button 
            className="w-[46px] h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <img 
              src="/images/img_fill_with_up_arrow.svg" 
              alt="back to top" 
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;