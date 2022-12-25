import React from 'react'
import { useState } from 'react'
import ProductPopUp from '../../../product/ProductPopUp'
import PopStoreManagerProduct from './PopStoreManagerProduct'

const StoreManagerProduct = ({product}) => {
  const [showPopUp, setShowPopUp] = useState(false)
  const handleModal = ()=>{
      setShowPopUp(!showPopUp)
  }
  return (
    
      <div  className="border mb-3 text-end p-5 flex flex-col w-[200px] ">
            <div className="grow flex items-end">
              <img className="w-40 " src={product.image} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-xs ">{product.description}</p>

              <p>
                <span className="font-bold"> מחיר</span>
                <span className="mx-1">{product.price}</span>
                ש"ח
              </p>

            </div>
            <div className="flex justify-between mt-2">
              <button className="border border-black bg-red-700 text-white font-medium p-2 rounded hover:bg-red-400 cursor-pointer ">DELTET</button>
              <button className="border border-black bg-green-700 text-white font-medium p-2 rounded hover:bg-green-400 cursor-pointer " onClick={handleModal}>UPDATE</button>
            </div>

          <PopStoreManagerProduct product={product} show={showPopUp} handleModal={handleModal}/>
          </div>
    
  )
}

export default StoreManagerProduct