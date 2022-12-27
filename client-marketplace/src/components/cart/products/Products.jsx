import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AmountButton from "../../../features/buttons/AmountButton";
import { removeItem } from "../../../redux/cart/cartSlice";
import { selectState } from "../../../redux/products/productSlice";
import { selectCartTotal } from "../../../redux/cart/cartSlice";

export default function Products({ product, storeId }) {
  const dispatch = useDispatch();
  const stateQ = useSelector(selectState);
  const [quantity, setQuantity] = useState(product.quantity);


  const deleteProduct = () => {
    dispatch(removeItem({ storeId: storeId, product: product }));
  };

  return (
    <div
      className="flex
    h-[60px] px-2 my-6 justify-between items-center text-sm"
    >
      <div className=" h-full flex flex-col justify-end items-center">
        <button onClick={deleteProduct}>מחיקה</button>
        <div className="flex">
          <AmountButton
            button={"-"}
            setCount={() => setQuantity(quantity - 1)}
          />
          <span>{quantity}</span>
          <AmountButton button={"+"} />
        </div>
        <p className="mt-1"> {parseFloat(product.price).toFixed(2)} ש"ח</p>
      </div>
      <div className=" flex items-end justify-between  ">
        <p className="text-end">{product.name}</p>
      </div>
      <div className="h-[90%] ">
        <img className="h-full w-fit" src={product.image.url} alt="" />
      </div>
    </div>
  );
}
