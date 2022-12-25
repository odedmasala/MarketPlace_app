import React from 'react';
import { FiMap } from 'react-icons/fi';

export default function () {
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col items-center justify-between bg-white p-4 w-[350px] md:w-[500px] h-[250px]">
        <button className="self-end text-[#3b3c3e99]">X</button>
        <FiMap className="text-[#A4D11E] text-3xl" />
        <h1 className="text-2xl text-[#3b3c3e99]">
          ? אנא יידע אותנו לגבי מיקומך
        </h1>
        <select
          className="text-sm w-[220px] text-[#3b3c3e99]"
          id="countrySelect"
          size="1"
        >
          <option disabled selected>
            מרכז
          </option>
          <option>צפון</option>
          <option>מרכז</option>
          <option>דרום</option>
        </select>
        <div>
          <button className="bg-[#A4D11E] hover:bg-sky-400 w-[170px] h-[40px] p-2 rounded text-white">
            התחל קנייה
          </button>
        </div>
      </div>
    </div>
  );
}
