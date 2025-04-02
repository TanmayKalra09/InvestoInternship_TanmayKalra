"use client";
import { useState, useEffect } from 'react';
import './Pricing.css'; 

const Pricing = () => {
  const [pageviews, setPageviews] = useState(0); 
  const [isYearly, setIsYearly] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
  });


  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const prices = [8, 12, 16, 24, 36];
  const pageviewRanges = ["10K", "50K", "100K", "500K", "1000K"];

  const handleSliderChange = (e) => {
    setPageviews(Number(e.target.value));
  };

  const handleToggleChange = () => {
    setIsYearly((prev) => !prev);
  };

  const basePrice = prices[pageviews];
  const discountedPrice = isYearly ? basePrice * 0.75 : basePrice;
  const sliderPercentage = (pageviews / (prices.length - 1)) * 100;
  const sliderBackground = `linear-gradient(to right, #a2f3eb ${sliderPercentage}%, #e0e0e0 ${sliderPercentage}%)`;

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
    }`}
    style={{
      backgroundImage: isDarkMode ? `url()` : `url(/bg-pattern.svg)`,
      backgroundSize: '110% 50%', 
      backgroundPosition: 'top 0',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="absolute top-5 right-5 flex items-center">
        <span className="text-sm font-bold mr-2">Dark Mode</span>
        <div onClick={toggleDarkMode} className="relative w-12 h-6 cursor-pointer">
          <div className={`w-full h-full rounded-full p-1 transition-colors ${
            isDarkMode ? 'bg-[#12d5c7]' : 'bg-gray-200'
          }`}>
            <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
              isDarkMode ? 'translate-x-6' : 'translate-x-0'
            }`}></div>
          </div>
        </div>
      </div>
      <div className="text-center mb-6 sm:mb-10">
      <img 
      src="/pattern-circles.svg" 
      className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 sm:mt-15 w-1/3 sm:max-w-[150px] opacity-50"
    />
        <h1 className={`text-xl sm:text-3xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-[#2d4862]"}`}>Simple, traffic-based pricing</h1>
        <p className="text-sm sm:text-base text-[#8b8e9a] font-bold">Sign-up for our 30-day trial. No credit card required.</p>
      </div>

    <div className={`w-full sm:w-xl h-auto mb-10 sm:mb-20 mx-auto p-6 sm:p-10 shadow-lg rounded-lg transition-all duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-[#8b8e9a] font-bold">
            <p className="text-left">{pageviewRanges[pageviews].toLocaleString()} PAGEVIEWS</p>
            <div className="text-2xl sm:text-4xl font-bold flex items-baseline text-[#2d4862]">
              <span className={`${isDarkMode ? "text-white" : "text-[#2d4862]"}`}>${discountedPrice.toFixed(2)}</span>
              <span className="text-lg ml-1 text-[#8b8e9a]">/ monthly</span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="4"
            value={pageviews}
            onChange={handleSliderChange}
            className="w-full mb-6 slider-custom "
            style={{ background: sliderBackground }}
          />
          
          <div className="mt-6 flex items-center justify-center ml-0 sm:ml-14">
            <span className="mr-2 text-xs sm:text-sm">Monthly Billing</span>
            <div
              onClick={handleToggleChange}
              className="relative cursor-pointer"
            >
              <div className={`toggle-wrapper w-12 h-6 rounded-full p-1 transition-colors ${
                isYearly ? 'bg-[#12d5c7]' : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                <div
                  className={`toggle-circle w-4 h-4 bg-white  rounded-full transform transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </div>
            </div>
            <span className="ml-2 text-xs sm:text-sm">Yearly Billing</span>
            <span className="px-1 py-0.1 bg-orange-100 rounded-3xl text-orange-500 ml-2 mt-0.5 font-bold ">
              <div className='text-xs'>25% Discount
              </div>
            </span>
          </div>

          <hr className="my-7 " />

          <div className="flex flex-col sm:flex-row justify-between items-start mt-6">
            <div className="flex flex-col space-y-4 w-full sm:w-1/2">
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span className='text-sm'>Unlimited websites</span>
              </div>
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span className='text-sm'>100% data ownership</span>
              </div>
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span className='text-sm'>Email reports</span>
              </div>
            </div>
            <button className={`px-6 py-3 rounded-3xl mt-6 sm:mt-0 cursor-pointer transition-all duration-300 ${
              isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-[#2d4862] text-white hover:bg-[#233645]"
            }`}>
              Start my Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;