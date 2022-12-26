import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [section,setSection] = useState([])
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
const findSection = async()=>{
  const {data} = await axios.get(`http://localhost:8001/api/section?storeId=63a44ddaa01e048b498ff5f6`)
  setSection(data);
}

useEffect(()=>{
findSection()
},[])

const saveProduct = async()=>{
  const result = axios.post("http....")
}

  return (
    <div className="bg-white py-5">
      <div>
        <h1 className="text-4xl font-bold text-center">מוצר חדש</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row-reverse md:justify-between">
        <div className="md:w-[60%]">
          <div className="input-product py-3 px-2">
            <label className="text-end">תמונה </label>
            <input 
            
              className="w-full text-end border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              name="image"
              type="file"
            />
          </div>
          <div className="input-product py-3 px-2">
            <p className="text-end">שם המוצר </p>
            <input 
            value={product.name}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="name"
            />
          </div>
          <div className="input-product py-3 px-2">
            <p className="text-end">תיאור המוצר </p>
            <input 
            value={product.description}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="description"
            />
          </div>
          <div className="input-product py-3 px-2">
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
          <div className="input-product py-3 px-2">
            <p className="text-end">קטגוריה </p>
            <select name="subCategory" onClick={handleInput} className="text-right">
              {
                section.map(element=><option key={element._id}  value={element._id}>{element.name}</option>)
              }
              
            </select>
            
          </div>
          <div className="input-product py-3 px-2">
            <p className="text-end">יצרן </p>
            <input 
            value={product.manufacture}
              className="text-end  border-r-0 border-t-0 border-l-0 "
              onChange={handleInput}
              type="text"
              name="manufacture"
            />
          </div>
          
          <div className="input-product py-3 px-2">
            <p className="text-end">זמין </p>
            <input 
            checked={product.active}
              onChange={handleInput}
              type="checkBox"
              name="active"
            />
          </div>
          <div className="flex flex-row-reverse items-baseline justify-between py-3 px-2">
            <button onClick={deleteAllChanges} className="button-form-product underline">איפוס</button>
            <button className="button-form-product bg-green-400 w-1/3 hover:text-white">יצירה</button>
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
