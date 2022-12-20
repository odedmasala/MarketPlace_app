import React from "react";
import { useState } from "react";

const Dropdown = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" my-5">
      <div className="flex justify-end">
        <h1>{question.title}</h1>
        <button className="mx-3" onClick={()=>setOpen(!open)}>{open ? "-" : "+"}</button>
      </div>
      <div  className={`flex justify-end px-8  ease-in duration-500 ${open?"opacity-100":"opacity-20"} `}>
        <p  className={`w-[80%] ${open?"block":"hidden"}`}>{question.info}</p>
      </div>
    </div>
  );
};

export default Dropdown;
