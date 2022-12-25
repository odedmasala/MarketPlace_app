import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import FilterByCities from "../../features/filterCities/FilterByCities";
import StoreDesktop from "../../components/storeDesktop/StoreDesktop";
import StoreMobile from "../../components/mobile/StoreMobile";
import Cart from "../../components/cart/Cart";
import Header from "../../components/header/Header";
import { IoStorefrontSharp } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function StoresListPage() {
  const [stores, setStore] = useState([]);
  const [department, setDepartment] = useState({image:{url:""}})
  const windowSize = useWindowSize();
  const { id } = useParams();

  const getStoresInDepartment = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/store?departmentId=${id}`
    );
    setStore(data);
  };

  const getDepartmentById = async() =>{
    const {data} = await axios.get(`http://localhost:8001/api/department/${id}`)
    setDepartment(data)
  }

  useEffect(() => {
    getStoresInDepartment();
    getDepartmentById()
  }, []);
  return (
    <div>
      <Header department={department}/>
      <div className="w-full md:w-[80%] flex m-auto">
        <div className="w-[30%] hidden md:block">
          <Cart />
        </div>

        <div className="w-full md:w-[70%] ml-1">
          <FilterByCities />
          <div>
            <div className="flex justify-end items-center">
              <p className="text-right text-xl">
                נמצאו <span className="text-[#0899A5]">{stores.length}</span>{" "}
                חנויות
              </p>
              <IoStorefrontSharp className="text-4xl text-[#0899A5] ml-2 mr-5 md:mr-0" />
            </div>
            {stores.map((store) =>
              windowSize?.width < 765 ? (
                <StoreMobile storeData={store} key={store._id}/>
              ) : (
                <StoreDesktop storeData={store} key={store._id} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
