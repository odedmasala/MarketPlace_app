import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AmountButton from "../../../features/buttons/AmountButton";
import {
  addItem,
  getProductTotalPrice,
  removeItem,
  selectAllCartItems,
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
  const removeQuantityFromTheProduct = () => {
    const addProduct = { _id: product._id };

    dispatch(removeItem({ storeId, product: addProduct }));
  };
  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-10 items-center gap-4">
      <div className="col-span-4">
        <div className="grid grid-cols-1">
          <div className="w-full flex justify-center">
            <button className="bg-blue-800">מחיקה</button>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex">
              <div onClick={removeQuantityFromTheProduct}>
                <AmountButton button={"-"} />
              </div>
              <span>{productQuantity}</span>
              <div onClick={AddQuantityOfTheProduct}>
                <AmountButton button={"+"} />
              </div>
            </div>
          </div>
          <p className="w-full text-center mt-1">
            {" "}
            {parseFloat(productTotalPrice).toFixed(2)} ש"ח
          </p>
        </div>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col-reverse">
          <div className="flex items-center justify-between w-full">
            <p className="text-center text-xs">{`${truncateString(
              product.name,
              20
            )}`}</p>
          </div>
          <div className=" flex justify-center items-center w-full">
            <img className="h-full w-4/12" src={product.image.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
