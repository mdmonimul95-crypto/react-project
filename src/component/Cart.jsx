import React from 'react';

const Cart = ({carts,setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => {
    const price = parseFloat((item.price || "0").toString().replace("$", ""));
    return sum + price;
    }, 0);
    const handlePayment = () =>{
        setCarts([])
    }

    console.log( totalPrice)
    return (
        <div className='mx-[120px] my-[50px] shadow-2xl border-2 space-y-2 rounded-xl px-8 border-gray-200'>
            <h1 className="font-bold text-[24px] font-manrope text-[#101727]">Your Cart</h1>
            {
                carts.map(item => <div key={item.id} className='bg-gray-300 flex justify-between rounded-xl'>
                    <div className='mx-4 flex gap-2 items-center'>
                        <div><img className='bg-white p-3 w-20 h-20 rounded-full object-contain' src={item.icon} alt="iconpic" /></div>
                        <div>
                            <div className="font-semibold text-[20px] not-italic text-[#101727] font-manrope">{item.name}</div>
                            <div className="font-medium text-[16px] not-italic text-[#627382] font-manrope">{item.price}</div>
                        </div>
                    </div>
                    <div className="mx-2 flex items-center leading-[1.2] font-bold text-[16px] not-italic text-[#ff3980] font-manrope">removed</div>
                    
                    
                </div>
                

                )
            }
            <div className='flex justify-between'>
                        <p>Total</p>
                        <h2>${totalPrice}</h2>
            </div>
            <div className='text-white bg-[#4F39F6] py-1 rounded-2xl flex justify-center items-center'> <button onClick={handlePayment} className='w-[1040px]' >Proceed to Checkout</button></div>
        </div>
    );
};

export default Cart;