import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../mobile/NavBar';

export default function FooterContainer() {
  const navigate = useNavigate();
  return (
    <div>
      <Footer bgDark={true} className="mb-20 md:mb-0">
        <div className="w-full flex flex-col items-center  bg-gray-900">
          <div className="hidden md:grid w-3/4  text-center  text-gray-400  grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">
            <div>
              <Footer.LinkGroup col={true}>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate('/info/about')}
                >
                  אודותינו
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col={true}>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate('/info/questions')}
                >
                  שאלות נפוצות
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col={true}>
                <span className="cursor-pointer" onClick={() => navigate('/')}>
                  למחלקות
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col={true}>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate('/info/company')}
                >
                  משרדי החברה
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col={true}>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate('/info/suppliers')}
                >
                  ספקים
                </span>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center text-center bg-gray-900 py-6 px-4">
            <div className="flex justify-center space-x-6">
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <FaFacebookF size={'17px'} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <BsInstagram size={'17px'} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <HiOutlineMail size={'17px'} />
              </div>
            </div>
            <div className="text-gray-500 mt-4">
              © כל הזכויות שמורות לחברת מרקט
            </div>
          </div>
        </div>
      </Footer>
      <NavigationBar />
    </div>
  );
}
