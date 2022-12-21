import React from "react";
import { Button } from "flowbite-react";

export default function TimeBtn({ time }) {
  return (
    <div className="pt-4">
      <div className="flex justify-between px-2 items-center">
        <Button
          outline={true}
          className="bg-teal-500 text-white px-8"
          color={"bg-teal-500"}
        >
          בחר
        </Button>
        <h5>{time}</h5>
      </div>
    </div>
  );
}
