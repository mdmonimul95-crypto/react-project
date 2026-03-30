import React from 'react';

const ToolsBarSection = () => {
    return (
        <>
        <div className='mx-[200px] my-[120px]'>
           <div className='flex flex-col justify-center items-center gap-2'>
            <div className='flex justify-center font-bold text-[48px] font-manrope text-[#101727FF]'>Premium Digital Tools</div>
            <div className='flex justify-center text-center  leading-[1.25] text-[16px] font-manrope text-[#627382FF] text-wrap'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</div>
            <div className='flex justify-center p-0.5 gap-0.5 border-[2px] rounded-full items-center w-[200px] border-gray-100'>
                <div className='bg-[#4F39F6] text-white py-[5px] px-[10px]  rounded-full'>Products</div>
                <div className='  py-[5px] px-[10px]  rounded-full'>Cart (2)</div>
            </div>
           </div>
           <div> </div>
          </div>
        </>
    );
};

export default ToolsBarSection;