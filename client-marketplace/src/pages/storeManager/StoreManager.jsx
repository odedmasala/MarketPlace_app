import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterContainer from "../../components/footer/Footer";

const StoreManager = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-3 md:px-48 bg-white flex flex-col justify-between ">
        <div className=" p-0 flex justify-around mb-10">
          <p
            onClick={() => navigate("allStores")}
            className="store-manager-menu md:py-4 py-2 px-5"
          >
            כל החנויות
          </p>
          <p
            onClick={() => navigate("addProduct")}
            className="store-manager-menu md:py-4 py-2 px-5"
          >
          הוספת מוצר חדש לחנות
          </p>
          <p
            onClick={() => navigate("addSection")}
            className="store-manager-menu md:py-4 py-2 px-5"
          >
            הוספת קטגוריה חדשה לחנות
          </p>
        </div>
        <div className="md:w-[100%] min-h-screen">
          <Outlet />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default StoreManager;
