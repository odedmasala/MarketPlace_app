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
      `${process.env.REACT_APP_BASE_URL}/api/section?storeId=${id}`
      
    );
    setSections(data);
  };
  const findProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/products?storeId=${id}`
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
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between flex-wrap text-end">
        {sections.map((section) => {
          return (
            <SectionComponent findProducts={findProducts} findSections={findSections} key={section._id} section={section} categoryFilter={categoryFilter}/>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button onClick={()=>{setShowProducts(products)}} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                  בטל סינון
                </button>
        </div>

      <div className="my-7 flex flex-wrap justify-between">
        {
            showProducts.map(product=><StoreManagerProduct findProducts={findProducts} key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default SectionStoreManager;
