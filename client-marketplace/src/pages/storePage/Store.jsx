import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderStore from "../../components/header/HeaderStore";
import Product from "../../components/product/Product";
import Cart from "../../components/cart/Cart";
import FooterContainer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

const Store = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const getProductsInStore = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/products?storeId=${id}`
    );
    setProducts(data);
  };

  useEffect(() => {
    getProductsInStore();
  }, []);

  return (
    <div className="bg-white">
      <HeaderStore />
      <div className="flex flex-col items-center mt-4">
        <p>נמצאו {products.length} מוצרים</p>
        <div className="flex flex-row-reverse md:px-48 md:py-8 justify-between items-start">
          <div className="md:w-[70%]  flex flex-wrap justify-between">
            {products.map((product) => (
              <Product productData={product} key={product._id} />
            ))}
          </div>
          <div className="md:w-[29%] hidden md:block">
            <Cart />
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default Store;
