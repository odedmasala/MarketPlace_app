import React from "react";
import {IoStorefrontSharp} from 'react-icons/io5'

export default function StoreDesktop() {
  return (
    <div className="md:flex justify-end text-right border-[1px] bg-white hidden py-4 mb-1">
      <div className="mr-4 font-thin w-3/4">
        <h3 className="font-bold">חוות הבית</h3>
        <p>בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה</p>
        <div className="flex flex-row-reverse justify-between items-end">
        <div className="flex justify-end mt-2 font-thin">
            <p>,עמק זבולון <br/> מודיעין אזור המרכז</p>
            <p className="mt-2 ml-2"><IoStorefrontSharp className="text-[#0899A5]"/></p>
        </div>
        <div>
            <button className="bg-[#0899A5] p-1 px-2 text-white">קנה בחנות זו</button>
        </div>
        </div>
      </div>
      <img src='https://www.logodesign.net/images/home-page-logo-07.png' alt="logo" className="w-[15%]" />
    </div>
  );
}
