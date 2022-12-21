import React from "react";
import { useNavigate } from "react-router-dom";

export default function Department({ department }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${department._id}/stores`)}
      className="w-[47%] md:w-[32%] border-2 h-[160px] md:h-[260px] relative m-1 flex justify-center items-end cursor-pointer"
    >
      <img
        className="absolute w-full h-full"
        src={department.image.url}
        alt={department.name}
      />
      <p className="z-10 py-3 md:p-6 w-full text-center bg-opacity-75 text-2xl bg-slate-100">
        {department.name}
      </p>
    </div>
  );
}
