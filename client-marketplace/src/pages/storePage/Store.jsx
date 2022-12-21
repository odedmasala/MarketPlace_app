import React from "react";
import HeaderStore from "../../components/header/HeaderStore";
import Product from "../../components/product/Product";
import Cart from "../../components/cart/Cart";
import FooterContainer from "../../components/footer/Footer";

const Store = () => {
  return (
    <div className="bg-white">
      <HeaderStore />
      <div className="flex flex-row-reverse md:px-48 md:py-8 justify-between items-start">
        <div className="md:w-[70%]  flex flex-wrap justify-between">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          
        </div>
        <div className="md:w-[29%] hidden md:block">
          <Cart />
        </div>
      </div>
      <FooterContainer/>
    </div>
  );
};

export default Store;
