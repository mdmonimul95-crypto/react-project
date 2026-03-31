import React from 'react';
import banarpic from '../../assets/products/banner.png';
import group5 from '../../assets/products/Group 5.png';
import playpng from '../../assets/products/Play.png';

const BanarSection = () => {
    return (
        <div className=' pb-10 sm:flex justify-between lg:mx-[150px] max-[425px]:w-3xl mx-10 sm:my-[60px] gap-[10px]  '>
            <div className='flex-1 flex flex-col items-start justify-center lg:w-[640px]'>
                <div className='flex justify-between items-center gap-[5px] bg-[#e1e7ff] px-[16px] py-[8px] rounded-3xl'>
                    <div><img src={group5} alt="group5logo" /></div>
                    <div className="not-italic font-medium text-base font-['Manrope'] text-transparent bg-clip-text bg-gradient-to-b from-[#4f39f6] to-[#9514fa]">New: AI-Powered Tools Available</div>
                </div>
                <div className='not-italic font-bold text-[60px] leading-[1.1667] text-[#101727] font-manrope  '>Supercharge Your Digital Workflow</div>
                <div className='pt-5 not-italic font-normal text-[17px] text-[#627382] font-manrope'>Access premium AI tools, design assets, templates, and productivity
                  software—all in one place. Start creating faster today.<br></br>
                  Explore Products
                </div>
                <div className='flex gap-2 pt-3'>
                    <div className='bg-[#4F39F6] text-white py-2 px-3 rounded-full font-manrope font-bold text-[16px] not-italic text-white'>Explore Products</div>
                    
                    <button className="flex items-center gap-2 p-2 not-italic font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-b from-[#4f39f6] to-[#9514fa] font-manrope border-2 rounded-full border-blue-600 ">
                      <img src={playpng} alt="playpng" className="w-5 h-5" />
                      Watch Demo
                    </button>
                    
                </div>
            </div>
            <div className='py-[40px] w-full lg:w-[500px] h-[590px]' ><img src={banarpic} alt="banarpic" /></div>
        </div>
    );
};

export default BanarSection;