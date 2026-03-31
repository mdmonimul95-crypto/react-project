import React from 'react';
import pic from '../../assets/DigiTools.png';
import cart from '../../assets/products/shopping-cart.png'
import primary from '../../assets/products/Primary Button_2.png'

const NavBar = ({carts}) => {
    return (
    <>
    
      <div className=' z-999 flex justify-between items-center sticky mx-auto  top-0 bg-white px-4  sm:px-5 md:px-10 lg:px-[150px] pt-5 pb-5  '>
      <div className='flex items-center p-0.5  pt-1 '><a className="flex  items-center w-[100px]  sm:w-auto"><img src={pic} alt="my pic" /></a></div>  
      <div className='hidden min-[1200px]:flex justify-between items-center gap-3'>
        <p className="font-['Manrope'] font-semibold text-[16px]">Products</p>
        <p className="font-['Manrope'] font-semibold text-[16px]">Features</p>
        <p className="font-['Manrope'] font-semibold text-[16px]">Pricing</p>
        <p className="font-['Manrope'] font-semibold text-[16px]">Testimonials</p>
        <p className="font-['Manrope'] font-semibold text-[16px]">FAQ</p>
      </div>  
      <div className='flex gap-3'>
        {carts.length > 0 && (
         <div className=" relative top-0.5 left-11 bg-red-400 text-white text-xs px-2 h-5 flex justify-center items-center w-5 rounded-full">
          {carts.length}
         </div>
         )}
        <div className='flex justify-center items-center '><a className="h-[22px] w-[22px] "><img className='h-[22px] w-[22px]' src={cart} alt="cart" /></a></div>
        <div className="flex text-xl items-center font-['Manrope'] font-semibold not-italic">Login</div>
        <div><a className="flex items-center justify-center text-xl w-[100px]  sm:w-auto "><img src={primary} alt="primary" /></a></div>
      </div>
      </div> 
      
    </>
    );
};


export default NavBar;