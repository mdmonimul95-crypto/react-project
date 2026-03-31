
import { useState } from 'react';
import check from '../../assets/products/Check.png'
import checkIt from '../../assets/products/Check.png'
import { toast } from 'react-toastify';

const ModelCard = ({model,carts,setCarts}) => {
    const [isBuy,setIsBuy] = useState(false)
    const handleBuy = () => {
         setIsBuy(true);
         setCarts([...carts , model]);
         toast.success("added to carts")
    }
    return (
        
        <div  className=' p-[15px]  border-2 border-mist-200 rounded-xl shadow-xl'>
                        <div className='space-y-2  '>
                         <div className='flex justify-between'>
                             <div  className='text-2xl font-bold'><img className='w-15 h-15 p-2 border-2 border-gray-300 rounded-full' src={model.icon} alt="icon" /></div>
                             <div key={model.id} className={`flex justify-center items-center px-2 mb-8 ${
                                             model.tagType === "new"
                                           ? "bg-[#dbfce7FF] px-3 py-1 text-[#0a883eFF] rounded-full font-medium text-[14px] font-manrope"
                                          : model.tagType === "best seller"
                                        ? "bg-[#d6dcf5] px-4 text-[#301eba] rounded-full font-medium text-[14px] font-manrope"
                                                 : model.tagType === "popular"
                                             ? "bg-[#fef3c6FF] text-[#bb4d00FF] rounded-full font-medium text-[14px] font-manrope px-4"
                                                 : "bg-gray-300"
                             }`}>
                                {model.tagType}
                             </div>
                             </div>
                             <div  className="font-semibold text-[28px] font-manrope text-[#101727FF]">
                                 {model.name}
                             </div>
                             <div  className=" font-normal text-[20px] font-manrope text-[#627382FF]">
                               {model.description}
                             </div>
                             <div  className="flex font-bold text-[24px] font-manrope text-[#101727FF]">
                              {model.price}<div  className="mt-3 leading-[1.25] font-normal text-[18px] font-manrope text-[#627382FF]">/{model.period}</div>
                             </div>
                             <div>
                              <ul  className="list-disc">
                               {model.features.map((feature, index) => (
                                <li  key={`${feature}-${index}`} className="text-gray-700 font-medium flex gap-2"><img src={check} alt="check" /> {feature} </li>
                               ))}
                              </ul>
                             </div>
                              <div>
                                <button onClick={handleBuy} className={`leading-[1.2] font-bold text-[16px] not-italic font-manrope w-full text-white rounded-full p-2 transition duration-300 ${
                                isBuy ? "bg-emerald-600" : "bg-[#4F39F6] hover:bg-[#3a2cd6]"
                                }`}> { isBuy ? <> <img src={checkIt} alt="checkit" className='inline mb-1 ' /> Added to Cart</> : "Buy Now" } </button>
                              </div>
                        </div>
        
         </div>
        
    );
};

export default ModelCard;