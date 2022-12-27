import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getStoreTotalPrice, selectState } from "../../../redux/cart/cartSlice";
import Products from "../products/Products";

const CartStores = ({ store, activeIndex, indexStore, handleClick }) => {
  const state = useSelector((state) => state);
  const storeTotalPrice = useSelector((state) =>
    getStoreTotalPrice(state, store.id)
  );

  useEffect(() => {
  }, []);
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
            <div>
              <h1 className="text-sm ml-1">{store.name}</h1>
              <h1 className="text-sm ml-1 text-green-600"> ש"ח {parseFloat(storeTotalPrice).toFixed(2)}</h1>
            </div>
            <div className="w-4/12">
              <img className="w-[80%] md:w-[60%]" src={store.imageUrl} alt="" />
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

export default CartStores;
