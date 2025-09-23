import React from 'react';
import { twMerge } from 'tailwind-merge';
import EditText from '../ui/EditText';

const Footer = ({ className, ...props }) => {
  return (
    <footer 
      className={twMerge(
        'w-full bg-black text-white',
        className
      )}
      {...props}
    >
      <div className="w-full bg-black">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="py-12 md:py-16">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
              
              {/* Exclusive section */}
              <div className="w-full lg:w-[18%] flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold leading-[30px] text-left text-white font-inter">
                      Exclusive
                    </h2>
                    <h3 className="text-xl font-medium leading-[30px] text-left text-white">
                      Subscribe
                    </h3>
                  </div>
                  <p className="text-base font-normal leading-6 text-left text-white">
                    Get 10% off your first order
                  </p>
                </div>
                
                {/* Email subscription */}
                <div className="flex items-center border border-white rounded-sm p-3 gap-3">
                  <EditText
                    placeholder="Enter your email"
                    className="bg-transparent border-none text-white placeholder-gray-400 flex-1 p-0 focus:ring-0"
                    text_color="#f9f9f966"
                    layout_gap=""
                    layout_width="100%"
                    padding="0"
                    position="relative"
                    variant="default"
                    size="medium"
                    value=""
                    onChange={() => {}}
                  />
                  <img 
                    src="/images/img_iconsend.svg" 
                    alt="send" 
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                  />
                </div>
              </div>

              {/* Support and Account sections */}
              <div className="w-full lg:w-[32%] flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  {/* Support section */}
                  <div className="flex flex-col gap-4 w-full md:w-[44%]">
                    <h3 className="text-xl font-medium leading-[30px] text-left text-white">
                      Support
                    </h3>
                    <address className="text-base font-normal leading-6 text-left text-white not-italic">
                      111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </address>
                  </div>
                  
                  {/* Account section */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <h3 className="text-xl font-medium leading-[30px] text-left text-white">
                      Account
                    </h3>
                    <nav className="flex flex-col gap-4">
                      <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                        My Account
                      </a>
                      <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                        Login / Register
                      </a>
                    </nav>
                  </div>
                </div>
                
                {/* Contact info and additional links */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex flex-col gap-4">
                    <a href="mailto:exclusive@gmail.com" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                      exclusive@gmail.com
                    </a>
                    <a href="tel:+8801588888999" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                      +88015-88888-9999
                    </a>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                      Cart
                    </a>
                    <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                      Wishlist
                    </a>
                    <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80 mt-4">
                      Shop
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links section */}
              <div className="w-full lg:w-[8%] flex flex-col gap-5 items-center lg:items-start">
                <h3 className="text-xl font-medium leading-[30px] text-left text-white">
                  Quick Link
                </h3>
                <nav className="flex flex-col gap-4">
                  <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                    Terms Of Use
                  </a>
                  <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                    FAQ
                  </a>
                  <a href="#" className="text-base font-normal leading-6 text-left text-white hover:opacity-80">
                    Contact
                  </a>
                </nav>
              </div>

              {/* Download App section */}
              <div className="w-full lg:w-[16%] flex flex-col gap-4">
                <h3 className="text-xl font-medium leading-[30px] text-left text-white">
                  Download App
                </h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-xs font-medium leading-[18px] text-left text-gray-300">
                      Save $3 with App New User Only
                    </p>
                    
                    <div className="flex justify-between items-center gap-4 w-full">
                      {/* QR Code */}
                      <div className="bg-black p-1">
                        <img 
                          src="/images/img_qrcode_1.png" 
                          alt="QR Code" 
                          className="w-19 h-19"
                        />
                      </div>
                      
                      {/* App store buttons */}
                      <div className="flex flex-col gap-1">
                        <div className="bg-black p-1 rounded-sm">
                          <img 
                            src="/images/img_png_transparent.png" 
                            alt="Google Play Store" 
                            className="w-26 h-8 rounded-sm"
                          />
                        </div>
                        <div className="bg-black">
                          <img 
                            src="/images/img_download_appstore.png" 
                            alt="App Store" 
                            className="w-26 h-8 rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social media icons */}
                  <div className="flex justify-between items-center gap-3 w-[84%]">
                    <a href="#" className="hover:opacity-80">
                      <img 
                        src="/images/img_icon_facebook.svg" 
                        alt="Facebook" 
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <img 
                        src="/images/img_icon_twitter.svg" 
                        alt="Twitter" 
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <img 
                        src="/images/img_icon_instagram.svg" 
                        alt="Instagram" 
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <img 
                        src="/images/img_icon_linkedin.svg" 
                        alt="LinkedIn" 
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="flex flex-col gap-4 items-center py-4 border-t border-white">
            <div className="flex gap-1 justify-center items-center">
              <img 
                src="/images/img_icon_copyright.svg" 
                alt="copyright" 
                className="w-5 h-5"
              />
              <span className="text-base font-normal leading-6 text-left text-white">
                Copyright Rimel 2022. All right reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;