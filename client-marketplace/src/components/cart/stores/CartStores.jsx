import React from 'react'
import Products from '../products/Products'

const CartStores = ({store}) => {
  return (
    <>
        <div className='flex h-16 items-center justify-end bg-slate-100 p-2'>
            <h1 className='text-lg'>{store.name}</h1>
            <img className='h-full w-16 ml-6' src={store.imageUrl} alt="" />
        </div>
        <div>
            {store.products.map((product)=><Products key={product._id} product={product} storeId={store.id}/>)}
        </div>
        <div className='flex p-2'>
            <p className='border-t '>סה"כ : {1652} ש"ח</p>
        </div>
    </>
  )
}

export default CartStores