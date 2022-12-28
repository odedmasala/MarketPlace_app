import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../../../../utils";

export default function DayBtnDate({ day, date }) {
  const address = JSON.parse(localStorage.getItem("Address"));
  address.day = day;
  address.date = date;

  return (
    <div className=" m-1">
      <button
        onClick={() => {
          notify(` !יום ${day} נוסף בהצלחה`);
          localStorage.setItem("Address", JSON.stringify(address));
        }}
        className={
          "hover:bg-teal-500 bg-slate-500 flex justify-center items-center rounded-md text-white px-8 py-2 "
        }
      >
        {day}
        <br />
        {date}
      </button>
    </div>
  );
}
