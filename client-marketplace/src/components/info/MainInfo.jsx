import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import FooterContainer from '../footer/Footer';

const MainInfo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex bg-slate-100 flex-col-reverse md:flex-row py-0  md:px-72">
        <div className="bg-white md:h-screen md:w-[75%] ">
          <Outlet />
        </div>
        <div className="bg-white h-14 md:h-screen md:w-[25%] border-gray-300 border flex md:flex-col items-center ">
          <p
            onClick={() => navigate('about')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end py-3  md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 "
          >
            {' '}
            אודות
          </p>
          <p
            onClick={() => navigate('questions')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end  md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 "
          >
            {' '}
            שאלות נפוצות
          </p>
          <p
            onClick={() => navigate('blog')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end py-3 md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 "
          >
            {' '}
            בלוג
          </p>
          <p
            onClick={() => navigate('company')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 "
          >
            {' '}
            משרדי החברה
          </p>
          <p
            onClick={() => navigate('suppliers')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end py-3 md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 "
          >
            {' '}
            ספקים
          </p>
          <p
            onClick={() => navigate('headlines')}
            className="w-1/6 cursor-pointer md:w-full md:h-24 h-full text-center md:text-end md:py-6 md:px-10 md:text-xl border-x md:border py-3 border-gray-300 "
          >
            {' '}
            מדיניות פרטיות
          </p>
        </div>
      </div>
      <div>
        <FooterContainer />
      </div>
    </div>
  );
};

export default MainInfo;
