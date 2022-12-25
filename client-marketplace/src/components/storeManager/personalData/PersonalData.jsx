import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PersonalData = () => {
    const personalData = {  image: {
      url: "kdkdkdkd"
    },
    firstName: "yakov ",
    lastName: "melke",
    email: "aaaaa@aaaaa.aaa",
    phone: "050404040404",
    phone2: "05034443434",
    address: {
      city: "asd",
      street: "das",
      building: "ds",
      apartment: "sss",
      floor: "adda",
      comment: "sdavssfgvs asg asd gf asdg sdg s sdg asdgfa",
    }}
    const [managerData,setManagerData] =useState({})
    
const getDataFromServer = async()=>{
const {data } = await axios.get("http://localhost:8001/api/storeManager/63a82c97c672788abe31e60f")
console.log(data);
setManagerData({...personalData,...data})
}
const changeDataInServer = async()=>{
const {data } = await axios.put("http://localhost:8001/api/storeManager/63a82c97c672788abe31e60f",managerData)
console.log(data);
getDataFromServer()
}

useEffect(()=>{
getDataFromServer()
},[])
  const handleInput = (e) => {
    if(e.target.name === "image"){
        setManagerData({ ...managerData, image :{ url : e.target.value} });
    }else if(e.target.name === "city"||e.target.name === "street"||e.target.name === "building"||e.target.name === "apartment"||e.target.name === "floor"||e.target.name === "comment"){
        setManagerData({ ...managerData, address :{...managerData.address, [e.target.name] : e.target.value} });
    }else{

        setManagerData({ ...managerData, [e.target.name]: e.target.value });
    }
  };
    return (
    <div className='flex justify-end'>
        <div className='md:w-[40%] flex flex-col'>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p  className="text-end">תמונה </p>
            <input value={managerData?.image?.url} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0 "  name="image" type="text" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">שם פרטי </p>
            <input value={managerData?.firstName} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="firstName" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">שם משפחה </p>
            <input value={managerData?.lastName} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="lastName" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">אימייל</p>
            <input value={managerData?.email} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="email" name="email" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">פלאפון </p>
            <input value={managerData?.phone} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="phone" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">פלאפון </p>
            <input value={managerData?.phone2} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="phone2" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">עיר </p>
            <input value={managerData?.address?.city} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="city" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">רחוב </p>
            <input value={managerData?.address?.street} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="street" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">בניין </p>
            <input value={managerData?.address?.building} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="building" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">דירה </p>
            <input value={managerData?.address?.apartment} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="apartment" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">קומה </p>
            <input value={managerData?.address?.floor} onChange={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="floor" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">הוראות </p>
            <textarea className="text-end" value={managerData?.address?.comment} onChange={handleInput} type="text" name="comment" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <button className='w-1/3 border-2 bg-green-500 text-white font-bold p-2 cursor-pointer ' onClick={()=>changeDataInServer()}> שמור שינויים</button>
            <button className='w-1/3 border-2 bg-red-500 text-white font-bold p-2 cursor-pointer ' onClick={()=>getDataFromServer()}> ביטול</button>
            
          </div>
        </div>
    </div>
  )
}

export default PersonalData