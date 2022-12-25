import React from 'react';
// import { Navigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { CgMenuRightAlt } from 'react-icons/cg';

export default function NavigationBar() {
  return (
    <div className="bg-white fixed bottom-0 inset-x-0 px-4 py-3  md:hidden flex items-center justify-around">
      <div className="flex flex-col cursor-pointer text-[30px] items-center justify-center">
        <BsShop />
        <p className="text-[15px]">אזור אישי</p>
      </div>
      <div className="flex flex-col cursor-pointer text-[30px] items-center justify-center">
        <AiOutlineShoppingCart />
        <p className="text-[15px]">העגלה שלי</p>
      </div>
      <div className="flex flex-col cursor-pointer text-[30px] items-center justify-center">
        <BiSearchAlt />
        <p className="text-[15px]">חיפוש</p>
      </div>
      <div className="flex flex-col cursor-pointer text-[30px] items-center justify-center">
        <CgMenuRightAlt />
        <p className="text-[15px]">תפריט</p>
      </div>
    </div>
  );
}
