import React, { useState } from "react";
import Cart from "../../cart/Cart";
import { TbLogout } from "react-icons/tb";
import { useEffect } from "react";

export default function NavBarSlider({ handelNav ,nav }) {
  useEffect(()=>{
    console.log(nav,handelNav);
  },[])
  return (
    <div className="bg-black">
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
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
          <div className="w-full mt-10">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
