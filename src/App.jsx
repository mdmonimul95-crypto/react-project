

import { useState } from 'react'
import './App.css'
import BanarSection from './component/BanarSection'
import Models from './component/models'
import NavBar from './component/NavBar'
import RatingBaner from './component/RatingBaner'
import ToolsBarSection from './component/ToolsBarSection'
import Cart from './component/Cart'
import GetStart from './component/getStart'
import Transparent from './component/Transparent'


const getModels = async() => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = getModels()

function App() {
 const [selectedType,setSelected] = useState("Products");
 const [carts,setCarts] = useState([]);
//  console.log(carts)

  return (
    <>
     <NavBar carts={carts}/>
     <BanarSection/>
     <RatingBaner/>
     <ToolsBarSection/>
     {/* name of each tab group should be unique */}
     <div className="tabs flex justify-center items-center my-[20px]">
   <label
  className={`cursor-pointer ${
    selectedType === "Products"
      ? "bg-[#4F39F6] text-white"
      : "bg-gray-300 text-black"
  } py-2 font-semibold flex justify-center items-center text-[20px] font-manrope px-4 rounded-full`}
>
  <input
    type="radio"
    name="my_tabs_1"
    onClick={() => setSelected("Products")}
    className="hidden"
  />
  Products
</label>
  <label
  className={`cursor-pointer ${
    selectedType === "Cart"
      ? "bg-[#4F39F6] text-white"
      : "bg-gray-300 text-black"
  } py-2 font-semibold flex justify-center items-center text-[20px] font-manrope px-4 rounded-full`}
>
  <input
    type="radio"
    name="my_tabs_1"
    onClick={() => setSelected("Cart")}
    className="hidden"
  />
  Cart ({carts.length})
</label>
  
     </div>
     {selectedType === "Products" ? <Models modelPromise={modelPromise}  carts={carts} setCarts={setCarts} /> :
      <Cart setCarts={setCarts}  carts={carts}/> }
      <GetStart/>
      <Transparent/>
    </>
  )
}

export default App
