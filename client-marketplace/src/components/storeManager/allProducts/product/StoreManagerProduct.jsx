import React,{ useState } from 'react'
import PopStoreManagerProduct from './PopStoreManagerProduct'

const StoreManagerProduct = ({product}) => {
  const [showPopUp, setShowPopUp] = useState(false)
  const handleModal = ()=>{
      setShowPopUp(!showPopUp)
  }
  return (
    
      <div  className="border mb-3 text-end p-5 flex flex-col w-[200px] ">
            <div className="grow flex items-end">
              <img className="w-40 " src={product.image.url} alt="" />
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
              <button className="text-red-600 hover:underline p-1 rounded cursor-pointer ">Delete</button>
              <button  className="text-green-500 hover:underline px-4 rounded" onClick={handleModal}>Update</button>
            </div>

          <PopStoreManagerProduct product={product} show={showPopUp} handleModal={handleModal}/>
          </div>
    
  )
}

export default StoreManagerProduct