import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectStore = ({store}) => {
    const navigate =useNavigate()
  return (
    <>
    <div style={{backgroundImage:`url(${store.coverImage})`}} onClick={()=>navigate(`/storeManager/section/${store.bnNumber}`)} className='m-3 bg-no-repeat text-center w-56 font-medium text-white p-4'>
        {store.name}
        
    </div>

    
    </>
  )
}

export default SelectStore