import axios from 'axios'
import React,{ useState } from 'react'
import { notify } from '../../../../utils'
import PopStoreManagerProduct from './PopStoreManagerProduct'

const StoreManagerProduct = ({product,findProducts}) => {
  const [showPopUp, setShowPopUp] = useState(false)
  const handleModal = ()=>{
      setShowPopUp(!showPopUp)
  }
  const deleteProduct = async ()=>{
    const {data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/products/${product._id}`)
    if (data) {
      notify(data);
      findProducts()
    }
  }
  return (
    
      <div  className="border mb-3 text-end p-5 flex flex-col w-[190px] ">
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
              <button onClick={deleteProduct} className="text-red-600 hover:underline p-1 rounded cursor-pointer ">Delete</button>
              <button  className="text-green-500 hover:underline px-4 rounded" onClick={handleModal}>Update</button>
            </div>

          <PopStoreManagerProduct findProducts={findProducts} product={product} show={showPopUp} handleModal={handleModal}/>
          </div>
    
  )
}

export default StoreManagerProduct