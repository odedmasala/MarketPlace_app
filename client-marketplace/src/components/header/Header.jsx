import React from 'react';

export default function Header({ departmentName = 'מזון' }) {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center my-3 h-52 md:h-[370px] w-full flex flex-col justify-end shadow-lg">
      <h1 className="text-5xl flex items-center h-[100%] text-white justify-center ">
        {departmentName}
      </h1>
    </div>
  );
}
