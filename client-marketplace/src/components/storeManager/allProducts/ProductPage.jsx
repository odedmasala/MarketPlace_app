import React from 'react'
import StoreManagerProduct from "./product/StoreManagerProduct";

const ProductPage = () => {
    const products = [
        {
          name: "בצל סגול",
          image:
            "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56e76394f6e8791100e7ffe4_365_-red-onion.2.jpg",
          description: "בלה בהל בהלבלהל בלה בלה בלה ",
          price: 10,
        },
        {
          name: "תפוז",
          image: "https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg",
          description: "בלה בהל בהלבלהל בלה בלה בלה ",
          price: 10,
        },
      ];
  return (
      <div className="flex flex-wrap justify-around ">
      {products.map((product,i) => {
        return (
          <StoreManagerProduct key={i} product={product}/>
        );
      })}
      {products.map((product,i) => {
        return (
          <StoreManagerProduct key={i} product={product}/>
        );
      })}
      {products.map((product,i) => {
        return (
          <StoreManagerProduct key={i} product={product}/>
        );
      })}
      {products.map((product,i) => {
        return (
          <StoreManagerProduct key={i} product={product}/>
        );
      })}
      {products.map((product,i) => {
        return (
          <StoreManagerProduct key={i} product={product}/>
        );
      })}
    </div>
  )
}

export default ProductPage