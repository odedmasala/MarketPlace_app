import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderStore from '../../components/header/HeaderStore';
import Product from '../../components/product/Product';
import Cart from '../../components/cart/Cart';
import FooterContainer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';

const Store = () => {
  const [sections, setSections] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState({});
  const { id } = useParams();

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
  const categoryFilter = (id) => {
    setShowProducts(products.filter((product) => product.subCategory === id));
  };

  useEffect(() => {
    findSections();
    findProducts();
  }, [id]);

  const getStoreById = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/store/${id}`);
    setStore(data);
  };

  useEffect(() => {
    getStoreById();
  }, []);

  return (
    <div className="bg-white w-full max-w-full">
      <HeaderStore storeDetails={store} />
      <div className="flex flex-col items-center mt-4">
        <p className="my-3 text-xl">
          נמצאו <span className="text-[#0899A5]">{products.length}</span> מוצרים
        </p>
        <div className="flex flex-row-reverse md:w-11/12  justify-between items-start">
          <div className="w-12/12 md:w-9/12 flex flex-wrap justify-around">
            {products.map((product) => (
              <Product
                productData={product}
                key={product._id}
                storeData={store}
              />
            ))}
          </div>
          <div className="hidden md:flex md:w-3/12 mr-2">
            <Cart />
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default Store;
