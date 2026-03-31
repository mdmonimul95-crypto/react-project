import React from 'react';
import insta from '../../assets/products/Instagram.png'
import facebook from '../../assets/products/Facebook.png'
import x from '../../assets/products/Twitter.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
         <div className='lg:px-[200px] md:px-[100px] lg:pb-[50px]  space-y-15 px-60px pt-100px lg:pt-[120px]  '>
            <div className='grid grid-cols-1 max-md:px-8 md:grid-cols-2 gap-7 pb-[10px] lg:grid-cols-3 '>
               <div className='space-y-3'>
                 <div className="font-bold text-[36px]  font-manrope">DigiTools</div>
                 <p className="font-normal text-[16px] not-italic font-manrope">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
               </div>                    
               <div className='flex justify-between mx-7'>
                 <div className='space-y-2'>
                    <p className="font-medium text-[20px]  not-italic font-manrope">Product</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Features</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Pricing</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Templates</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Integrations</p>
                 </div>
                 <div className='space-y-2'>
                    <p className="font-medium text-[20px]  not-italic font-manrope">Company</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">About</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Blog</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Careers</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Press</p>
                 </div>
               </div>                    
               <div className='flex justify-between  ml-7'>
                 <div  className='space-y-2'>
                    <p className="font-medium text-[20px]  not-italic font-manrope">Resources</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Documentation</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Help Center</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Community</p>
                    <p className="font-normal text-[16px] not-italic font-manrope">Contact</p>
                 </div>
                 <div className='space-y-2'>
                    <div className="font-medium text-[20px]  not-italic font-manrope">Social Links</div>
                    <div className='flex gap-2'>
                        <img src={insta} alt="instai-icon" />
                        <img src={facebook} alt="facebook-icon" />
                        <img src={x} alt="x-icon" />
                    </div>
                 </div>
               </div>                    
            </div>
            <div className='flex justify-between'>
                <div>© 2026 Digitools. All rights reserved.</div>
                <div className='flex gap-6'>
                    <p>Privacy Policy </p>
                    <p> Terms of Service</p>
                    <p>   Cookies</p>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Footer;