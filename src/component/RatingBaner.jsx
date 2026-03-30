import React from 'react';

const RatingBaner = () => {
    return (
        <>
         <div className='bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] p-4 text-white '>
            <div className='mx-[5px] sm:mx-[200px] flex justify-between p-4'>
              <div>
                <p className='leading-[1.2] font-extrabold text-[60px] not-italic font-[Manrope]'>50K+</p>
                <p className='leading-[1.2] font-medium text-[24px] not-italic font-[Manrope]'>Active Users</p>
              </div>
              <div className="h-[80px] w-px bg-white flex justify-center mt-3"></div>
              <div>
                <p className='leading-[1.2] font-extrabold text-[60px] not-italic font-[Manrope]'>200+</p>
                <p className='leading-[1.2] font-medium text-[24px] not-italic font-[Manrope]'>Premium Tools</p>
              </div>
              <div className="h-[80px] w-px bg-white flex justify-center mt-3" ></div>
              <div>
                <p className='leading-[1.2] font-extrabold text-[60px] not-italic font-[Manrope]'>4.9</p>
                <p className='leading-[1.2] font-medium text-[24px] not-italic font-[Manrope]'>Rating</p>
              </div>
             </div>
            
         </div>
        </>
    );
};

export default RatingBaner;