import React, { useState } from 'react'

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
    const [managerData,setManagerData] =useState(personalData)

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
            <input defaultValue={personalData.image.url} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0 "  name="image" type="text" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">שם פרטי </p>
            <input defaultValue={personalData.firstName} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="firstName" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">שם משפחה </p>
            <input defaultValue={personalData.lastName} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="lastName" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">אימייל</p>
            <input defaultValue={personalData.email} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="email" name="email" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">פלאפון </p>
            <input defaultValue={personalData.phone} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="phone" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">פלאפון </p>
            <input defaultValue={personalData.phone2} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="phone2" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">עיר </p>
            <input defaultValue={personalData.address.city} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="city" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">רחוב </p>
            <input defaultValue={personalData.address.street} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="street" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">בניין </p>
            <input defaultValue={personalData.address.building} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="building" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">דירה </p>
            <input defaultValue={personalData.address.apartment} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="apartment" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">קומה </p>
            <input defaultValue={personalData.address.floor} onClick={handleInput} className="text-end  border-r-0 border-t-0 border-l-0"  type="text" name="floor" />
          </div>
          <div className="flex flex-row-reverse justify-between py-3 px-2">
            <p className="text-end">הוראות </p>
            <textarea className="text-end" defaultValue={personalData.address.comment} onClick={handleInput} type="text" name="comment" />
          </div>
        </div>
    </div>
  )
}

export default PersonalData