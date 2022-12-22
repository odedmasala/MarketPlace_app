import React, { useState } from "react";
import Product from "../../product/Product";


const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">יצירה של מוצר</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">תמונה </p>
            <input onClick={handleInput} name="image" type="text" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">שם המוצר </p>
            <input onClick={handleInput} type="text" name="name" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">תיאור המוצר </p>
            <input onClick={handleInput} type="text" name="description" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">מחיר </p>
            <input onClick={handleInput} type="number" name="price" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col  md:w-[40%]">
          <h1>תצוגה מקדימה</h1>
          <Product product={product}/>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
