import React from 'react';
import logo1 from "../../assets/products/Group 6 (2).png"
import logo2 from "../../assets/products/Group 6.png"
import logo3 from "../../assets/products/Group 6 (1).png"
const GetStart = () => {
    return (
       <>
       <div className='space-y-[40px] lg:mx-[200px] md:mx-[150px] sm:mx-[50px] lg:mb-[120px] mx-20px' >
        <div className='space-y-3 max-md:mx-8 text-center'>
          <div className="flex justify-center items-center text-center leading-[1.2] font-bold text-5xl font-manrope text-[#101727]">Get Started in 3 Steps</div>
          <div className="flex justify-center items-center font-normal text-[16px] font-manrope text-[#627382]">Start using premium digital tools in minutes, not hours.</div>
        </div>
        <div className='grid grid-cols-1 max-md:mx-8 md:grid-cols-2 gap-7 mb-[10px] lg:grid-cols-3 '>
           <div className='space-y-2 px-2 py-16 border-2 border-neutral-300 shadow-xl rounded-xl'>
            <div className=' flex items-center justify-center'><img  src={logo1} alt="logo1" /></div>
            <div className="leading-[1.2] text-center font-bold text-[24px] not-italic font-manrope text-[#101727]">Create Account</div>
            <div className='text-center'>Sign up for free in seconds. No credit card required to get started.</div>
          </div>
           <div className='space-y-2 px-2 py-16 border-2 border-neutral-300 shadow-xl rounded-xl'>
            <div className=' flex items-center justify-center'><img src={logo2} alt="logo2" /></div>
            <div className="leading-[1.2] text-center font-bold text-[24px] not-italic font-manrope text-[#101727]">Choose Products</div>
            <div className='text-center'>Browse our catalog and select the tools that fit your needs.</div>
          </div>
           <div className='space-y-2 px-2 py-16 border-2 border-neutral-300 shadow-xl rounded-xl'>
            <div className=' flex items-center justify-center'><img src={logo3} alt="logo3" /></div>
            <div className="leading-[1.2] text-center font-bold text-[24px] not-italic font-manrope text-[#101727]">Start Creating </div>
            <div className='text-center'>Download and start using your premium  tools immediately.</div>
          </div> 
           
        </div>
       </div>
       </>
    );
};

export default GetStart;