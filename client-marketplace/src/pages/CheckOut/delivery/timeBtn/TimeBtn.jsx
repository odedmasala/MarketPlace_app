import React from "react";
import { Button } from "flowbite-react";

export default function TimeBtn({ time }) {
  return (
    <div className="pt-4">
      <div className="flex justify-between px-2 items-center">
        <button
          onClick={()=>console.log(time)}
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
