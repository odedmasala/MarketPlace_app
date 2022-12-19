import React from "react";

export default function Products({ product }) {
  return (
    <div className="flex
    h-[60px] px-2 my-6 gap-2 justify-between items-center ">
      <div className=" h-full flex flex-col justify-between items-center">
        <div className="flex gap-1">
          <button> - </button>
          <span>1</span>
          <button> + </button>
        </div>
        <p>{product.price} ש"ח</p>
      </div>
      <div className=" flex items-end flex-col justify-between  ">
        <p className="text-end">{product.name}</p>
        <p className="w-[80%] text-end text-sm text-gray-400">{product.description}</p>
        
      </div>
      <div className="h-[90%] ">
        <img className="h-full w-fit" src={product.image} alt="" />
      </div>
    </div>
  );
}
