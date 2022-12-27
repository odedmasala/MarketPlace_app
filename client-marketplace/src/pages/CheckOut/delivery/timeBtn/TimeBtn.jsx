import React from "react";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function TimeBtn({ time }) {
  const address = JSON.parse(localStorage.getItem("Address"));
  address.time = time;
 
  const notify = ()=>{
    toast.success('בוצע בהצלחה ', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div className="pt-4">
      <div className="flex justify-between px-2 items-center">
        <button
          onClick={() => {
            notify()
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
        <ToastContainer />
    </div>
  );
}
