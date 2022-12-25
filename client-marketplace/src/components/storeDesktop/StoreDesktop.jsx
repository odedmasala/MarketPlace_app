import React from "react";
import {IoStorefrontSharp} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";


export default function StoreDesktop({storeData}) {
  const navigate = useNavigate()
  return (
    <div className="md:flex justify-end text-right border-[1px] bg-white hidden py-4 mb-1">
      <div className="mr-4 font-thin w-3/4">
        <h3 className="font-bold">{storeData.name}</h3>
        <p>{storeData.description}</p>
        <div className="flex flex-row-reverse justify-between items-end">
        <div className="flex justify-end mt-2 font-thin">
            <p>,{storeData.address.street}<br/>{storeData.address.city}</p>
            <p className="mt-2 ml-2"><IoStorefrontSharp className="text-[#0899A5]"/></p>
        </div>
        <div>
            <button className="bg-[#0899A5] p-1 px-2 text-white" onClick={()=>navigate(`/store/${storeData._id}`)}>קנה בחנות זו</button>
        </div>
        </div>
      </div>
      <img src={storeData.logo.url} alt="logo" className="w-[15%]" />
    </div>
  );
}
