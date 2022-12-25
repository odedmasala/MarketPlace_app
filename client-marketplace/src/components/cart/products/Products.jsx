import React from "react";
import AmountButton from "../../../features/buttons/AmountButton";

export default function Products({ product }) {
  return (
    <div
      className="flex
    h-[60px] px-2 my-6 justify-between items-center text-sm"
    >
      <div className=" h-full flex flex-col justify-end items-center">
        <div className="flex">
          <AmountButton button={"-"} />
          <span>1</span>
          <AmountButton button={"+"} />
        </div>
        <p className="mt-1">{product.price} ש"ח</p>
      </div>
      <div className=" flex items-end justify-between  ">
        <p className="text-end">{product.name}</p>
      </div>
      <div className="h-[90%] ">
        <img className="h-full w-fit" src={product.image} alt="" />
      </div>
    </div>
  );
}
