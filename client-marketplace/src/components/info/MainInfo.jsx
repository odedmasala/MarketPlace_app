import React from "react";
import AboutPage from "./about/AboutPage";

const MainInfo = () => {
  return (
    <div className="flex bg-slate-100 flex-col-reverse md:flex-row py-0  md:px-72">
      <div className="bg-white md:h-screen md:w-[75%] ">
        <AboutPage />
      </div>
      <div className="bg-white h-14 md:h-screen md:w-[25%] border-gray-300 border flex md:flex-col items-center ">
        <p className="w-1/6  md:w-full md:h-24 h-full text-center md:text-end py-3   md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 ">
          {" "}
          אודות
        </p>
        <p className="w-1/6 md:w-full md:h-24 h-full text-center md:text-end  md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 ">
          {" "}
          שאלות נפוצות
        </p>
        <p className="w-1/6 md:w-full md:h-24 h-full text-center md:text-end py-3 md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 ">
          {" "}
          בלוג
        </p>
        <p className="w-1/6 md:w-full md:h-24 h-full text-center md:text-end md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 ">
          {" "}
          משרדי החברה
        </p>
        <p className="w-1/6 md:w-full md:h-24 h-full text-center md:text-end py-3 md:py-6 md:px-10 md:text-xl border-x md:border border-gray-300 ">
          {" "}
          ספקים
        </p>
        <p className="w-1/6 md:w-full md:h-24 h-full text-center md:text-end md:py-6 md:px-10 md:text-xl border-x md:border py-3 border-gray-300 ">
          {" "}
          כותרות
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
