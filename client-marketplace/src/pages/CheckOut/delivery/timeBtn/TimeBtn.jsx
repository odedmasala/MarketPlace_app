import React from "react";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../../../../utils";

export default function TimeBtn({ time }) {
  const address = JSON.parse(localStorage.getItem("Address"));
  address.time = time;
 
 
  return (
    <div className="pt-4">
      <div className="flex justify-between px-2 items-center">
        <button
          onClick={() => {
            notify(` בין השעות ${time}`)
            localStorage.setItem("Address", JSON.stringify(address))
          }}
          outline={true}
          className="border-teal-500 rounded-md text-teal-500 border-c border px-8"
          color={"bg-teal-500"}
        >
          בחר
        </button>
        <h5>{time}</h5>
      </div>
        
    </div>
  );
}
