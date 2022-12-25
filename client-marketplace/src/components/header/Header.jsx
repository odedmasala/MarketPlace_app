import React from 'react';

export default function Header({ department }) {
  return (
    <div className="bg-no-repeat bg-cover bg-center my-3 h-52 md:h-[370px] w-full flex flex-col justify-end shadow-lg" style={{backgroundImage:`url(${department.image.url})`}}>
      <h1 className="text-5xl flex items-center h-[100%] text-white justify-center ">
        {department.name}
      </h1>
    </div>
  );
}