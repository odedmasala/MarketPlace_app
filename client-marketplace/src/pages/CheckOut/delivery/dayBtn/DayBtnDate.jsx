import React from "react";
import { useState } from "react";

export default function DayBtnDate({ day, date }) {
  const [bgColor, setBgColor] = useState(false);
  return (
    <div className=" m-1">
      <button
        onClick={() => {
          setBgColor(!bgColor);
          console.log(day, date);
        }}
        className={
          bgColor
            ? "bg-teal-500 flex justify-center items-center rounded-md text-white px-8 py-2 cursor-not-allowed"
            : "bg-slate-400 flex justify-center items-center border-0 rounded-md text-white px-8 py-2"
        }
      >
        {day}
        <br />
        {date}
      </button>
      
    </div>
  );
}
