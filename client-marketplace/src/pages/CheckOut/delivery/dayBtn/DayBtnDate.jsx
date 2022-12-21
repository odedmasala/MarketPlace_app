import React from "react";
import { useState } from "react";

export default function DayBtnDate({ day, date }) {
  const [bgColor, setBgColor] = useState(false);
  return (
    <div className=" m-1">
      <button
        onClick={() => setBgColor(!bgColor)}
        className={
          bgColor
            ? "bg-teal-500 flex justify-center items-center rounded-md text-white px-12 py-6"
            : "bg-slate-400 flex justify-center items-center border-0 rounded-md text-white px-12 py-6"
        }
      >
        {day}
        <br />
        {date}
      </button>
    </div>
  );
}
