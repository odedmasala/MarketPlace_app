import React from "react";
import HeaderStore from "../header/HeaderStore";
import Product from "../product/Product";
import Cart from "../cart/Cart";

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
    </div>
  );
};

export default Store;
