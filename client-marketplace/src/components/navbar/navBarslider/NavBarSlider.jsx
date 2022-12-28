import React, { useState } from "react";
import Cart from "../../cart/Cart";
import { TbLogout } from "react-icons/tb";


export default function NavBarSlider({ handelNav ,nav }) {
  return (
    <div>
      <div
        style={{}}
        className={
          nav
            ? "fixed overflow-y-scroll z-20 left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-400%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="w-full h-[100%]">
          <div className="flex w-full items-center justify-between">
            <a href="#">
              <span className="self-center text-xl font-semibold text-[#3e8f7f] dark:text-white">
                MarketPlace
              </span>
            </a>
            <div
              onClick={handelNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <TbLogout />
            </div>
          </div>
          <div className="w-full h-[600px] mt-10 ">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
