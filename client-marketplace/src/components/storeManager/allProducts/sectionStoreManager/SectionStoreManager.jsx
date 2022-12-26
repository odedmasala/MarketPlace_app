import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StoreManagerProduct from "../product/StoreManagerProduct";
import SectionComponent from "./SectionComponent";

const SectionStoreManager = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  const findSections = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/section?storeId=${id}`
      
    );
    setSections(data);
  };
  const findProducts = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/products?storeId=${id}`
    );
    setProducts(data);
    setShowProducts(data);
  };
const categoryFilter =(id)=>{
setShowProducts(products.filter(product=>product.subCategory === id))
}
  useEffect(() => {
    findSections()
    findProducts()
}, [id]);

  return (
    <div>
        <div className="flex justify-end">
        <button onClick={()=>{setShowProducts(products)}} className="border-2 bg-green-600 hover:bg-green-400 p-3 text-white rounded font-bold">
                  כל המוצרים
                </button>
        </div>
      <div className="flex justify-between text-end">
        {sections.map((section) => {
          return (
            <SectionComponent key={section._id} section={section} categoryFilter={categoryFilter}/>
          );
        })}
      </div>
      <div className="my-7 flex flex-wrap justify-between">
        {
            showProducts.map(product=><StoreManagerProduct key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default SectionStoreManager;
