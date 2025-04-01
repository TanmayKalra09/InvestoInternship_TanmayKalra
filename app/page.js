"use client";
import { useState } from 'react';
import './Pricing.css'; // Make sure to include the custom CSS file

const Pricing = () => {
  const [pageviews, setPageviews] = useState(0); // Default: 10K
  const [isYearly, setIsYearly] = useState(false);

  const prices = [8, 12, 16, 24, 36];
  const pageviewRanges = [10000, 50000, 100000, 500000, 1000000];

  const handleSliderChange = (e) => {
    setPageviews(Number(e.target.value));
  };

  const handleToggleChange = () => {
    setIsYearly((prev) => !prev);
  };

  const basePrice = prices[pageviews];
  const discountedPrice = isYearly ? basePrice * 0.75 : basePrice;

  // Dynamically calculate the background for the slider based on its value
  const sliderBackground = `linear-gradient(to right, #a2f3eb ${pageviews * 25}%, #e0e0e0 ${pageviews * 25}%)`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    style={{
      backgroundImage: `url('/bg-pattern.svg')`,
      backgroundSize: '110% 50%', 
    backgroundPosition: 'top 0',
    backgroundRepeat: 'no-repeat',
    }}>
      <div className="text-center mb-25">
        <h1 className="text-3xl font-bold text-[#2d4862] mb-3">Simple, traffic-based pricing</h1>
        <p className="text-sm text-[#8b8e9a] font-bold">Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <div className="w-xl h-auto mb-20 mx-auto p-10 bg-white shadow-lg rounded-lg">
        <div className="text-center">

          {/* Price display moved inside the flex container */}
          <div className="flex justify-between items-center mb-6 text-[#8b8e9a] font-bold">
            <p className="text-left">Choose your pageviews</p>
            <div className="text-4xl font-bold flex items-baseline text-[#2d4862]">
              <span>${discountedPrice.toFixed(2)}</span>
              <span className="text-lg ml-1 text-[#8b8e9a]">/{isYearly ? 'year' : 'month'}</span>
            </div>
          </div>

          {/* Pageview slider with dynamic background */}
          <input
            type="range"
            min="0"
            max="4"
            value={pageviews}
            onChange={handleSliderChange}
            className="w-full mb-6 slider-custom"
            style={{ background: sliderBackground }}
          />
          
          {/* Switch for Yearly / Monthly */}
          <div className="mt-6 flex items-center justify-center ml-14">
            <span className="mr-2 text-sm">Monthly Billing</span>
            <div
              onClick={handleToggleChange}
              className="relative cursor-pointer"
            >
              <div className="toggle-wrapper w-12 h-6 bg-gray-200 rounded-full p-1">
                <div
                  className={`toggle-circle w-4 h-4 bg-white rounded-full transform transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </div>
            </div>
            <span className="ml-2 text-sm">Yearly Billing</span>
            <span className="px-1 py-0.1 bg-orange-100 rounded-3xl text-orange-500 ml-2 mt-0.5 font-bold ">
              <div className='text-xs'>25% Discount</div>
            </span>
          </div>

          {/* Line */}
          <hr className="my-7 border-black" />

          {/* Features list and button */}
          <div className="flex justify-between items-start mt-6">
            <div className="flex flex-col space-y-4 w-1/2">
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span>Unlimited websites</span>
              </div>
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span>100% data ownership</span>
              </div>
              <div className="flex items-center">
                <img src="/icon-check.svg" alt="check" className="mr-2" />
                <span>Email</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-500 rounded-3xl mt-6 text-white  hover:bg-blue-700 w-1/3 cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;