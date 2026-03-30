

import { useState } from 'react'
import './App.css'
import BanarSection from './component/BanarSection'
import Models from './component/Models'
import NavBar from './component/NavBar'
import RatingBaner from './component/RatingBaner'
import ToolsBarSection from './component/ToolsBarSection'
import Cart from './component/Cart'

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
     <NavBar/>
     <BanarSection/>
     <RatingBaner/>
     <ToolsBarSection/>
     {/* name of each tab group should be unique */}
 <div className="tabs flex justify-center items-center my-[20px]">
  <input type="radio" onClick={()=>setSelected("Products")} name="my_tabs_1" className={`tab ${selectedType ==="Products" ? "bg-[#4F39F6] py-0.5 text-white rounded-full" : "bg-gray-300 text-black py-0.5 rounded-full"} `} aria-label="Products" defaultChecked/>
  <input type="radio" onClick={()=>setSelected("Cart")} name="my_tabs_1" className={`tab ${selectedType ==="Cart" ? "bg-[#4F39F6] py-0.5 text-white rounded-full" : "bg-gray-300 text-black py-0.5 px-4  rounded-full"} `} aria-label="Cart (2)"  />
  
 </div>
     {selectedType === "Products" ? <Models modelPromise={modelPromise}  carts={carts} setCarts={setCarts} /> :
      <Cart setCarts={setCarts}  carts={carts}/> }
    </>
  )
}

export default App
