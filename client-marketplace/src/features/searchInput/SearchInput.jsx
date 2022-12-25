import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

export default function SearchInput() {
  return (
    <div className="lg:flex items-center border-2 px-4 h-8 w-7/12 justify-between hidden">
      <AiOutlineClose size={"20px"} />
      <input
        type={"text"}
        placeholder={"?מה תרצה לחפש היום"}
        className="border-none text-right h-full"
      />
      <AiOutlineSearch size={"20px"} />
    </div>
  );
}
