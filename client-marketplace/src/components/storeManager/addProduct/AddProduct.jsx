import axios from "axios";
import React, { useState } from "react";
import Product from "../../product/Product";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: { url: "" },
    price: "",
    description: "",
    subCategory: "",
    weight: "",
    unit: "",
    gander: "",
    quantity: "",
    gender: "",
    manufacture: "",
    brand: "",
    active: false,
  });
  const handleInput = (e) => {
    if (e.target.name === "image") {
      setProduct({ ...product, image: { url: e.target.value } });
    } else if (e.target.name === "active") {
      setProduct({ ...product, active:  e.target.checked  });
    }else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

const deleteAllChanges =()=>{
setProduct({
  name: "",
  image: { url: "" },
  price: "",
  description: "",
  subCategory: "",
  weight: "",
  unit: "",
  gander: "",
  quantity: "",
  gender: "",
  manufacture: "",
  brand: "",
  active: false,
})
}


const saveProduct = async()=>{
  const result = axios.post("http....")
}

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">יצירה של מוצר</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">תמונה </p>
            <input 
            value={product.image.url}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              name="image"
              type="text"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">שם המוצר </p>
            <input 
            value={product.name}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">תיאור המוצר </p>
            <input 
            value={product.description}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="description"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">מחיר </p>
            <input 
            value={product.price}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              min={0}
              onChange={handleInput}
              type="number"
              name="price"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">קטגוריה </p>
            <input 
            value={product.subCategory}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="subCategory"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">יצרן </p>
            <input 
            value={product.manufacture}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="manufacture"
            />
          </div>
          
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <p className="text-end">זמין </p>
            <input 
            checked={product.active}
              onClick={handleInput}
              type="checkBox"
              name="active"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <button className="border-2 p-2 bg-green-500 cursor-pointer text-white font-bold">יצירה</button>
            <button onClick={deleteAllChanges} className="border-2 p-2 bg-red-500 cursor-pointer text-white font-bold">מחיקה</button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col  md:w-[40%]">
          <h1 className="my-3 text-xl font-medium">תצוגה מקדימה</h1>
          <Product productData={product} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
