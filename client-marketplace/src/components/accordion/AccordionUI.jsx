import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowDownCircle,  BsArrowRightCircle } from "react-icons/bs";
import Products from "../cart/products/Products";

const AccordionUI = ({ store, activeIndex, indexStore, handleClick }) => {
  
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <div className="flex flex-row-reverse justify-between items-center  bg-slate-100 p-1">
          <div>
            <button onClick={() => handleClick(indexStore)}>
              {activeIndex === indexStore ? (
                <BsArrowDownCircle className="text-red-500" />
              ) : (
                <BsArrowRightCircle className=" text-green-500" />
              )}
            </button>
          </div>
          <div className="flex flex-row-reverse h-16 justify-end items-center">
            <h1 className="text-sm ml-1">{store.name}</h1>
            <div className="w-4/12">
              <img className="h-full w-full" src={store.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {activeIndex === indexStore &&
          store.products.map((product) => (
            <Products key={product._id} product={product} storeId={store.id} />
          ))}
      </div>
    </div>
  );
};

export default AccordionUI;
