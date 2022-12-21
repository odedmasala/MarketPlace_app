import React from "react";
import FilterByCities from "../../features/filterCities/FilterByCities";
import StoreDesktop from "../../components/storeDesktop/StoreDesktop";
import StoreMobile from "../../components/mobile/StoreMobile";
import Cart from "../../components/cart/Cart";
import { IoStorefrontSharp } from "react-icons/io5";

export default function StoresListPage() {
  return (
    <div className="w-full md:w-[80%] flex m-auto">
      <div className="w-[30%] hidden md:block">
        <Cart />
      </div>

      <div className="w-full md:w-[70%] ml-1">
        <FilterByCities />
        <div>
          <div className="flex justify-end items-center">
            <p className="text-right text-xl">נמצאו <span className="text-[#0899A5]">3</span> חנויות</p>
            <IoStorefrontSharp className="text-4xl text-[#0899A5] ml-2 mr-5 md:mr-0"/>
          </div>
          <StoreDesktop />
          <StoreDesktop />
          <StoreDesktop />
          <StoreMobile />
          <StoreMobile />
          <StoreMobile />
        </div>
      </div>
    </div>
  );
}
