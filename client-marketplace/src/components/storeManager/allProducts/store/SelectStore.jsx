import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectStore = ({ store }) => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState({
    address: {
      apartment: "",
      building: "",
      city: "",
      floor: "",
      street: "",
    },
    bnNumber: "",
    coverImage:
      "",
    description:
      "",
    email: "",
    logo: {
      public_id: "",
      url: "",
      _id: "",
    },
    name: "",
    phone: "",
  });

  const handleInput = (e) => {
    if(e.target.name === "logo"){
        setStoreData({ ...storeData, logo :{ url : e.target.value} });
    }else if(e.target.name === "city"||e.target.name === "street"||e.target.name === "building"||e.target.name === "apartment"||e.target.name === "floor"||e.target.name === "comment"){
        setStoreData({ ...storeData, address :{...storeData.address, [e.target.name] : e.target.value} });
    }else{

        setStoreData({ ...storeData, [e.target.name]: e.target.value });
    }
  };
  useEffect(()=>{
setStoreData(store)
  },[store.bnNumber])
  return (
    <>
      <div
        // style={{ backgroundImage: `url(${store.coverImage})` }}
        className="m-3 bg-no-repeat bg-cover  md:w-1/4 text-center border-4  font-bold p-4"
      >
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="name" value={storeData.name} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>שם</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="phone" value={storeData.phone} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>פלאפון</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="email" name="email" value={storeData.email} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>מייל</p>
        </div>
        <div  className="flex justify-between items-center">
          <textarea onChange={handleInput} type="text" name="description" value={storeData.description} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>תיאור</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="city" value={storeData.address.city} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>עיר</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="street" value={storeData.address.street} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>רחוב</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="building" value={storeData.address.building} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>בניין</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="floor" value={storeData.address.floor} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>קומה</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="text" name="apartment" value={storeData.address.apartment} className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>דירה</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="file" name="coverImage"  className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>תמונת רקע</p>
        </div>
        <div className="flex justify-between items-center">
          <input onChange={handleInput} type="file" name="logo"  className="text-right bg-transparent border-r-0 border-l-0 border-t-0" />
          <p>לוגו</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="border-2 p-3 bg-red-600 hover:bg-red-400 cursor-pointer">שמור שינויים</button>
          <button 
          onClick={() => navigate(`/storeManager/section/${storeData._id}`)}
          className="border-2 p-3 bg-green-600 hover:bg-green-400 cursor-pointer">כנס לחנות</button>
        </div>
      </div>
    </>
  );
};

export default SelectStore;
