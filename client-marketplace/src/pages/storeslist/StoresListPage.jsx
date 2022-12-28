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
  const [stores, setStores] = useState([]);
  const [department, setDepartment] = useState({image:{url:""}})
  const[address, setAddress] = useState('')
  const windowSize = useWindowSize();
  const { id } = useParams();

  const getStoresInDepartment = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/store?departmentId=${id}`
    );
    setStores(data);
  };

  const getDepartmentById = async() =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/department/${id}`)
    setDepartment(data)
  }

  const filteredByLocation = ()=>{
    const filtered = stores.filter((store)=>{
      if(store.address.city == address){
        return store;
      }
    })
    if(filtered.length <= 0){
      return stores;
    }else{
      return filtered;
    }
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
          <FilterByCities callback={(filter)=> setAddress(filter)} stores= {stores}/>
          <div>
            <div className="flex justify-end items-center">
              <p className="text-right text-xl">
                נמצאו <span className="text-[#0899A5]">{filteredByLocation()?.length}</span>{" "}
                חנויות
              </p>
              <IoStorefrontSharp className="text-4xl text-[#0899A5] ml-2 mr-5 md:mr-0" />
            </div>
            {filteredByLocation()?.map((store) =>
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
