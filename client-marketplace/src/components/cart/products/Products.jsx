import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import AmountButton from "../../../features/buttons/AmountButton";
import {
  addItem,
  getProductTotalPrice,
  removeItem,
  selectAllCartItems,
  clearProduct,
} from "../../../redux/cart/cartSlice";
import { truncateString } from "../../../utils/index";
import { useEffect } from "react";
export default function Products({ product, storeId }) {
  const dispatch = useDispatch();
  const store = useSelector(selectAllCartItems)[storeId];
  const productTotalPrice = useSelector((state) =>
    getProductTotalPrice(state, product._id)
  );

  const productQuantity = product.quantity;
  //  Increase the amount of product
  const AddQuantityOfTheProduct = () => {
    dispatch(addItem({ storeId, product: { ...product, quantity: 1 } }));
  };
  const clearProductFunction = () => {
    dispatch(clearProduct({ storeId, product }));
  };
  const removeQuantityFromTheProduct = () => {
    const addProduct = { _id: product._id };

    dispatch(removeItem({ storeId, product: addProduct }));
  };
  useEffect(() => {}, []);
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-full">
        <div className="justify-center  flex-col-reverse flex">
          <div className="w-full flex justify-center my-3">
            <div className="flex">
              <AmountButton
                setCount={removeQuantityFromTheProduct}
                button={"-"}
              />
              <span className="text-base">{productQuantity}</span>
              <AmountButton setCount={AddQuantityOfTheProduct} button={"+"} />
            </div>
            <div
              onClick={clearProductFunction}
              className="w-full flex justify-center md:text-1xl p-1 text-red-300 cursor-pointer"
            >
              <MdOutlineRemoveShoppingCart />
            </div>
          </div>
          <p className=" text-center text-base mt-1">
            {parseFloat(productTotalPrice).toFixed(2)} ש"ח
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col">
          <div className=" flex justify-center items-center w-full">
            <img className="h-full w-8/12" src={product.image.url} alt="" />
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="text-center text-xs">{`${truncateString(
              product.name,
              20
            )}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
