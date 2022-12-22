import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterContainer from "../../components/footer/Footer";

const StoreManager = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-3 md:px-48 bg-white md:flex justify-between ">
        <div className="border border-gray-300 p-0 flex justify-between md:flex-col text-center md:justify-start md:w-[25%]">
          <p
            onClick={() => navigate("allProducts")}
            className="cursor-pointer border border-gray-300 text-gray-700 text-lg font-medium md:py-4 py-2 px-5 "
          >
            כל המוצרים
          </p>
          <p
            onClick={() => navigate("addProduct")}
            className="cursor-pointer border border-gray-300 text-gray-700 text-lg font-medium py-2 md:py-4 px-5 "
          >
            הוספה
          </p>
          <p
            onClick={() => navigate("personalData")}
            className="cursor-pointer border border-gray-300 text-gray-700 text-lg font-medium py-2 md:py-4 px-5 "
          >
            פרטים אישים
          </p>
        </div>
        <div className="border md:w-[74%] min-h-screen">
          <Outlet />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default StoreManager;
