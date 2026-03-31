import React from 'react';
import empty from '../../assets/products/shopping-new.png'

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => {
    const price = parseFloat((item.price || "0").toString().replace("$", ""));
    return sum + price;
  }, 0);

  const handlePayment = () => {
    setCarts([]);
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter(allude => allude.id !== item.id);
    setCarts(filteredArray);
    console.log(filteredArray);
  };

  return (
    <div className='mx-[120px] my-[50px] shadow-2xl border-2 space-y-4 rounded-xl px-8 border-gray-200'>
      <h1 className="font-bold text-[24px] font-manrope text-[#101727]">Your Cart</h1>

      {carts.length > 0 ? (
        <>
          {carts.map(item => (
            <div key={item.id} className='bg-gray-300 flex justify-between rounded-xl'>
              <div className='mx-4 flex gap-3 items-center'>
                <div>
                  <img
                    className='bg-white p-3 w-20 h-20 rounded-full object-contain'
                    src={item.icon}
                    alt="iconpic"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[20px] not-italic text-[#101727] font-manrope">{item.name}</div>
                  <div className="font-medium text-[16px] not-italic text-[#627382] font-manrope">{item.price}</div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item)}
                className="mx-2 flex items-center leading-[1.2] font-bold text-[16px] not-italic text-[#ff3980] font-manrope"
              >
                Remove
              </button>
            </div>
          ))}

          <div className='flex justify-between mt-4'>
            <p>Total</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>

          <div className='text-white bg-[#4F39F6] py-1 rounded-2xl flex justify-center items-center mt-2'>
            <button onClick={handlePayment} className='w-[1040px]'>
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center lg:my-10 '>
          <div>
            <img className='w-[80px] h-[80px]' src={empty} alt="empty" />
          </div>
          <div className="font-semibold text-[28px] font-manrope text-[#101727]">
            Your cart is empty
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;