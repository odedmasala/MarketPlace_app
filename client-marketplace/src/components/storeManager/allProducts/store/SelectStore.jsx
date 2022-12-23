import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectStore = ({store}) => {
    const navigate =useNavigate()
  return (
    <>
    <button onClick={()=>navigate(`/storeManager/section/${store.id}`)} className='m-3 text-white bg-green-500 p-4'>
        {store.name}
        
    </button>

    
    </>
  )
}

export default SelectStore