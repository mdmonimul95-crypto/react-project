import React from 'react';
import checkpng from '../../assets/products/Check.png'
import checkw from '../../assets/products/check white.png'

const Transparent = () => {
    return (
        <>
               <div className='space-y-[40px] lg:mx-[200px] md:mx-[150px] sm:mx-[50px] lg:mb-[120px] mx-20px' >
                <div className='space-y-3 max-md:mx-8 text-center'>
                  <div className="flex justify-center items-center text-center leading-[1.2] font-bold text-5xl font-manrope text-[#101727]">Simple, Transparent Pricing</div>
                  <div className="flex justify-center items-center font-normal text-[16px] font-manrope text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</div>
                </div>
                <div className='grid grid-cols-1 max-md:mx-8 md:grid-cols-2 gap-7 mb-[10px] lg:grid-cols-3 '>
                   <div className=' space-y-4 px-5 pt-8 border-2 border-neutral-300 shadow-xl rounded-xl'>
                     <div className='space-y-2'><p className="leading-[1.2] font-bold text-[24px] not-italic text-[#101727] font-manrope">Starter</p><p className="leading-[1.25] font-normal text-[16px] not-italic text-[#627382] font-manrope">Perfect for getting started</p></div>
                     <div className="flex"><p className="leading-[1.2] font-bold text-[40px] not-italic text-[#101727] font-manrope">$0</p><p className='mt-5'>/month</p></div>
                     <div className=''>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Access to 10 free tools</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Basic templates</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Community support</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>1 project per month</p></div>
                      
                     </div>
                     <button className="font-bold text-[16px] not-italic font-manrope px-3 w-full flex justify-center items-center   py-2 mt-15 rounded-full bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white">Get Started Free</button>
                  </div>
                   <div className='bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white space-y-4 px-5 py-8 border-2 border-blue-300 shadow-xl rounded-xl'>
                     <div className='space-y-2'><p className="leading-[1.2] font-bold text-[24px] not-italic  font-manrope">Pro</p><p className="leading-[1.25] font-normal text-[16px] not-italic  font-manrope">Best for professionals</p><p className=" relative top-[-115px] left-17 font-medium text-[14px] not-italic text-[#BB4D00] bg-[#FEF3C6] font-manrope px-3 py-2 rounded-full w-fit">Most Popular</p></div>
                     <div className="flex"><p className="leading-[1.2] font-bold text-[40px] not-italic  font-manrope">$29</p><p className='mt-5'>/month</p></div>
                     <div className=''>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Access to all premium tools</p></div>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Unlimited templates</p></div>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Priority support</p></div>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Unlimited projects</p></div>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Cloud sync</p></div>
                      <div className='flex gap-1'><img src={checkw} alt="check" /><p>Advanced analytics</p></div>
                      
                     </div>
                   <button className=" px-3 w-full py-2 mt-2 rounded-full bg-white border-2 border-[#4F39F6]">
                    <span className="font-bold text-[20px] not-italic font-manrope bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    Start Pro Trial
                    </span>
                   </button>
                  </div>
                   <div className='space-y-4 px-5 py-8 border-2 border-neutral-300 shadow-xl rounded-xl'>
                     <div className='space-y-2'><p className="leading-[1.2] font-bold text-[24px] not-italic text-[#101727] font-manrope">Enterprise</p><p className="leading-[1.25] font-normal text-[16px] not-italic text-[#627382] font-manrope">For teams and businesses</p></div>
                     <div className="flex"><p className="leading-[1.2] font-bold text-[40px] not-italic text-[#101727] font-manrope">$99</p><p className='mt-5'>/month</p></div>
                     <div className=''>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Everything in Pro</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Team collaboration</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Custom integrations</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Dedicated support</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>SLA guarantee</p></div>
                      <div className='flex gap-1'><img src={checkpng} alt="check" /><p>Custom branding</p></div>
                      
                     </div>
                     <button className="px-3 font-bold text-[16px] not-italic font-manrope w-full flex justify-center items-center ml-1  py-2 mt-2 rounded-full bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                  </div>
                
                   
                </div>
               </div>
               </>
    );
};

export default Transparent;