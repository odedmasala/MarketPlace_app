import React from "react";
import { IoStorefrontSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function StoreMobile({ storeData }) {
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...קרא עוד";
    } else {
      return str;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url("${storeData?.coverImage.url}")` }}
      className=" bg-no-repeat bg-cover bg-center h-44 w-[90%] m-auto flex flex-col justify-end md:hidden block mb-3"
    >
      <div className=" bg-[#ffffffd1] flex items-end justify-end text-right pb-2 h-2/4 px-2">
        <div className="mr-4 text-[12px] font-thin w-3/4">
          <h3 className="font-bold">{storeData.name}</h3>
          <p>{truncateString(storeData.description, 25)}</p>
          <div className="flex flex-row-reverse justify-between items-end">
            <div className="flex justify-end mt-1 font-thin">
              <p>
                {storeData.address?.street}, {storeData.address?.city}
              </p>
              <p className="mt-2 ml-2">
                <IoStorefrontSharp className="text-[#0899A5]" />
              </p>
            </div>
            <div>
              <button
                onClick={() => navigate(`/store/${storeData._id}`)}
                className="bg-[#0899A5] p-1 px-2 text-white"
              >
                קנה בחנות זו
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <img
            className=" h-[110px] w-[110px] border-2 border-white"
            src={storeData.logo?.url}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
