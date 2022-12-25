import React, { useState } from "react";
import Product from "../../product/Product";


const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: {url:""},
    price: "",
    description: "",
  });
  const handleInput = (e) => {
    if(e.target.name==="image"){
      setProduct({ ...product,image:{ url : e.target.value} });

    }else{
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">יצירה של מוצר</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">תמונה </p>
            <input  className="text-end  border-r-0 border-t-0 border-l-0 " onChange={handleInput} name="image" type="text" />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">שם המוצר </p>
            <input className="text-end  border-r-0 border-t-0 border-l-0 " onChange={handleInput} type="text" name="name" />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">תיאור המוצר </p>
            <input className="text-end  border-r-0 border-t-0 border-l-0 " onChange={handleInput} type="text" name="description" />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">מחיר </p>
            <input className="text-end  border-r-0 border-t-0 border-l-0 " min={0} onChange={handleInput} type="number" name="price" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col  md:w-[40%]">
          <h1 className="my-3 text-xl font-medium">תצוגה מקדימה</h1>
          <Product productData={product}/>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
