import React from 'react';

const RatingBaner = () => {
    return (
        <>
        <div className="bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white">
  
    <div className="flex flex-col max-[500px]:gap-5 md:flex-row items-center justify-between text-center md:mx-[200px] mx-[20px] py-10">
    
    {/* Item 1 */}
    <div className="flex flex-col items-center">
      <p className="leading-[1.2] font-extrabold text-[60px] font-[Manrope]">50K+</p>
      <p className="leading-[1.2] font-medium text-[20px] text-gray-200">Active Users</p>
    </div>

    {/* Divider */}
    <div className="hidden md:flex h-[50px] w-px bg-white/40 mx-6"></div>

    {/* Item 2 */}
    <div className="flex flex-col items-center">
      <p className="leading-[1.2] font-extrabold text-[60px] font-[Manrope]">200+</p>
      <p className="leading-[1.2] font-medium text-[20px] text-gray-200">Premium Tools</p>
    </div>

    {/* Divider */}
    <div className="hidden md:flex h-[50px] w-px bg-white/40 mx-6"></div>

    {/* Item 3 */}
    <div className="flex flex-col items-center">
      <p className="leading-[1.2] font-extrabold text-[60px] font-[Manrope]">4.9</p>
      <p className="leading-[1.2] font-medium text-[20px] text-gray-200">Rating</p>
    </div>

  </div>

  </div>
        </>
    );
};

export default RatingBaner;