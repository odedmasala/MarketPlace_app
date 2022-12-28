import React from "react";
import { useNavigate } from "react-router-dom";

export default function Department({ department }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${department.image.url})` }}
      onClick={() => navigate(`/${department._id}/stores`)}
      className="w-[47%] h-[200px] md:h-[300px] lg:h-[250px] lg:w-[37%] bg-no-repeat bg-cover bg-center relative m-1 flex justify-center items-end cursor-pointer"
    >
      <p className="py-3 md:p-6 w-full text-center bg-opacity-75 text-2xl bg-slate-100">
        {department.name}
      </p>
    </div>
  );
}
