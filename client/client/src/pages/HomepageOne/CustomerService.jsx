import React from 'react';

const CustomerService = () => {
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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center w-full">
          {/* Services Grid */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-22 justify-center items-center w-full">
            {services?.map((service) => (
              <div key={service?.id} className="flex flex-col gap-5 justify-start items-center text-center max-w-[248px] sm:max-w-[262px]">
                <img 
                  src={service?.icon} 
                  alt={service?.title} 
                  className="w-20 h-20"
                />
                <div className="flex flex-col gap-1 sm:gap-2 justify-start items-center">
                  <h3 className="text-lg sm:text-xl font-semibold leading-[30px] text-center text-black">
                    {service?.title}
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-center text-black">
                    {service?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-end items-center w-full">
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-[22px] flex justify-center items-center hover:bg-gray-200 transition-colors">
              <img 
                src="/images/img_fill_with_up_arrow.svg" 
                alt="back to top" 
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;