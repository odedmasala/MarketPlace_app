import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { CgMenuRightAlt } from 'react-icons/cg';
import SlideMenu from './SlideMenu';
import LoginButton from '../auth/login/LoginButton';
import { GrLogin } from 'react-icons/gr';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white fixed bottom-0 inset-x-0 px-4 py-3  md:hidden flex items-center justify-around">
      <div
        onClick={() => navigate('/profile')}
        className="flex flex-col cursor-pointer text-[30px] items-center justify-center"
      >
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
      <div className="flex flex-col cursor-pointer text-[12px] items-center justify-center">
        <GrLogin className="text-[30px]" />
        <LoginButton />
      </div>
      <SlideMenu />
    </div>
  );
}
