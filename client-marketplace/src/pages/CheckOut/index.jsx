import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cart } from "../../components";
import NavigationBar from "../../components/mobile/NavBar";
import CheckOut from "./CheckOut";

export default function Index() {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start  md:flex-row md:justify-evenly pt-5">
        <div className="w-[25%] hidden md:flex">
          <Cart />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <CheckOut />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
